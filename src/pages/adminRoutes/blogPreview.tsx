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
      <Container maxWidth="xl">
        <Box mt={16} p={5}>
          {tags.map((tag, i) => (
            <Chip key={i} label={tag} sx={{ ml: 1 }} />
          ))}

          <Grid container spacing={3} mt={1}>
            <Grid item xs={12} lg={8} px={5}>
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
                  mt: 6,
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
            <Grid item xs={12} lg={4}>
              <Image
                height={500}
                width={500}
                src="/assets/blog.jpg"
                alt="/"
                className="rounded-xl"
              />
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