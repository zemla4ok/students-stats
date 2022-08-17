import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {TextField} from '@mui/material';
import { LoadingButton } from '@mui/lab';

import {FIELDS, schema} from '../../validations/login';

import './index.scss';
import useLogin from '../../utils/auth';

const Login = () => {
  const {login} = useLogin()
  const [loading, setLoading] = useState(false);

  const {handleSubmit, formState: {errors}, control} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    setLoading(true);
    login(data)
    .then(() => {
      setLoading(false);
      window.location.reload();
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="h2-title bold primary-color">Log In</div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            render={
              ({field}) =>
                <TextField className="form-input"
                           fullWidth
                           label="Login"
                           variant="outlined"
                           value={field.value}
                           onChange={field.onChange}/>
            }
            control={control}
            name={FIELDS.LOGIN}
          />
          <Controller
            render={
              ({field}) =>
                <TextField className="form-input"
                           fullWidth
                           type="password"
                           label="Password"
                           variant="outlined"
                           value={field.value}
                           onChange={field.onChange}/>
            }
            control={control}
            name={FIELDS.PASSWORD}
          />

          <LoadingButton type="submit"
                  className="login-button"
                  loading={loading}
                  variant="outlined"
                  size="medium">
            Log In
          </LoadingButton>
        </form>
      </div>
    </div>
  );
};

export default Login;