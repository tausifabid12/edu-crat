import MainLayout from '@/Layouts/MainLayout';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Chip,
  Stack,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import React from 'react';

const blogPreview = () => {
  const tags = ['Web development', 'Mobile development', 'Chemistry'];

  return (
    <MainLayout>
      <Container>
        <Box mt={7}>
          <Grid
            container
            spacing={3}
            mt={1}
            sx={{ width: { xs: '100%', sm: '98%' }, mx: 'auto' }}
          >
            <Grid item xs={12} lg={12}>
              <Image
                height={500}
                width={1000}
                src="/assets/campus.jpg"
                alt="/"
                className="rounded-xl w-full h-auto lg:h-[500px]"
              />
              {tags.map((tag, i) => (
                <Chip key={i} label={tag} sx={{ ml: 1, mt: 2 }} />
              ))}
            </Grid>
            <Grid item xs={12} lg={12}>
              <Typography
                variant="h2"
                sx={{ color: 'primary.main', fontWeight: '600' }}
              >
                It’s a new era in design, there are no rules
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: '400', mt: 6 }}>
                Quibus autem in rebus tanta obscuratio non fit, fieri tamen
                potest, ut id ipsum, quod interest, non sit magnum. Ita fit ut,
                quanta differentia est in principiis naturalibus, tanta sit in
                finibus bonorum malorumque dissimilitudo.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mt: 4,
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/assets/user.png"
                  sx={{ width: 56, height: 56 }}
                />
                <Stack spacing={0} pl={2}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: 'text_color.main' }}
                  >
                    Author Name
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: 'text_color.main' }}
                  >
                    September 30, 2023 — 2 minutes read
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Paper elevation={0} sx={{ width: '70%', mx: 'auto', mb: 16 }}>
          {/* <Typography
            variant="h4"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            It’s a new era in design, there are no rules
          </Typography> */}
          <Typography variant="h6" sx={{ fontWeight: '400', mt: 6 }}>
            Quibus autem in rebus tanta obscuratio non fit, fieri tamen potest,
            ut id ipsum, quod interest, non sit magnum. Ita fit ut, quanta
            differentia est in principiis naturalibus, tanta sit in finibus
            bonorum malorumque dissimilitudo. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Corporis asperiores, odio minus
            exercitationem magni fugit. Aut, saepe quisquam natus at ullam
            corporis. Vitae dignissimos blanditiis harum, quas vero sunt autem
            magnam eligendi unde, atque minus iste esse distinctio qui
            praesentium!
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: '400', mt: 6 }}>
            Quibus autem in rebus tanta obscuratio non fit, fieri tamen potest,
            ut id ipsum, quod interest, non sit magnum. Ita fit ut, quanta
            differentia est in principiis naturalibus, tanta sit in finibus
            bonorum malorumque dissimilitudo. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Corporis asperiores, odio minus
            exercitationem magni fugit. Aut, saepe quisquam natus at ullam
            corporis. Vitae dignissimos blanditiis harum, quas vero sunt autem
            magnam eligendi unde, atque minus iste esse distinctio qui
            praesentium! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Id illum placeat in fugit expedita ex amet recusandae sit eos,
            corporis officiis nemo, rerum minus magnam impedit asperiores,
            libero eveniet quasi.
          </Typography>
        </Paper>
      </Container>
    </MainLayout>
  );
};

export default blogPreview;
