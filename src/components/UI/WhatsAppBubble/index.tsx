"use client";
import { useEffect, useState } from "react";
import { FloatingButton } from "./styles";

const WhatsAppBubble = () => {
  const [pluginLoaded, setPluginLoaded] = useState(false);

  useEffect(() => {
    // Evitar doble carga del script
    if (document.getElementById("crm_plugin_script")) {
      setPluginLoaded(true);
      return;
    }

    (window as any).crm_plugin = {
      id: "1058575",
      hash: "9899a953a2a919b74062955b7dfd394ce54b0baa153c441a006c68647e5b3422",
      locale: "es",
    };

    const s = document.createElement("script");
    s.id = "crm_plugin_script";
    s.src = "https://gso.kommo.com/js/button.js";
    s.async = true;
    s.onload = () => setPluginLoaded(true);
    document.head.appendChild(s);
  }, []);

  // Si aún no cargó Kommo → fallback WhatsApp
  if (!pluginLoaded) {
    return (
      <FloatingButton
        href="https://wa.me/message/BDRPYGZON5JOL1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
      </FloatingButton>
    );
  }

};

export default WhatsAppBubble;
