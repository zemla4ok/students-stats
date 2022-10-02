import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {TextField} from '@mui/material';
import { LoadingButton } from '@mui/lab';

import {FIELDS, schema} from '../../validations/new-password';

import './index.scss';
import useLogin from '../../utils/auth';
import {SEVERITY, useToastNotification} from "../../context/toast-notification";

const NewPassword = () => {
  const {setMessage} = useToastNotification();
  const {activateUser} = useLogin()
  const [loading, setLoading] = useState(false);
  //
  const {handleSubmit, formState: {errors}, control} = useForm({
    resolver: yupResolver(schema)
  });
  //
  const onSubmit = (data) => {
    setLoading(true);
    activateUser(data)
    .then(() => {
      setLoading(false);
      window.location.reload();
    })
    .catch(err => {
      setMessage({message: err.data, severity: SEVERITY.ERROR});
      setLoading(false);
    })
  };

  return (
    <div className="new-password-container">
      <div className="new-password-form">
        <div className="h2-title bold primary-color">New Password</div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            render={
              ({field}) =>
                <TextField className="form-input"
                           fullWidth
                           type="password"
                           label="Old password"
                           variant="outlined"
                           value={field.value}
                           onChange={field.onChange}/>
            }
            control={control}
            name={FIELDS.OLD_PASSWORD}
          />
          <Controller
            render={
              ({field}) =>
                <TextField className="form-input"
                           fullWidth
                           type="password"
                           label="New password"
                           variant="outlined"
                           value={field.value}
                           onChange={field.onChange}/>
            }
            control={control}
            name={FIELDS.NEW_PASSWORD}
          />

          <LoadingButton type="submit"
                  className="login-button"
                  loading={loading}
                  variant="outlined"
                  size="medium">
            Change Password
          </LoadingButton>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;