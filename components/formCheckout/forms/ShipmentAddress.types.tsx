import * as yup from "yup";

export const ValidationSchemaAdressDirection = yup.object({
    address1: yup.string().required('Address required'),
    address2: yup.string().optional(),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    zipCode: yup.string().required('Zip Code is required'),
}).required(); 


export type ShipmentAddressForm = {
        address1: string,
        address2: string | null,
        city: string,
        state: string,
        zipCode: string
  };

