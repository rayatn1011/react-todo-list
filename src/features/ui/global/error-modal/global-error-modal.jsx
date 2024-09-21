import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from '@/features/ui';
import { closeErrorModal } from '@/features/store/slices/error-modal';
import './style.scss';

export const GlobalErrorModal = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.errorModal.isOpen);
  const title = useSelector((state) => state.errorModal.title);
  const contents = useSelector((state) => state.errorModal.contents);
  const onConfirm = useSelector((state) => state.errorModal.onConfirm);

  const handleClick = () => {
    onConfirm?.();
    dispatch(closeErrorModal());
  };
  return (
    <Modal
      isOpen={isOpen}
      className="global-error-modal"
      containerClassName="global-error-modal__container"
    >
      <div className="global-error-modal__message">{title}</div>
      <div className="global-error-modal__data">
        {Array.isArray(contents) ? (
          <ol className="global-error-modal__ol">
            {contents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        ) : (
          <p className="global-error-modal__p">{contents}</p>
        )}
      </div>
      <div className="global-error-modal__button-container">
        <Button type="button" onClick={handleClick}>
          確認
        </Button>
      </div>
    </Modal>
  );
};
