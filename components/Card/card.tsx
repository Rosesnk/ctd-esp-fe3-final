import { FC } from "react";
import Card from "@mui/material/Card";
import router from "next/router";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

type propsComic = {
  title: string;
  image: string;
  id: number;
};
export const CardComic: FC<propsComic> = ({ title, image, id }) => {
  const handleClick = () => {
    router.push({
      pathname: "/checkout",
    });
  };
  return (
    <Card sx={{ maxWidth: 600, backgroundColor: "#0d0106", opacity: 1, color: "white" }}>
      <Stack spacing={2} alignItems="center">
        <CardMedia
          component="img"
          sx={{ width: 380, objectFit: "contain"}}
          height="500"
          image={image}
          alt={title}
          
          
        />
      </Stack>
      <CardContent>
        <Typography variant="body2" >
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{background:"#d6a99a", color:"white"}} onClick={handleClick} >Comprar</Button>
        <Link href={`/comics/${id}`}>
          <Button size="small" sx={{background:"#d6a99a", color:"white"}}>Más Detalles</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
