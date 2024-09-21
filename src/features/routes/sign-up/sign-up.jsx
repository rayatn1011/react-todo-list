import { Link } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Button, Form } from '@/features/ui';
import { useSignUp, signUpSchema } from '@/features/apis/use-sign-up';
import { SignUpSuccessModal } from './sign-up-success-modal/sign-up-success-modal';
import './style.scss';

const formSchema = signUpSchema.shape.user
  .extend({
    confirmPassword: z.string().min(6, { message: '輸入至少 6 個字元' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '兩次密碼輸入不一致',
    path: ['confirmPassword'],
  });

export const SignUp = () => {
  const formMethods = useForm({
    resolver: zodResolver(formSchema),
  });

  const { isLoading, isSuccess, onFetch: onSignUp } = useSignUp();

  const onSubmit = (values) => {
    const submitData = {
      data: {
        user: values,
      },
    };
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
        <Form
          noValidate
          className="sign-up__form-container"
          methods={formMethods}
          onSubmit={onSubmit}
        >
          <Input label="Email" name="email" type="email" autoComplete="email" />
          <Input label="您的暱稱" name="nickname" autoComplete="username" />
          <Input
            label="密碼"
            name="password"
            type="password"
            autoComplete="new-password"
          />
          <Input
            label="再次輸入密碼"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
          />
          <div className="sign-up__form-footer">
            <Button disabled={isLoading} type="submit">
              註冊帳號
            </Button>
            <Link to="/sign-in" className="sign-up__link">
              登入
            </Link>
          </div>
        </Form>
      </div>
      <SignUpSuccessModal isOpen={isSuccess} />
    </article>
  );
};
