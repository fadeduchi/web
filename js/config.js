/**
 * Configuración del formulario de contacto
 *
 * MÉTODO 1 — EmailJS (recomendado para producción con panel propio)
 * 1. Crear cuenta en https://www.emailjs.com/
 * 2. Conectar servicio de email (Gmail, Outlook, etc.) con cooparauz@cooparauz.com.ar
 * 3. Crear plantilla con variables: {{from_name}}, {{from_email}}, {{phone}}, {{subject}}, {{message}}
 * 4. Completar los IDs abajo y poner provider: "emailjs"
 *
 * MÉTODO 2 — FormSubmit (activo por defecto, sin API keys)
 * Envía correos reales a cooparauz@cooparauz.com.ar
 * La primera vez, FormSubmit envía un email de activación a esa casilla.
 */
window.COOP_CONFIG = {
  provider: "formsubmit",

  recipientEmail: "cooparauz@cooparauz.com.ar",

  emailjs: {
    publicKey: "TU_PUBLIC_KEY",
    serviceId: "TU_SERVICE_ID",
    templateId: "TU_TEMPLATE_ID",
  },

  formsubmit: {
    endpoint: "https://formsubmit.co/ajax/cooparauz@cooparauz.com.ar",
  },
};
