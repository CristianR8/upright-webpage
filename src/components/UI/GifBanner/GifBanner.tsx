"use client";

import { useEffect, useRef, useState } from "react";

export default function GifBanner() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [srcDoc, setSrcDoc] = useState<string>("");
  const [shouldInit, setShouldInit] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

    let isCancelled = false;

    (async () => {
      try {
        const res = await fetch("/animations/index.html");
        const markup = await res.text();
        if (isCancelled) return;

        const doc = `<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/animations/styles.css" />
  <style>
    :root {
      --Background: #000000;
      --white: #fff;
      --gray: #f2f2f2;
      --cyan: #3ac1c0;
      --blue: #2e2d73;
      --indigo: #0e0142;
    }
    /* eliminar barras de scroll dentro del iframe */
    html, body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      width: 100%;
      height: 100%;
      background: transparent;
    }
    .artboard {
      margin: 0 auto;
    }
  </style>
</head>
<body>
${markup}
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
<script src="/animations/main.js"></script>
</body>
</html>`;
        setSrcDoc(doc);
        setIsVisible(true);
      } catch (e) {
        // si algo falla, simplemente dejamos el banner oculto
        console.error("No se pudo cargar la animación", e);
      }
    })();

    return () => {
      isCancelled = true;
    };
  }, [shouldInit]);

  return (
    <div
      ref={containerRef}
      // Reservamos siempre el espacio del banner para evitar saltos de layout
      style={{
        aspectRatio: "1 / 1",
        margin: "1rem auto 5rem",
        overflow: "hidden",
        borderRadius: "50%",
        border: "2px solid var(--blue)",
        background:
          "radial-gradient(circle at 50% 80%, var(--blue) 0%, transparent 65%)",
        boxShadow: "0 0 40px rgba(58,193,192,0.28)",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 320ms ease-out",
      }}
    >
      {srcDoc ? (
        <iframe
          title="Gif Banner"
          srcDoc={srcDoc}
          loading="lazy"
          scrolling="no"
          sandbox="allow-scripts allow-same-origin"
          aria-hidden="true"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
            borderRadius: "50%",
            overflow: "hidden",
            backgroundColor: "transparent",
            pointerEvents: "none", // allow page scroll to pass through
          }}
        />
      ) : null}
    </div>
  );
}
