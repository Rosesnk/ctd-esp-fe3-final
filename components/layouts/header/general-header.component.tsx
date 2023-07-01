import * as React from 'react';
import {FC} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import NextLink from 'next/link'
import {Link as MUILink} from '@mui/material';

type Props = {
    variant?: "simple" | "general"
}

const Header: FC<Props> = ({variant}: Props) => {
    return <Container maxWidth="xl" sx={{ backgroundColor:"#700808", color: "white"}}>
        <Toolbar disableGutters sx={{display:"flex", justifyContent:"space-between"}} >
            <NextLink href="/" passHref>
                <MUILink variant="h6" sx={{
                    mr: 2,                    
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                    display:"block"
                    
                    
                }}> DH-Marvel</MUILink>
            </NextLink>
            
                <Box >
                    <NextLink href="/preguntas-frecuentes" passHref >
                        <MUILink variant="body2" sx={{ color: 'inherit', fontSize: 18, fontWeight: 700, display:"block"}}>FAQ</MUILink>
                    </NextLink>
                </Box>
            
        </Toolbar>
    </Container>
}


const GeneralHeader: FC<Props> = ({variant}: Props) => {
    return variant == 'general' ?
        <AppBar position="static" sx={{ background: "#700808", color: "white"}}>
            <Header variant={variant}/>
        </AppBar> : <Header variant={variant}/>
        ;
};
GeneralHeader.defaultProps = {
    variant: 'general'
}

export default GeneralHeader;
