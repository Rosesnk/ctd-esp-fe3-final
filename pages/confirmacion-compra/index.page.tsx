import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { BuyDetails } from "dh-marvel/components/cardConfirmacionCompra/BuyDetails";
import ComicCardData from "dh-marvel/components/formCheckout/ComicDataCard";
import useOrder from "dh-marvel/components/formCheckout/context/useOrder";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";
import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";
import { NextPage } from "next";
import { Router, useRouter } from 'next/router'
import { useEffect, useState } from "react";
'use client'

export async function getServerSideProps(context: any) {
  const { req } = context;
  const isAccessedThroughURL = !req.headers.referer;

  return {
    props: { isAccessedThroughURL },
  };
}

const ConfirmedOrder: NextPage = ( {isAccessedThroughURL}: any ) => {
  
  const { state } = useOrder();
  const data = state.order;
  const router = useRouter()

    useEffect(() => {
    if (isAccessedThroughURL) {
      router.push("/");
    }
  }, [isAccessedThroughURL, router]);


  if (typeof window !== 'undefined') {
  let title = localStorage.getItem("title");
  let price = localStorage.getItem("price");
  let path = localStorage.getItem("pathImage");
  let extension = localStorage.getItem("extensionImage");
  let image = path + "." + extension;


        return (
          <>
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{ backgroundColor: "green", width: "100%", textAlign: "center"}}
        variant="h5"
        color="white"
        fontFamily={"Agdasima"}
      >
        ¡Gracias por tu Compra! ¡Excelsior!
      </Typography>
      <Stack spacing={2} alignItems="center">
        <ComicCardData
          title={String(title)}
          image={String(image)}
          price={Number(price)}
        />
      </Stack>
      <Stack spacing={2} alignItems="center">
        <BuyDetails
          name={data.customer.name}
          lastname={data.customer.lastname}
          email={data.customer.email}
          address1={data.customer.address?.address1}
          city={data.customer.address?.city}
          state={data.customer.address?.state}
        />
      </Stack>
    </Box>
    </>
  );


}
else{
  return <> </>
}
};
(ConfirmedOrder as any).Layout = LayoutCheckout;
export default ConfirmedOrder;