import { Fragment, useCallback, useEffect, useRef } from 'react';
import { IUIModalProps } from './UIModal.type';
import { mergeRefs } from '@/common/utils/ref';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

const UIModal: React.FC<IUIModalProps> = (props) => {
  const { ref, openModal, onCloseModal, className, children } = props;
  const uiModalRef = useRef<null | HTMLDialogElement>(null);
  const mergedRef = mergeRefs([
    uiModalRef,
    ref as React.LegacyRef<HTMLDialogElement>,
  ]);

  useEffect(() => {
    if (openModal) {
      uiModalRef.current?.showModal();
    } else {
      uiModalRef.current?.close();
    }
  }, [openModal]);

  const handleCloseModal = useCallback(() => {
    onCloseModal();
  }, [onCloseModal]);

  const modalWrapperClassName = twMerge(
    clsx(
      'fixed inset-0 z-50 bg-white w-1/2 max-h-2/3 h-1/3 rounded-lg shadow-lg overflow-hidden',
      className
    )
  );

  return (
    <Fragment>
      <dialog
        ref={mergedRef}
        className={modalWrapperClassName}
        onClick={handleCloseModal}
      >
        <div className="w-full h-full" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </dialog>
    </Fragment>
  );
};

export { UIModal };
