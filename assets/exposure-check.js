(() => {
  "use strict";

  const form = document.querySelector("[data-exposure-form]");
  const result = document.querySelector("[data-exposure-result]");
  const resultTitle = document.querySelector("[data-result-title]");
  const resultIntro = document.querySelector("[data-result-intro]");
  const resultSteps = document.querySelector("[data-result-steps]");
  const resetButton = document.querySelector("[data-reset-check]");
  const shareButton = document.querySelector("[data-share-check]");
  const shareFallback = document.querySelector("[data-share-fallback]");
  const shareURLInput = document.querySelector("[data-share-url]");
  const shareStatus = document.querySelector("[data-share-status]");

  const copy = {
    en: {
      steps: {
        revoke: ["Replace and revoke the credential", "Use the issuing service—not the screenshot—to create a replacement if needed, update anything that depends on it, and revoke the old password, token, key, recovery material, or code. Deleting the image alone does not invalidate access."],
        confirm: ["Confirm that the credential is no longer valid", "Check with the issuing service. If validity is uncertain, treat the credential as active and replace or revoke it before focusing on image cleanup."],
        exposure: ["Review where the image could have traveled", "Check the message, ticket, shared album, post, backup, or device where the screenshot appeared. Remove copies you control and review the relevant account or provider logs for unexpected activity when available."],
        secure: ["Secure anything you still need", "Before deleting, move required recovery information or records to an appropriate safe location and verify that the replacement is usable. Do not destroy the only working recovery path."],
        redact: ["Prepare a separate, verified sharing copy", "Cover every private area with a solid opaque redaction, check the whole frame at full size, and review photo location metadata separately. Share only the inspected copy."],
        remove: ["Remove obsolete image copies", "After preserving anything necessary, delete the original screenshot. If immediate removal is appropriate, also review Recently Deleted; with iCloud Photos, deletion synchronizes across devices signed into the same Apple Account."],
        photos: ["Review Photos access", "In Settings, open Privacy & Security, then Photos, and remove access an app no longer needs. Permission cleanup limits future exposure but does not retract copies already shared."]
      },
      results: {
        urgent: ["Act on the credential first.", "Your answers indicate a possible access secret. Start with the issuing service, then clean up image copies."],
        review: ["Clean up the image deliberately.", "No urgent active credential is indicated, but the screenshot may still expose private information or leave unnecessary copies."],
        caution: ["No urgent credential step is indicated.", "That is not a guarantee that the image is safe. Inspect the full frame and confirm your answers before sharing or deleting anything."]
      },
      share: {
        url: "https://mityapolianskii.github.io/secretscan-app-store-pages/screenshot-exposure-check.html",
        title: "Sensitive Screenshot Exposure Check",
        text: "A free, private six-question check for what to do after a screenshot may have exposed a password or personal data. No upload or secret input.",
        shared: "Shared. No questionnaire answers were included.",
        copied: "Link copied. No questionnaire answers were included.",
        fallback: "Copy the selected page link. No questionnaire answers are included."
      }
    },
    es: {
      steps: {
        revoke: ["Cambia y revoca la credencial", "Usa el servicio que emitió la credencial, no la captura, para crear un reemplazo si hace falta, actualizar lo que dependa de ella y revocar la contraseña, token, clave, dato de recuperación o código anterior. Borrar la imagen no invalida el acceso."],
        confirm: ["Confirma que la credencial ya no es válida", "Compruébalo con el servicio que la emitió. Si no sabes si sigue vigente, trátala como activa y cámbiala o revócala antes de centrarte en borrar imágenes."],
        exposure: ["Revisa hasta dónde pudo llegar la imagen", "Comprueba el mensaje, ticket, álbum compartido, publicación, copia de seguridad o dispositivo donde apareció. Elimina las copias que controles y, cuando sea posible, revisa si el servicio o la cuenta muestran actividad inesperada."],
        secure: ["Protege lo que aún necesites", "Antes de borrar, traslada los datos de recuperación o documentos necesarios a un lugar seguro y comprueba que el reemplazo funciona. No destruyas la única vía de recuperación disponible."],
        redact: ["Prepara una copia separada y revisada para compartir", "Cubre cada zona privada con una redacción opaca, revisa todo el encuadre a tamaño completo y comprueba aparte los datos de ubicación de la foto. Comparte solo la copia inspeccionada."],
        remove: ["Elimina las copias obsoletas", "Después de conservar lo necesario, borra la captura original. Si procede eliminarla de inmediato, revisa también Eliminado recientemente; con Fotos en iCloud, el borrado se sincroniza entre dispositivos con la misma cuenta de Apple."],
        photos: ["Revisa el acceso a Fotos", "En Ajustes, abre Privacidad y seguridad y después Fotos. Retira el acceso que una app ya no necesite. Limitar permisos reduce la exposición futura, pero no recupera copias ya compartidas."]
      },
      results: {
        urgent: ["Actúa primero sobre la credencial.", "Tus respuestas indican que podría haber un secreto de acceso. Empieza por el servicio que lo emitió y después limpia las copias de la imagen."],
        review: ["Limpia la imagen con cuidado.", "No aparece una credencial activa urgente, pero la captura aún puede mostrar información privada o dejar copias innecesarias."],
        caution: ["No se indica una acción urgente sobre credenciales.", "Eso no garantiza que la imagen sea segura. Revisa todo el encuadre y confirma tus respuestas antes de compartir o borrar nada."]
      },
      share: {
        url: "https://mityapolianskii.github.io/secretscan-app-store-pages/es/revisar-captura-sensible.html",
        title: "Revisión de exposición de capturas sensibles",
        text: "Una revisión gratuita y privada de seis preguntas para actuar si una captura pudo mostrar una contraseña o datos personales. Sin subir imágenes ni introducir secretos.",
        shared: "Compartido. No se incluyó ninguna respuesta.",
        copied: "Enlace copiado. No se incluyó ninguna respuesta.",
        fallback: "Copia el enlace seleccionado. No contiene ninguna respuesta."
      }
    },
    de: {
      steps: {
        revoke: ["Zugangsdaten ersetzen und widerrufen", "Erstelle bei Bedarf beim ausstellenden Dienst, nicht anhand des Screenshots, einen Ersatz, aktualisiere abhängige Zugänge und widerrufe das alte Passwort, Token, den Schlüssel, Wiederherstellungsnachweis oder Code. Das Löschen des Bildes macht den Zugang nicht ungültig."],
        confirm: ["Bestätige, dass die Zugangsdaten nicht mehr gültig sind", "Prüfe den Status beim ausstellenden Dienst. Wenn er unklar ist, behandle die Zugangsdaten als aktiv und ersetze oder widerrufe sie, bevor du Bildkopien bereinigst."],
        exposure: ["Prüfe, wohin das Bild gelangt sein könnte", "Kontrolliere Nachricht, Ticket, geteiltes Album, Beitrag, Backup oder Gerät, auf dem der Screenshot erschien. Entferne Kopien unter deiner Kontrolle und prüfe verfügbare Konto- oder Anbieterprotokolle auf unerwartete Aktivitäten."],
        secure: ["Sichere, was du noch brauchst", "Verschiebe benötigte Wiederherstellungsdaten oder Unterlagen vor dem Löschen an einen geeigneten sicheren Ort und prüfe, ob der Ersatz funktioniert. Zerstöre nicht den einzigen nutzbaren Wiederherstellungsweg."],
        redact: ["Erstelle eine getrennte, geprüfte Kopie zum Teilen", "Decke jeden privaten Bereich vollständig und undurchsichtig ab, prüfe den gesamten Bildausschnitt in voller Größe und kontrolliere Standortdaten des Fotos separat. Teile nur die geprüfte Kopie."],
        remove: ["Entferne veraltete Bildkopien", "Lösche den Original-Screenshot, nachdem alles Nötige gesichert ist. Wenn sofortiges Entfernen angemessen ist, prüfe auch Zuletzt gelöscht; mit iCloud-Fotos wird das Löschen auf Geräten mit demselben Apple Account synchronisiert."],
        photos: ["Prüfe den Fotos-Zugriff", "Öffne unter Einstellungen Datenschutz & Sicherheit und dann Fotos. Entziehe Apps den nicht mehr benötigten Zugriff. Das begrenzt künftige Zugriffe, holt aber bereits geteilte Kopien nicht zurück."]
      },
      results: {
        urgent: ["Kümmere dich zuerst um die Zugangsdaten.", "Deine Antworten deuten auf ein mögliches Zugangsgeheimnis hin. Beginne beim ausstellenden Dienst und bereinige danach die Bildkopien."],
        review: ["Bereinige das Bild sorgfältig.", "Es ist keine dringende aktive Zugangsinformation erkennbar, doch der Screenshot kann weiterhin private Angaben zeigen oder unnötige Kopien hinterlassen."],
        caution: ["Kein dringender Schritt für Zugangsdaten erkennbar.", "Das garantiert nicht, dass das Bild sicher ist. Prüfe den gesamten Ausschnitt und bestätige deine Antworten, bevor du etwas teilst oder löschst."]
      },
      share: {
        url: "https://mityapolianskii.github.io/secretscan-app-store-pages/de/geteilten-screenshot-pruefen.html",
        title: "Prüfung für sensible Screenshots",
        text: "Ein kostenloser, privater Sechs-Fragen-Check für den Fall, dass ein Screenshot ein Passwort oder persönliche Daten gezeigt haben könnte. Kein Upload, keine Geheimnisse eingeben.",
        shared: "Geteilt. Keine Antworten wurden übermittelt.",
        copied: "Link kopiert. Keine Antworten wurden übermittelt.",
        fallback: "Kopiere den ausgewählten Seitenlink. Er enthält keine Antworten."
      }
    },
    ru: {
      steps: {
        revoke: ["Замените и отзовите секрет доступа", "Через сервис, который выдал секрет, при необходимости создайте замену, обновите зависящие от него настройки и отзовите старый пароль, токен, ключ, код или данные для восстановления. Удаление изображения само по себе не закрывает доступ."],
        confirm: ["Убедитесь, что секрет доступа больше не действует", "Проверьте статус в сервисе, который его выдал. Если статус неизвестен, считайте секрет действующим и замените либо отзовите его до удаления изображений."],
        exposure: ["Проверьте, куда могло попасть изображение", "Проверьте сообщение, заявку, общий альбом, публикацию, резервную копию или устройство, где появился скриншот. Удалите подконтрольные копии и, если возможно, проверьте журналы аккаунта или сервиса на неожиданную активность."],
        secure: ["Сохраните то, что ещё понадобится", "До удаления перенесите нужные данные для восстановления или документы в подходящее безопасное место и убедитесь, что замена работает. Не уничтожайте единственный доступный способ восстановления."],
        redact: ["Подготовьте отдельную проверенную копию для отправки", "Закройте каждую личную область полностью непрозрачной заливкой, проверьте весь кадр в полном размере и отдельно проверьте геоданные фотографии. Отправляйте только проверенную копию."],
        remove: ["Удалите ненужные копии изображения", "Сохранив всё необходимое, удалите исходный скриншот. Если требуется немедленное удаление, проверьте раздел «Недавно удалённые»; при использовании Фото iCloud удаление синхронизируется между устройствами с одним Аккаунтом Apple."],
        photos: ["Проверьте доступ к Фото", "В Настройках откройте «Конфиденциальность и безопасность», затем «Фото» и отключите доступ для приложений, которым он больше не нужен. Это ограничит будущий доступ, но не вернёт уже отправленные копии."]
      },
      results: {
        urgent: ["Сначала защитите секрет доступа.", "Ответы указывают на возможный секрет доступа. Начните с сервиса, который его выдал, а затем удалите лишние копии изображения."],
        review: ["Осознанно удалите лишние копии.", "Срочных действий с действующим секретом не выявлено, но скриншот всё ещё может содержать личные данные или оставаться в ненужных копиях."],
        caution: ["Срочных действий с секретом доступа не выявлено.", "Это не гарантирует безопасность изображения. Проверьте весь кадр и подтвердите ответы, прежде чем что-либо отправлять или удалять."]
      },
      share: {
        url: "https://mityapolianskii.github.io/secretscan-app-store-pages/ru/proverit-otpravlennyy-skrinshot.html",
        title: "Проверка чувствительного скриншота",
        text: "Бесплатная приватная проверка из шести вопросов на случай, если скриншот мог раскрыть пароль или личные данные. Без загрузки изображения и ввода секретов.",
        shared: "Ссылка отправлена. Ответы не передавались.",
        copied: "Ссылка скопирована. Ответы не передавались.",
        fallback: "Скопируйте выделенную ссылку. Она не содержит ответов."
      }
    }
  };

  const language = document.documentElement.lang.toLowerCase().split("-")[0];
  const strings = copy[language] || copy.en;

  if (!form || !result || !resultTitle || !resultIntro || !resultSteps || !resetButton) return;

  const value = (data, name) => data.get(name)?.toString() || "";

  const addStep = (steps, title, text) => steps.push({ title, text });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const access = value(data, "access");
    const exposure = value(data, "exposure");
    const active = value(data, "active");
    const onlyCopy = value(data, "onlyCopy");
    const personal = value(data, "personal");
    const remaining = value(data, "remaining");
    const steps = [];

    const credentialRisk = access !== "no";
    const possibleExposure = exposure !== "no";
    const possiblyActive = active !== "no";

    if (credentialRisk && possiblyActive) {
      addStep(
        steps,
        ...strings.steps.revoke
      );
    } else if (credentialRisk) {
      addStep(
        steps,
        ...strings.steps.confirm
      );
    }

    if (possibleExposure) {
      addStep(
        steps,
        ...strings.steps.exposure
      );
    }

    if (onlyCopy !== "no") {
      addStep(
        steps,
        ...strings.steps.secure
      );
    }

    if (personal !== "no") {
      addStep(
        steps,
        ...strings.steps.redact
      );
    }

    if (remaining !== "no") {
      addStep(
        steps,
        ...strings.steps.remove
      );
    }

    addStep(
      steps,
      ...strings.steps.photos
    );

    if (credentialRisk && (possibleExposure || possiblyActive)) {
      [resultTitle.textContent, resultIntro.textContent] = strings.results.urgent;
      result.dataset.level = "urgent";
    } else if (personal !== "no" || remaining !== "no") {
      [resultTitle.textContent, resultIntro.textContent] = strings.results.review;
      result.dataset.level = "review";
    } else {
      [resultTitle.textContent, resultIntro.textContent] = strings.results.caution;
      result.dataset.level = "caution";
    }

    resultSteps.replaceChildren();
    steps.forEach((step) => {
      const item = document.createElement("li");
      const heading = document.createElement("strong");
      const description = document.createElement("span");
      heading.textContent = step.title;
      description.textContent = step.text;
      item.append(heading, description);
      resultSteps.append(item);
    });

    result.hidden = false;
    resetButton.hidden = false;
    result.focus({ preventScroll: true });
    result.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  resetButton.addEventListener("click", () => {
    form.reset();
    result.hidden = true;
    resetButton.hidden = true;
    form.querySelector("input")?.focus();
  });

  shareButton?.addEventListener("click", async () => {
    const shareURL = strings.share.url;
    const shareData = {
      title: strings.share.title,
      text: strings.share.text,
      url: shareURL
    };

    if (shareStatus) shareStatus.textContent = "";
    if (shareFallback) shareFallback.hidden = true;

    if (typeof navigator.share === "function") {
      try {
        await navigator.share(shareData);
        if (shareStatus) shareStatus.textContent = strings.share.shared;
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(shareURL);
        if (shareStatus) shareStatus.textContent = strings.share.copied;
        return;
      } catch (_) {
        // Fall through to the visible, selectable URL.
      }
    }

    if (shareFallback && shareURLInput) {
      shareFallback.hidden = false;
      shareURLInput.focus();
      shareURLInput.select();
      if (shareStatus) shareStatus.textContent = strings.share.fallback;
    }
  });
})();
