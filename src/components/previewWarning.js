"use client";

import { useEffect, useState } from "react";

export default function PreviewWarning() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preview-warning-backdrop">
      <section
        aria-labelledby="preview-warning-title"
        aria-modal="true"
        className="preview-warning-modal"
        role="dialog"
      >
        <div aria-hidden="true" className="preview-warning-icon">
          ⚠️
        </div>
        <h1 id="preview-warning-title">Preview URL Warning</h1>
        <p className="preview-warning-intro">
          You are about to visit <strong>{currentUrl}</strong>
        </p>

        <ul className="preview-warning-details">
          <li>
            This website is served through <a href="https://daytona.io">daytona.io</a>
          </li>
          <li>Content and functionality may change without notice</li>
          <li>
            You should only visit this website if you trust whoever sent the link to
          </li>
          <li>
            Be careful about disclosing personal or financial information like
            passwords, phone numbers, or credit cards
          </li>
          <li>
            To get rid of this warning for your organization, visit our docs:{" "}
            <a href="https://daytona.io/docs/en/preview-and-authentication">
              https://daytona.io/docs/en/preview-and-authentication
            </a>
          </li>
        </ul>

        <button
          className="preview-warning-continue"
          onClick={() => setIsVisible(false)}
          type="button"
        >
          I Understand, Continue
        </button>
      </section>
    </div>
  );
}
