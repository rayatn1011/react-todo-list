import { useNavigate } from 'react-router-dom';
import { Button, Modal } from '@/features/ui';
import './style.scss';

export const SignUpSuccessModal = ({ isOpen }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/sign-in');
  };

  return (
    <Modal
      isOpen={isOpen}
      className="sign-up-success-modal"
      containerClassName="sign-up-success-modal__container"
    >
      <h2 className="sign-up-success-modal__title">註冊成功</h2>
      <Button
        type="button"
        className="sign-up-success-modal__button"
        onClick={onClick}
      >
        前往登入
      </Button>
    </Modal>
  );
};
