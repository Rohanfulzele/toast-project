import React from "react";

import Button from "../Button";
import crypto from "crypto";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastPlayground.module.css";
import Toast from "../Toast/Toast";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { createToast } = React.useContext(ToastContext);
  const [inputMsg, setInputMsg] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  const handleInputMsgChange = (e) => {
    console.log(e.target.value);
    setInputMsg(e.target.value);
  };

  const handleVariantChange = (e) => {
    console.log(e.target.value);
    setVariant(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    createToast(inputMsg, variant);
    setInputMsg("");
    setVariant(VARIANT_OPTIONS[0]);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              value={inputMsg}
              onChange={handleInputMsgChange}
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((item) => (
              <label key={item} htmlFor={`variant-${item}`}>
                <input
                  id={`variant-${item}`}
                  type="radio"
                  name="variant"
                  value={item}
                  checked={item === variant}
                  onChange={handleVariantChange}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
