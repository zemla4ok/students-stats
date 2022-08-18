import * as yup from 'yup';

export const FIELDS = {
  LOGIN: 'username',
}

export const schema = yup.object().shape({
  [FIELDS.LOGIN]: yup.string().required(),
  [FIELDS.PASSWORD]: yup.string().required(),
})
