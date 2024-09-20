import { Button } from '@/features/ui';
import { useNavigate } from 'react-router-dom';
import './style.scss';

export function NotFound() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="not-found">
      <h1 className="not-found__title">找不到此頁面</h1>
      <Button onClick={handleClick}>回首頁</Button>
    </div>
  );
}
