import React, { useEffect } from 'react';
import styles from './FeedbackMessage.module.css';

function FeedbackMessage({ mensaje, tipo, onClear }) {
  const claseTipo = tipo === 'error' ? styles.feedbackMessage_error : styles.feedbackMessage_exito;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClear) onClear();
    }, 3000); // 3 segundos

    return () => clearTimeout(timer); 
  }, [onClear]);

  return (
    <div className={`${styles.feedbackMessage} ${claseTipo}`}>
      {mensaje}
    </div>
  );
}

export default FeedbackMessage;