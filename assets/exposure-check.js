(() => {
  "use strict";

  const form = document.querySelector("[data-exposure-form]");
  const result = document.querySelector("[data-exposure-result]");
  const resultTitle = document.querySelector("[data-result-title]");
  const resultIntro = document.querySelector("[data-result-intro]");
  const resultSteps = document.querySelector("[data-result-steps]");
  const resetButton = document.querySelector("[data-reset-check]");

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
        "Replace and revoke the credential",
        "Use the issuing service—not the screenshot—to create a replacement if needed, update anything that depends on it, and revoke the old password, token, key, recovery material, or code. Deleting the image alone does not invalidate access."
      );
    } else if (credentialRisk) {
      addStep(
        steps,
        "Confirm that the credential is no longer valid",
        "Check with the issuing service. If validity is uncertain, treat the credential as active and replace or revoke it before focusing on image cleanup."
      );
    }

    if (possibleExposure) {
      addStep(
        steps,
        "Review where the image could have traveled",
        "Check the message, ticket, shared album, post, backup, or device where the screenshot appeared. Remove copies you control and review the relevant account or provider logs for unexpected activity when available."
      );
    }

    if (onlyCopy !== "no") {
      addStep(
        steps,
        "Secure anything you still need",
        "Before deleting, move required recovery information or records to an appropriate safe location and verify that the replacement is usable. Do not destroy the only working recovery path."
      );
    }

    if (personal !== "no") {
      addStep(
        steps,
        "Prepare a separate, verified sharing copy",
        "Cover every private area with a solid opaque redaction, check the whole frame at full size, and review photo location metadata separately. Share only the inspected copy."
      );
    }

    if (remaining !== "no") {
      addStep(
        steps,
        "Remove obsolete image copies",
        "After preserving anything necessary, delete the original screenshot. If immediate removal is appropriate, also review Recently Deleted; with iCloud Photos, deletion synchronizes across devices signed into the same Apple Account."
      );
    }

    addStep(
      steps,
      "Review Photos access",
      "In Settings, open Privacy & Security, then Photos, and remove access an app no longer needs. Permission cleanup limits future exposure but does not retract copies already shared."
    );

    if (credentialRisk && (possibleExposure || possiblyActive)) {
      resultTitle.textContent = "Act on the credential first.";
      resultIntro.textContent = "Your answers indicate a possible access secret. Start with the issuing service, then clean up image copies.";
      result.dataset.level = "urgent";
    } else if (personal !== "no" || remaining !== "no") {
      resultTitle.textContent = "Clean up the image deliberately.";
      resultIntro.textContent = "No urgent active credential is indicated, but the screenshot may still expose private information or leave unnecessary copies.";
      result.dataset.level = "review";
    } else {
      resultTitle.textContent = "No urgent credential step is indicated.";
      resultIntro.textContent = "That is not a guarantee that the image is safe. Inspect the full frame and confirm your answers before sharing or deleting anything.";
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
})();
