import {Box, Step, StepLabel, Stepper} from "@mui/material";
import {FC, useState} from "react";
import { PaymentData, PersonalData, ShipmentAddress } from "./forms";

const StepperForm: FC = () => {
    const [activeStep, setActiveStep] = useState<number>(0);

    const handleClickBack = () => {
        setActiveStep(activeStep-1);
    }
    const handleSubmitDatosPersonales = () => {
        setActiveStep(1);
    }

    const handleSubmitDireccionEntrega = () => {
        setActiveStep(2);
    }

    const handleSubmitDatosPago = () => {
        // setActiveStep(3);
    }
    return <>
        <Box sx={{width: '70%'}}>
            <Stepper
                sx={{width: '100%', marginBottom: 2}}
                activeStep={activeStep}>
                <Step>
                    <StepLabel>Datos Personales</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Dirección de entrega</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Datos del pago</StepLabel>
                </Step>
            </Stepper>

            {activeStep === 0 && 
                <PersonalData activeStep={activeStep} handleNext={handleSubmitDatosPersonales}/>
            }
            {activeStep === 1 &&
                <ShipmentAddress activeStep={activeStep} handleNext={handleSubmitDireccionEntrega} handleBack={handleClickBack}/>
            }
              {activeStep === 2 &&
               <PaymentData activeStep={activeStep} handleBack={handleClickBack} handleNext={handleSubmitDatosPago}/>
             }
        </Box>
    </>
}

export default StepperForm;