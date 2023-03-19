import Image from 'next/image';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Typography, Stack } from '@mui/material';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

import Tooltip from '@mui/material/Tooltip';

interface CourseInfo {
  data: {
    id: number;
    title: string;
    imgSrc: string;
    lessons: number;
    duration: string;
    level: string;
  };
}

function valuetext(value: number) {
  return `${value}°C`;
}

const MyCourseCard: React.FC<CourseInfo> = ({ data }) => {
  const { title, imgSrc, lessons, duration, level, id } = data;
  return (
    <Card sx={{ width: '100%', height: '400px' }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imgSrc} alt={title} />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="p"
              sx={{ color: 'secondary.contrastText' }}
            >
              Ali Tufan
            </Typography>
            <Rating name="size-small" defaultValue={5} size="small" />
          </Box>
          <Typography
            gutterBottom
            variant="subtitle1"
            color="primary"
            component="div"
          >
            {title}
          </Typography>

          <Box sx={{ m: 2 }} />

          <Box sx={{ width: '100%' }}>
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              getAriaValueText={valuetext}
              color="secondary"
              sx={{
                '& .MuiSlider-thumb': {
                  height: 0,
                  width: 0,
                },
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography gutterBottom sx={{ color: 'secondary.contrastText' }}>
              Complete
            </Typography>
            <Typography gutterBottom sx={{ color: 'secondary.contrastText' }}>
              20%{' '}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default MyCourseCard;
