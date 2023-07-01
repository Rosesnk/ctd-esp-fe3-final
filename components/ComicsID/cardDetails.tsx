import { Button, CardContent, Typography } from "@mui/material";
import router from "next/router";
import { FC } from "react";

type comicDetailsProps = {
  title: string;
  price: number;
  oldPrice: number;
  stock: number;
  image?: string;
};

export const CardDetails: FC<comicDetailsProps> = ({
  title,
  price,
  oldPrice,
  stock,
}) => {
  const handleClick = () => {
    router.push({
      pathname: "/checkout",
    });
  };
  return (
    <CardContent >
      <Typography variant="h4" component="div"sx={{color:"white"}}>
        {title}
      </Typography>
      <Typography sx={{ marginTop: 2, color:"white", textDecoration: "line-through #f00 1px"}} variant="body1" component="div" >
        Antes ${oldPrice}
        
      </Typography>
      <Typography variant="h5" component="div" sx={{color:"white"}}>
        ${price}
      </Typography>
      {stock ? (
        <Button sx={{ marginTop: 2}} variant="contained" size="medium" onClick={handleClick}>
          Comprar
        </Button>
      ) : (
        <Button size="small" disabled>
          Sin stock
        </Button>
      )}
    </CardContent>
  );
};
