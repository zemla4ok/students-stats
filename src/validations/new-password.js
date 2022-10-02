import * as yup from 'yup';

export const FIELDS = {
  OLD_PASSWORD: 'oldPassword',
  NEW_PASSWORD: 'newPassword',
}

export const schema = yup.object().shape({
  [FIELDS.OLD_PASSWORD]: yup.string().required(),
  [FIELDS.NEW_PASSWORD]: yup.string().required(),
})
