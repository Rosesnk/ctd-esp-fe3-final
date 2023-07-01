import * as yup from "yup";

export const ValidationSchemaPersonaldata = yup.object({
    name: yup.string().required("Name is required"),
    lastname: yup.string().required("Lastname is required"),
    email: yup.string().required("Email is required").email("Email is not valid"),
}).required();

export type PersonalDataForm = {
    email: string,
    name: string,
    lastname: string
}