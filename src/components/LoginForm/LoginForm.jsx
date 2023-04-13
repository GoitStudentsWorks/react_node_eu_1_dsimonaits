import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import Logo from 'components/Logo/Logo';
import ShowPwdButton from 'components/ShowPwdButton/ShowPwdButton'
import {
  FormContainer,
  Form,
  FormField,
  FormLabel,
  LogoContainer,
  ErrorText,
  IconMail,
  IconPassword,
  StyledBtnMain,
  StyledBtn,
} from 'components/LoginForm/LoginForm.styled';


import operations from 'redux/auth/operations';

const LoginForm = () => {
     
 const dispatch = useDispatch();
 const navigate = useNavigate();
 
 const [isRevealPwd, setIsRevealPwd] = useState(false);

      
 const schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
    password: yup
      .string()
      .min(6, 'must be at least 6 characters')
      .max(12, 'password length must be less than 13 characters')
      .required(),
  });

   
  const onSubmit = (values, { resetForm }) => {
    const res = dispatch(operations.logIn(values));

      if (res.error && res.payload === 401) {
          toast.warning('Email or password is wrong');
          return;
      } else if (res.error) {
          toast.warning('Sorry, something is wrong, please, try again');
          return;
      }
     

    resetForm();
  };

    return (
   
    <FormContainer>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
              <LogoContainer>
                <Logo />
              </LogoContainer>            
            <FormLabel>
              <FormField
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="E-mail"
              />
              <IconMail />
              <ErrorMessage
                name="email"
                render={msg => <ErrorText>{msg}</ErrorText>}
              />
            </FormLabel>

            <FormLabel>
              <FormField
                type={isRevealPwd ? "text" : "password"}
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <IconPassword />
              <ShowPwdButton
                type="button"
                setIsRevealPwd={setIsRevealPwd}
                isRevealPwd={isRevealPwd}
              />
              <ErrorMessage
                name="password"
                render={msg => <ErrorText>{msg}</ErrorText>}
              />
            </FormLabel>
              <StyledBtnMain type="submit">
                Log In
              </StyledBtnMain>
              <StyledBtn
                type="button"
                onClick={() => {
                  navigate('/registration');
                }}
              >
                Register
              </StyledBtn>
          </Form>
        )}
      </Formik>
            </FormContainer>
  );
};

export default LoginForm;