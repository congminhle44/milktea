import React, {FC} from 'react';
import {createPortal} from 'react-dom';
import Modal from './Modal';

const modalRoot = document.getElementById('modal') as HTMLElement;
interface PortalProps {
  element?: string;
  header?: string;
  event?: string;
  error?: boolean;
  show?: any;
  onCancel?: any;
  onOK?: any;
  onDelete?: any;
}

export const Portal: FC<PortalProps> = ({
  header,
  onCancel,
  onOK,
  onDelete,
  event,
  error,
  show,
  children,
  element = 'div',
}) => {
  const [container] = React.useState(() => {
    const el = document.createElement(element);
    return el;
  });

  React.useEffect(() => {
    modalRoot.appendChild(container);
    return () => {
      modalRoot.removeChild(container);
    };
  }, [container]);

  return createPortal(
    <Modal
      onDelete={onDelete}
      onCancel={onCancel}
      onOK={onOK}
      header={header}
      error={error}
      event={event}
      show={show}
    >
      {children}
    </Modal>,
    container,
  );
};
