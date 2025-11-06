"use client";

import { useEffect } from "react";

const WhatsAppBubble = () => {
  useEffect(() => {
    // Si ya existe el script, no lo agregamos de nuevo
    if (document.getElementById("crm_plugin_script")) return;

    (window as any).crm_plugin = {
      id: "1058575",
      hash: "9899a953a2a919b74062955b7dfd394ce54b0baa153c441a006c68647e5b3422",
      locale: "es",
      setMeta: function (p: unknown) {
        // @ts-ignore
        this.params = (this.params || []).concat([p]);
      },
    };

    (window as any).crmPlugin =
      (window as any).crmPlugin ||
      function () {
        // @ts-ignore
        (window as any).crmPlugin.q = (window as any).crmPlugin.q || [];
        // @ts-ignore
        (window as any).crmPlugin.q.push(arguments);
      };

    const script = document.createElement("script");
    script.id = "crm_plugin_script";
    script.async = true;
    script.src = "https://gso.kommo.com/js/button.js";
    document.head.appendChild(script);
  }, []);

  return null; // Kommo dibuja el botón automáticamente
};

export default WhatsAppBubble;
