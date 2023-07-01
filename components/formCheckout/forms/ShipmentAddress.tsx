import { yupResolver } from "@hookform/resolvers/yup";
import { Stack } from "@mui/material";
import React, { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "../InputText";
import {
  ShipmentAddressForm,
  ValidationSchemaAdressDirection,
} from "./ShipmentAddress.types";
import StepperNavigation from "../StepperNavigation";
import useOrder from "../context/useOrder";

export type ShipmentAddressProps = {
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
};

const ShipmentAddress: FC<ShipmentAddressProps> = ({
  activeStep,
  handleNext,
  handleBack,
}) => {
  const { dispatch } = useOrder();

  const methods = useForm<ShipmentAddressForm>({
    resolver: yupResolver(ValidationSchemaAdressDirection),
    defaultValues: {
        address1: "Lago Regatas 154",
        address2: "3",
        city: "Capital Federal",
        state: "Ciudad de Buenos Aires",
        zipCode: "1200",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: ShipmentAddressForm) => {
    dispatch({
      type: "SET_ADDRESS",
      payload: data,
    });

    handleNext();
  };

  const submitBack = () => {
    handleBack();
  };

  return (
    <Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <InputText label="Direccion" name="address1" type="text"/>
          <InputText label="Departamento, piso, etc." name="address2" type="text" />
          <InputText label="Ciudad" name="city" type="text"/>
          <InputText label="Provincia" name="state" type="text"/>
          <InputText label="Cod Postal" name="zipCode" type="text"/>
        </FormProvider>
      </form>

      <StepperNavigation
        activeStep={activeStep}
        onNextClick={handleSubmit(onSubmit)}
        handleBack={handleSubmit(submitBack)}
      />
    </Stack>
  );
};

export default ShipmentAddress;
