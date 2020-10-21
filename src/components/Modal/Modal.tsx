import React, {FC} from 'react';
import Button, {ButtonVariants} from '../Button';
import styles from './modal.module.css';

interface ModalProps {
  header?: string;
  event?: string;
  error?: boolean;
  show?: any;
}

const Modal: FC<ModalProps> = ({show, error, children, header, event}) => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalHeaderTitle}>{header}</h3>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalContent}>{children}</div>
          <div className={styles.modalFooter}>
            <Button
              onClick={() => {
                show();
              }}
              ghost
              variant={ButtonVariants.Small}
            >
              Cancel
            </Button>
            <div className={styles.eventButton}>
              <Button error={error} variant={ButtonVariants.Small}>
                {event}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
