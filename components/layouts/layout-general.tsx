import * as React from 'react';
import {FC, PropsWithChildren} from "react";
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import GeneralHeader from "dh-marvel/components/layouts/header/general-header.component";
import GeneralFooter from "dh-marvel/components/layouts/footer/general-footer.component";


const LayoutGeneral: FC<PropsWithChildren> = ({children}: PropsWithChildren) => {

    return (<>
            <Stack direction={"column"} height={'321%'} sx={{backgroundColor:"#3B1F2B", color:"white"}} >
                <GeneralHeader />
                <Box display={'flex'} flexGrow={1} justifyContent={'center'} >
                    {children}
                    
                </Box>
                <GeneralFooter />
            </Stack>
        </>
    );
};
export default LayoutGeneral;
