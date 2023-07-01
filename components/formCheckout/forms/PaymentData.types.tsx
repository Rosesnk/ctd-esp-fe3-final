import * as yup from "yup";

export const ValidationSchemaData = yup.object({
    nameOnCard: yup.string().required('Name id required'),
    number: yup.string().required('Number is required'),
    expDate: yup.string().required('Expiration date is required'),
    cvc: yup.string().required('CVC is required'),
}).required(); 

export type PaymentDataForm = {
    number: string,
    cvc: string,
    expDate: string,
    nameOnCard: string
  };