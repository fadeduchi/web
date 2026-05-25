# Sitio web oficial — Cooperativa de Servicios y Obras Públicas de Jacinto Arauz Ltda.

**Página oficial** para publicar en https://www.cooparauz.com.ar  
Proyecto estático: HTML + CSS + JavaScript. Sin base de datos.

---

## Índice

1. [Archivos importantes](#1-archivos-importantes)
2. [Publicar el sitio (tutorial completo)](#2-publicar-el-sitio-tutorial-completo)
3. [Ver el sitio en su computadora](#3-ver-el-sitio-en-su-computadora)
4. [Logo e imágenes oficiales](#4-logo-e-imágenes-oficiales)
5. [Formulario de correo — FormSubmit](#5-formulario-de-correo--formsubmit-recomendado)
6. [Formulario de correo — EmailJS](#6-formulario-de-correo--emailjs-alternativa)
7. [Modificar teléfonos, dirección y textos](#7-modificar-teléfonos-dirección-y-textos)
8. [Modificar diseño y colores](#8-modificar-diseño-y-colores)
9. [Solución de problemas](#9-solución-de-problemas)
10. [Lista de archivos a subir al hosting](#10-lista-de-archivos-a-subir-al-hosting)

---

## 1. Archivos importantes

| Archivo | Para qué sirve |
|---------|----------------|
| `index.html` | Toda la página (textos, secciones, teléfonos en HTML) |
| `js/config.js` | **Correo del formulario** (FormSubmit o EmailJS) |
| `js/datos.js` | Referencia central de teléfonos y mail (copiar a mano en HTML) |
| `js/contact.js` | Lógica del formulario — **no editar** salvo que sepa programar |
| `css/styles.css` | Colores, tipografías, diseño |
| `assets/logo-cooperativa.png` | **Logo oficial** (encabezado y pie) |
| `assets/favicon-32.png` | Icono de la pestaña del navegador |
| `assets/apple-touch-icon.png` | Icono al guardar en celular |
| `assets/images/web/` | **Todas las fotos del sitio** |

---

## 2. Publicar el sitio (tutorial completo)

### Paso 1 — Preparar archivos

Copie la carpeta completa `cooparauz-web` a su PC. Verifique que existan:

- `index.html` (en la raíz)
- `assets/logo-cooperativa.png`
- `assets/images/web/hero-sede-cooperativa.jpg`
- `assets/images/web/galeria-sede-cooperativa.jpg`
- `js/config.js`

### Paso 2 — Subir por FTP o cPanel

1. Entre al panel de su hosting (DonWeb, Hostinger, cPanel, etc.).
2. Abra el administrador de archivos o use **FileZilla**.
3. Vaya a la carpeta del dominio, por ejemplo `public_html/` o `www/`.
4. Suba **todo el contenido** de `cooparauz-web` (no la carpeta padre vacía).
5. Debe quedar así:

```
public_html/
  index.html
  css/
  js/
  assets/
  robots.txt
  sitemap.xml
```

### Paso 3 — Activar HTTPS

En el panel del hosting: **SSL / Let's Encrypt → Activar** para `cooparauz.com.ar`.

### Paso 4 — Probar

1. Abra https://www.cooparauz.com.ar
2. Compruebe que se ve el **logo** y la **foto de la sede**.
3. Envíe un mensaje de prueba en **Contacto** (ver sección 5).

---

## 3. Ver el sitio en su computadora

**No use doble clic en index.html** (`file://`). Use un servidor local:

### Windows (PowerShell)

```powershell
cd C:\Users\titie\Projects\cooparauz-web
python -m http.server 8080
```

Abra el navegador: **http://localhost:8080**

Para detener: `Ctrl + C` en la ventana de PowerShell.

---

## 4. Logo e imágenes oficiales

### Logo

| Archivo | Uso |
|---------|-----|
| `assets/logo-cooperativa.png` | Logo en menú y pie de página |
| `assets/favicon-32.png` | Icono de la pestaña |
| `assets/apple-touch-icon.png` | Icono en iPhone/Android |

**Cambiar el logo:** reemplace `assets/logo-cooperativa.png` por su imagen (PNG, fondo transparente o blanco, mínimo 200×200 px). Mantenga el mismo nombre.

### Foto de la sede (Bernardino Rivadavia 140)

| Archivo | Uso |
|---------|-----|
| `assets/images/web/hero-sede-cooperativa.jpg` | Foto grande del inicio |
| `assets/images/web/galeria-sede-cooperativa.jpg` | Sección sede y galería |
| `assets/images/web/servicio-sede.jpg` | Opcional en tarjetas |

**Cambiar la foto de la sede:**

1. Guarde la nueva foto como `assets/images/web/sede-cooperativa.jpg` (reemplaza la anterior).
2. Regenerar versiones optimizadas:

```powershell
cd C:\Users\titie\Projects\cooparauz-web
python scripts/optimize-images.py
```

3. Suba al hosting la carpeta `assets/images/web/` completa.
4. En el navegador: `Ctrl + F5` para recargar sin caché.

### Proporción de la foto de sede

La foto oficial es **900×600 px** (relación 3:2). En `index.html` los atributos `width` y `height` deben coincidir con el archivo real para que no se deforme. Si sube una foto más grande, ejecute `python scripts/optimize-images.py` y actualice esos números si cambia la proporción.

### Mapas (Google Maps)

Hay dos vistas previas embebidas (galería e infraestructura). La URL del iframe se configura en `js/datos.js` → `mapaEmbed` y `mapaEnlace`.

### Otras imágenes (localidad, historia)

Están en `assets/images/web/` con nombres descriptivos (`galeria-panorama.jpg`, etc.). Puede reemplazarlas igual que la sede.

---

## 5. Formulario de correo — FormSubmit (recomendado)

**Estado actual:** activo por defecto. Los mensajes del formulario llegan a **cooparauz@cooparauz.com.ar**.

### Archivo a editar: `js/config.js`

```javascript
window.COOP_CONFIG = {
  provider: "formsubmit",
  recipientEmail: "cooparauz@cooparauz.com.ar",
  formsubmit: {
    endpoint: "https://formsubmit.co/ajax/cooparauz@cooparauz.com.ar",
  },
  // ...
};
```

### Tutorial paso a paso (primera vez)

| Paso | Acción |
|------|--------|
| 1 | Suba el sitio a **https** (no funciona bien en `file://`) |
| 2 | Entre a la web publicada → sección **Contacto** |
| 3 | Complete nombre, email, asunto y mensaje → **Enviar** |
| 4 | Abra el correo **cooparauz@cooparauz.com.ar** |
| 5 | Busque mail de **FormSubmit** con asunto de activación |
| 6 | Haga clic en el **enlace de activación** (solo una vez) |
| 7 | Envíe otro mensaje de prueba |
| 8 | Debe llegar el contenido del formulario |

### Cambiar el correo destino

Cambie **las dos líneas** al mismo mail nuevo:

```javascript
recipientEmail: "nuevo@correo.com.ar",
formsubmit: {
  endpoint: "https://formsubmit.co/ajax/nuevo@correo.com.ar",
},
```

Suba `js/config.js` al hosting y **vuelva a activar** FormSubmit con el correo nuevo (pasos 3–6).

---

## 6. Formulario de correo — EmailJS (alternativa)

Use esta opción si prefiere un panel web para ver plantillas y estadísticas.

### Paso 1 — Cuenta

1. Entre en https://www.emailjs.com/
2. Regístrese gratis.

### Paso 2 — Servicio de email

1. Menú **Email Services** → **Add New Service**.
2. Elija Gmail, Outlook u otro.
3. Conecte **cooparauz@cooparauz.com.ar**.
4. Copie el **Service ID** (ejemplo: `service_abc123`).

### Paso 3 — Plantilla

1. Menú **Email Templates** → **Create New Template**.
2. **To Email:** `cooparauz@cooparauz.com.ar`
3. **Reply To:** `{{from_email}}`
4. **Subject:** `Web Coop Arauz: {{subject}}`
5. **Content (cuerpo):**

```
Nuevo mensaje desde el sitio oficial

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Asunto: {{subject}}

Mensaje:
{{message}}
```

6. Guarde y copie el **Template ID** (ejemplo: `template_xyz789`).

### Paso 4 — API Key

1. **Account** → **API Keys**.
2. Copie la **Public Key**.

### Paso 5 — Configurar el sitio

Edite `js/config.js`:

```javascript
window.COOP_CONFIG = {
  provider: "emailjs",
  recipientEmail: "cooparauz@cooparauz.com.ar",
  emailjs: {
    publicKey: "PEGAR_SU_PUBLIC_KEY",
    serviceId: "PEGAR_SU_SERVICE_ID",
    templateId: "PEGAR_SU_TEMPLATE_ID",
  },
  formsubmit: {
    endpoint: "https://formsubmit.co/ajax/cooparauz@cooparauz.com.ar",
  },
};
```

### Paso 6 — Probar

Suba el archivo, abra el sitio en HTTPS, envíe el formulario y revise la bandeja.

**Importante:** los nombres `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{subject}}`, `{{message}}` deben coincidir exactamente con la plantilla.

---

## 7. Modificar teléfonos, dirección y textos

### Teléfonos y correo (rápido)

1. Abra `js/datos.js` y edite los valores.
2. Abra `index.html` y busque con **Ctrl + F** cada teléfono viejo para actualizarlo en:
   - Barra oficial (debajo del inicio)
   - Sección **Sede** (`#sede`)
   - **Emergencias** (`#emergencias`)
   - **Contacto** (`#contacto`)
   - **FAQ** (`#faq`)

Teléfonos actuales:

| Uso | Número |
|-----|--------|
| Fijo 1 | (02925) 493-208 |
| Fijo 2 | (02925) 493-433 |
| Celular | (0291) 15-461-4951 |
| Email | cooparauz@cooparauz.com.ar |
| Dirección | Bernardino Rivadavia 140, CP 2925 |

### Textos por sección

| Sección | En `index.html` buscar |
|---------|------------------------|
| Título del inicio | `id="hero-title"` |
| Descripción Google | `<meta name="description"` |
| Quiénes somos | `id="institucional"` |
| Historia | `id="historia"` |
| Servicios | `id="servicios"` |
| Emergencias | `id="emergencias"` |
| Noticias | `id="novedades"` |
| Preguntas frecuentes | `id="faq"` |

### Cambiar gerencia u horarios

Busque en `index.html` el texto `Natacha Ayerza` o agregue horarios en la sección `#sede` dentro de `<ul class="sede-facts">`.

---

## 8. Modificar diseño y colores

Archivo: `css/styles.css` — al inicio:

```css
:root {
  --color-primary: #0d6e7a;      /* Verde azulado institucional */
  --color-accent: #e8a838;       /* Dorado / alertas */
  --color-dark-soft: #0a3d4a;    /* Encabezados oscuros */
}
```

Guarde, recargue con `Ctrl + F5`.

---

## 9. Solución de problemas

| Problema | Causa probable | Solución |
|----------|----------------|----------|
| No se ven las fotos | No subió `assets/images/web/` | Suba la carpeta completa |
| Logo roto | Falta `logo-cooperativa.png` | Suba `assets/logo-cooperativa.png` |
| Formulario no envía | Sitio en `file://` o sin HTTPS | Use servidor local o hosting con SSL |
| Formulario no llega al mail | FormSubmit sin activar | Revise spam y enlace de activación |
| Cambié config.js y no pasa nada | Caché del navegador | `Ctrl + F5` o modo incógnito |
| EmailJS error | Keys incorrectas | Revise publicKey, serviceId, templateId |
| Mapa no carga | Sin internet o bloqueo de Google | Los mapas son iframes de Google Maps; el enlace «Abrir en Google Maps» sigue funcionando |

---

## 10. Lista de archivos a subir al hosting

Marque cada ítem al subir:

```
[ ] index.html
[ ] robots.txt
[ ] sitemap.xml
[ ] css/styles.css
[ ] js/config.js
[ ] js/contact.js
[ ] js/datos.js
[ ] js/main.js
[ ] assets/logo-cooperativa.png
[ ] assets/favicon-32.png
[ ] assets/apple-touch-icon.png
[ ] assets/images/web/hero-sede-cooperativa.jpg
[ ] assets/images/web/galeria-sede-cooperativa.jpg
[ ] assets/images/web/galeria-panorama.jpg
[ ] assets/images/web/galeria-estacion-1901.jpg
[ ] assets/images/web/galeria-vista-urbana.jpg
[ ] assets/images/web/servicio-energia.jpg
[ ] assets/images/web/servicio-fibra.jpg
[ ] (opcional) assets/images/web/sede-cooperativa.jpg — original alta resolución
```

---

## Datos institucionales (fuentes públicas)

| Dato | Fuente |
|------|--------|
| Bernardino Rivadavia 140, teléfonos, mail | [ESSApp / FEPAMCO](https://www.essapp.coop/cooperativa-de-servicios-y-obras-publicas-de-jacinto-arauz-ltda/sede-cooperativa-de-servicios-y) |
| Gerente Natacha Ayerza | [La Arena, abr. 2026](https://www.laarena.com.ar/la-pampa/empatel-refuerza-lazos-en-el-sur-provincial-20264512130) |
| Fibra óptica, licencia TV | [Corpico / La Arena, 2020](https://www.corpico.com.ar/novedades/478/) |
| Dr. Favaloro, cooperativa eléctrica | [Diario de Rivera](https://www.diarioderivera.com.ar/2025/04/06/favaloro-y-el-electricista/) |

---

## Contacto técnico del proyecto

- **Dominio objetivo:** https://www.cooparauz.com.ar  
- **Formulario:** `js/config.js`  
- **Regenerar imágenes:** `python scripts/optimize-images.py`

---

*Cooperativa de Servicios y Obras Públicas de Jacinto Arauz Ltda. — Sitio oficial.*
