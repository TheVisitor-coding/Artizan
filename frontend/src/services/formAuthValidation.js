import { isLength } from 'validator'

export const validateRegisterForm = (formData) => {
  const errors = {}
  if (typeof formData === 'object') {
    if (!isLength(formData.firstName, { min: 2, max: undefined })) {
      errors.firstName = 'First Name is Invalid'
    }

    if (!isLength(formData.lastName, { min: 2, max: undefined })) {
      errors.lastName = 'Last Name is Invalid'
    }
  } else {
    throw new Error('Invalid Parameter Type')
  }

  return errors
}
