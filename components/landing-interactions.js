export function bindLandingInteractions() {
  const controller = new AbortController();
  const options = { signal: controller.signal };

  const artLink = document.querySelector("[data-open-art]");
  const artDialog = document.querySelector(".art-dialog");
  const artImage = document.querySelector("[data-art-image]");
  const artScroll = document.querySelector(".art-scroll");
  const zoomButton = document.querySelector("[data-zoom]");

  artLink.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || !artDialog.showModal) {
      return;
    }

    event.preventDefault();
    if (!artImage.getAttribute("src")) artImage.src = artLink.href;
    artDialog.showModal();
  }, options);

  zoomButton.addEventListener("click", () => {
    const isZoomed = artScroll.classList.toggle("zoomed");
    zoomButton.setAttribute("aria-pressed", String(isZoomed));
    zoomButton.textContent = isZoomed ? "Reducir" : "Ampliar";
    artScroll.scrollTo({
      left: isZoomed ? (artScroll.scrollWidth - artScroll.clientWidth) / 2 : 0,
      top: isZoomed ? (artScroll.scrollHeight - artScroll.clientHeight) / 2 : 0,
    });
  }, options);

  artDialog.addEventListener("close", () => {
    if (artScroll.classList.contains("zoomed")) zoomButton.click();
    artLink.focus();
  }, options);

  const contactForm = document.querySelector(".contact-form");
  const contactEmail = document.querySelector("#contacto-correo");
  const contactStatus = document.querySelector(".contact-status");

  contactForm.addEventListener("input", ({ target }) => {
    target.setCustomValidity("");
    contactStatus.textContent = "";
  }, options);

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const values = new FormData(contactForm);
    for (const name of ["nombre", "asunto", "mensaje"]) {
      if (!values.get(name).trim()) {
        const field = contactForm.elements.namedItem(name);
        field.setCustomValidity("Completa este campo.");
        field.reportValidity();
        return;
      }
    }

    const subject = encodeURIComponent(values.get("asunto").trim());
    const sender = values.get("nombre").trim();
    const replyEmail = values.get("correo").trim();
    const message = values.get("mensaje").trim().replace(/\r?\n/g, "\r\n");
    const body = encodeURIComponent(`Nombre: ${sender}\r\nCorreo de contacto: ${replyEmail}\r\n\r\n${message}`);
    contactStatus.textContent = "Si el borrador no se abre, usa la dirección de correo indicada arriba.";
    window.location.href = `${contactEmail.href}?subject=${subject}&body=${body}`;
  }, options);

  contactForm.hidden = false;

  return () => {
    controller.abort();
    contactForm.hidden = true;
  };
}
