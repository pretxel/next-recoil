import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import GradeIcon from "@mui/icons-material/Grade";
import Image from "next/image";

const AnimalCard = ({ animal, likes, addLike, removeLike }) => {
  const existLike = () => {
    const animalWithLike = likes.find((like) => like.id === animal.id);
    return animalWithLike?.like;
  };

  const myLoader = () => {
    return animal.img;
  };

  return (
    <Card
      onClick={() => (existLike() ? removeLike(animal.id) : addLike(animal.id))}
    >
      <CardActionArea>
        <Image
          loader={myLoader}
          src={animal.img}
          alt={animal.id}
          width={"350"}
          height={"300"}
          placeholder="blur"
          blurDataURL={animal.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {animal.message}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="like">
          <GradeIcon color={existLike() ? "success" : "info"} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default AnimalCard;
