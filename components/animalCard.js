
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import GradeIcon from '@mui/icons-material/Grade';
import Image from 'next/image'

const AnimalCard = ({ animal, likes, addLike, removeLike }) => {

    const existLike = () => {
        const animalWithLike = likes.find(like => like.id === animal.id);
        return animalWithLike?.like;
    }

    const myLoader = () => {
        return animal.image_link
    }


    return (
        <Card>
            <CardActionArea>
                <Image
                    loader={myLoader}
                    src={animal.image_link}
                    alt={animal.name}
                    width={'200'}
                    height={'150'}
                    layout='responsive'
                    placeholder='blur'
                    blurDataURL={animal.image_link}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {animal.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {animal.habitat}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton onClick={() => existLike() ? removeLike(animal.id) : addLike(animal.id)} aria-label="like">
                    <GradeIcon color={existLike() ? 'success' : 'info'} />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default AnimalCard