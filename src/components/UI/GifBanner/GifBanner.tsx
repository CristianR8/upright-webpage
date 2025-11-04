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

  useEffect(() => {
    let cssLink: HTMLLinkElement | null = null;
    let scripts: HTMLScriptElement[] = [];
    let isCancelled = false;

    (async () => {
      // 1) Cargar el HTML desde /public/animations/gif-banner.html
      const res = await fetch("/animations/index.html");
      const markup = await res.text();
      if (isCancelled) return;

      setHtml(markup); // esto pinta el HTML en pantalla

      // 2) Inyectar el CSS (styles.css)
      cssLink = addStylesheet("/animations/styles.css");

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
  }, []);

  return (
    <div
      ref={containerRef}
      // Inyectamos el HTML tal cual (como viene de tu archivo)
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
