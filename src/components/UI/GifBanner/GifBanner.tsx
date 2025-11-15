"use client";

import { useEffect, useRef, useState } from "react";

// Utilidad pequeña para cargar un script y esperar a que termine
function loadScript(src: string): Promise<HTMLScriptElement> {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => resolve(s);
    s.onerror = () => reject(new Error(`Error cargando script: ${src}`));
    document.body.appendChild(s);
  });
}

// Utilidad para inyectar <link rel="stylesheet">
function addStylesheet(href: string): HTMLLinkElement {
  const l = document.createElement("link");
  l.rel = "stylesheet";
  l.href = href;
  document.head.appendChild(l);
  return l;
}

export default function GifBanner() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [html, setHtml] = useState<string>("");
  const [shouldInit, setShouldInit] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    // Si el navegador no soporta IntersectionObserver, inicializamos de una vez
    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
      setShouldInit(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShouldInit(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
        rootMargin: "160px 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldInit) return;

    let cssLink: HTMLLinkElement | null = null;
    let scripts: HTMLScriptElement[] = [];
    let isCancelled = false;

    (async () => {
      // 1) Cargar el HTML desde /public/animations/index.html
      const res = await fetch("/animations/index.html");
      const markup = await res.text();
      if (isCancelled) return;

      // 2) Inyectar el CSS (styles.css) y esperar a que esté listo
      cssLink = addStylesheet("/animations/styles.css");
      await new Promise<void>((resolve) => {
        if (!cssLink) return resolve();
        cssLink.onload = () => resolve();
        cssLink.onerror = () => resolve();
      });
      if (isCancelled) return;

      // Solo pintamos el HTML cuando el CSS ya está cargado, para evitar el cohete gigante sin estilos
      setHtml(markup);

      // 3) Cargar GSAP 2 (TweenMax) y luego tu main.js (en ese orden)
      //    Usa UNA de estas dos opciones:

      // Opción A: CDN de TweenMax (recomendada si no lo copiaste en /public)
      const tween = await loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
      );
      scripts.push(tween);

      // Opción B (alternativa): si copiaste TweenMax.min.js a /public/animations/
      // const tween = await loadScript("/animations/TweenMax.min.js");
      // scripts.push(tween);

      // Ahora tu coreografía (main.js) que usa TweenMax/TimelineMax
      const core = await loadScript("/animations/main.js");
      scripts.push(core);
    })();

    // cleanup
    return () => {
      isCancelled = true;
      if (cssLink) document.head.removeChild(cssLink);
      scripts.forEach((s) => s.parentNode?.removeChild(s));
      // Limpia el HTML inyectado
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, [shouldInit]);

  return (
    <div
      ref={containerRef}
      // Reservamos siempre el espacio del banner para evitar saltos de layout
      style={{
        width: "min(320px, 80vw)",
        aspectRatio: "1 / 1", // fuerza contenedor cuadrado
        margin: "0 auto",
        overflow: "hidden",
      }}
      // Inyectamos el HTML tal cual (como viene de tu archivo)
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
