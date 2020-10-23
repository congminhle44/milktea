import React, {FC} from 'react';
import Button, {ButtonVariants} from '../Button';
import styles from './modal.module.css';

interface ModalProps {
  header?: string;
  event?: string;
  error?: boolean;
  show?: any;
  onCancel?: any;
  onCreate?: any;
  onDelete?: any;
}

const Modal: FC<ModalProps> = ({
  onCancel,
  onCreate,
  onDelete,
  error,
  children,
  header,
  event,
}) => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalHeaderTitle}>{header}</h3>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalContent}>{children}</div>
          <div className={styles.modalFooter}>
            <Button onClick={onCancel} ghost variant={ButtonVariants.Small}>
              Cancel
            </Button>
            <div className={styles.eventButton}>
              <Button
                onClick={onCreate || onDelete}
                error={error}
                variant={ButtonVariants.Small}
              >
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
