/**
 * Formulario de contacto funcional
 * Soporta EmailJS y FormSubmit (ajax)
 */
const config = window.COOP_CONFIG || {};
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");
const submitBtn = document.getElementById("submit-btn");

function setStatus(message, type) {
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.className = `form-status form-status--${type}`;
}

function setLoading(loading) {
  if (!submitBtn) return;
  submitBtn.disabled = loading;
  const text = submitBtn.querySelector(".btn-text");
  const loader = submitBtn.querySelector(".btn-loader");
  if (text) text.hidden = loading;
  if (loader) loader.hidden = !loading;
}

function validateForm(data) {
  const errors = [];
  if (!data.nombre || data.nombre.trim().length < 2) {
    errors.push("nombre");
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("email");
  }
  if (!data.asunto) {
    errors.push("asunto");
  }
  if (!data.mensaje || data.mensaje.trim().length < 10) {
    errors.push("mensaje");
  }
  return errors;
}

function markInvalid(fields) {
  ["nombre", "email", "asunto", "mensaje"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle("is-invalid", fields.includes(id));
  });
}

async function sendViaFormSubmit(payload) {
  const endpoint =
    config.formsubmit?.endpoint ||
    `https://formsubmit.co/ajax/${encodeURIComponent(config.recipientEmail || "cooparauz@cooparauz.com.ar")}`;

  const body = {
    name: payload.nombre,
    email: payload.email,
    phone: payload.telefono || "No indicado",
    subject: `[Web Coop Arauz] ${payload.asunto}`,
    message: payload.mensaje,
    _subject: `[Web] ${payload.asunto} — ${payload.nombre}`,
    _template: "table",
    _captcha: "false",
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.message || "Error al enviar el formulario");
  }

  return response.json();
}

async function sendViaEmailJS(payload) {
  const { publicKey, serviceId, templateId } = config.emailjs || {};

  if (!publicKey || publicKey === "TU_PUBLIC_KEY") {
    throw new Error("EmailJS no está configurado. Edite js/config.js");
  }

  const emailjs = await import(
    "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.mjs"
  );

  emailjs.default.init(publicKey);

  return emailjs.default.send(serviceId, templateId, {
    from_name: payload.nombre,
    from_email: payload.email,
    phone: payload.telefono || "No indicado",
    subject: payload.asunto,
    message: payload.mensaje,
    to_email: config.recipientEmail,
  });
}

async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const honeypot = formData.get("_gotcha");
  if (honeypot) return;

  const payload = {
    nombre: (formData.get("nombre") || "").toString().trim(),
    email: (formData.get("email") || "").toString().trim(),
    telefono: (formData.get("telefono") || "").toString().trim(),
    asunto: (formData.get("asunto") || "").toString(),
    mensaje: (formData.get("mensaje") || "").toString().trim(),
  };

  const invalid = validateForm(payload);
  markInvalid(invalid);

  if (invalid.length) {
    setStatus("Complete los campos marcados correctamente.", "error");
    return;
  }

  setLoading(true);
  setStatus("Enviando su consulta…", "success");

  try {
    const provider = config.provider || "formsubmit";

    if (provider === "emailjs") {
      await sendViaEmailJS(payload);
    } else {
      await sendViaFormSubmit(payload);
    }

    form.reset();
    markInvalid([]);
    setStatus(
      "¡Mensaje enviado! Nos comunicaremos a la brevedad al correo que indicó.",
      "success"
    );
  } catch (error) {
    console.error("Contact form error:", error);
    setStatus(
      error.message ||
        "No pudimos enviar el mensaje. Intente por teléfono al (02925) 493-208 o escriba a cooparauz@cooparauz.com.ar",
      "error"
    );
  } finally {
    setLoading(false);
  }
}

if (form) {
  form.addEventListener("submit", handleSubmit);
}
