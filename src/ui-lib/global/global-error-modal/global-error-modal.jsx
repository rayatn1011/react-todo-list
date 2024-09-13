import { Button, Modal } from '@/ui-lib';
import { useGlobalContext } from '../use-global-context';
import './style.scss';

export const GlobalErrorModal = () => {
  const {
    globalState: { isOpenErrorModal, errorModalData },
    globalDispatch,
  } = useGlobalContext();

  const handleClick = () => {
    globalDispatch({
      type: 'closeModal',
    });
  };
  return (
    <Modal
      isOpen={isOpenErrorModal}
      className="global-error-modal"
      containerClassName="global-error-modal__container"
    >
      <div className="global-error-modal__message">
        {errorModalData?.message}
      </div>
      <div className="global-error-modal__data">
        {Array.isArray(errorModalData?.data) && (
          <ol className="global-error-modal__ol">
            {errorModalData.data.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ol>
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
