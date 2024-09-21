import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from '@/features/ui';
import { useSignUp } from '@/features/apis';
import './style.scss';

/**
 * TODO:
 *
 * 1. 註冊後跳頁
 * 2. 登入頁
 * 3. 再次輸入密碼驗證
 */
export const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    nickname: '',
    password: '',
    rePassword: '',
  });

  const { onFetch: onSignUp } = useSignUp();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      data: {
        user: {
          ...formData,
        },
      },
    };
    delete submitData.data.user.rePassword;

    onSignUp(submitData);
  };
  return (
    <article className="sign-up">
      <div className="sign-up__banner">
        <img className="sign-up__banner-logo" src="/images/logo-lg.svg" />
        <img className="sign-up__banner-img" src="/images/todo-list.png" />
      </div>
      <div className="sign-up__form">
        <h1 className="sign-up__form-title">註冊帳號</h1>
        <form className="sign-up__form-container" onSubmit={handleSubmit}>
          <Input
            label="Email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            label="您的暱稱"
            name="nickname"
            minLength={1}
            required
            value={formData.nickname}
            onChange={handleInputChange}
          />
          <Input
            label="密碼"
            name="password"
            type="new-password"
            minLength={6}
            required
            value={formData.password}
            onChange={handleInputChange}
          />
          <Input
            label="再次輸入密碼"
            name="rePassword"
            type="new-password"
            placeholder="請再次輸入密碼"
            minLength={6}
            required
            value={formData.rePassword}
            onChange={handleInputChange}
          />
          <div className="sign-up__form-footer">
            <Button>註冊帳號</Button>
            <Link className="sign-up__link">登入</Link>
          </div>
        </form>
      </div>
    </article>
  );
};
