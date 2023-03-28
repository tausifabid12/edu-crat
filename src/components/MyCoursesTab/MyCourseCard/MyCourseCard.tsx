import Image from 'next/image';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {
  CardActionArea,
  Typography,
  Stack,
  Menu,
  MenuItem,
} from '@mui/material';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';

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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { title, imgSrc, lessons, duration, level, id } = data;
  return (
    <Card sx={{ width: '100%', height: '400px', position: 'relative' }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imgSrc} alt={title} />
        <CardContent>
          {/* action button */}
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{
                position: 'absolute',
                backgroundColor: 'transparent',
                top: 3,
                right: 2,
              }}
            >
              <Box
                sx={{
                  p: 0.5,
                  backgroundColor: 'bg_color.main',
                  borderRadius: '4px',
                }}
              >
                <MoreVertIcon />
              </Box>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>
                <ShareIcon sx={{ mr: 1 }} /> <p>Share</p>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <BookmarkIcon sx={{ mr: 1 }} />
                <p>Favorite</p>
              </MenuItem>
            </Menu>
          </div>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="p"
              sx={{ color: 'text_color.main' }}
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
            <Typography gutterBottom sx={{ color: 'text_color.main' }}>
              Complete
            </Typography>
            <Typography gutterBottom sx={{ color: 'text_color.main' }}>
              20%{' '}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default MyCourseCard;
