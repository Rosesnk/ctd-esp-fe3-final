import { Stack } from "@mui/material";
import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import StepperNavigation from "../StepperNavigation";
import {
  PersonalDataForm,
  ValidationSchemaPersonaldata,
} from "./PersonalData.types";
import InputText from "../InputText";
import useOrder from "../context/useOrder";

export type PersonalDataProps = {
  activeStep: number;
  handleNext: () => void;
};

const PersonalData: FC<PersonalDataProps> = ({
  activeStep,
  handleNext,
}) => {
  const { dispatch } = useOrder();

  const methods = useForm<PersonalDataForm>({
    resolver: yupResolver(ValidationSchemaPersonaldata),
    defaultValues: {
      name: "Gansi",
      lastname: "Goose",
      email: "gansigoose@hotmail.com",
    },
  });
  const { setFocus, handleSubmit } = methods;

  const onSubmit = (data: PersonalDataForm) => {
    dispatch({
      type: "SET_CUSTOMER",
      payload: data,
    });

    handleNext();
  };

  useEffect(() => {
    setFocus("name");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <InputText name="name" label="Name" type="text"/>
          <InputText name="lastname" label="LastName" type="text"/>
          <InputText name="email" label="Email" type="text"/>
        </FormProvider>
      </form>
      <StepperNavigation
        activeStep={activeStep}
        handleBack={() => console.log("do nothing")}
        onNextClick={handleSubmit(onSubmit)}
      />
    </Stack>
  );
};

export default PersonalData;
