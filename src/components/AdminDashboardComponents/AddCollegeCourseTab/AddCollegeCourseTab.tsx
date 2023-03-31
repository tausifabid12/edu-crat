import { Button, Paper, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddCollegeCourseFees from '../AddCollegeCourseFees/AddCollegeCourseFees';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface TabProps {
  setValue: (value: number) => void;
  value: number;
}
type Course = {
  CSE: boolean;
  EEE: boolean;
  ECE: boolean;
  ME: boolean;
  CE: boolean;
  MBBS: boolean;
  BDS: boolean;
  BAMS: boolean;
  BHMS: boolean;
  BPT: boolean;
  Mathematics: boolean;
  Physics: boolean;
  Chemistry: boolean;
  Botany: boolean;
  Zoology: boolean;
};

const AddCollegeCourseTab: React.FC<TabProps> = ({ setValue, value }) => {
  const [category, setCategory] = React.useState('');
  const [selectedCourse, setSelectedCourse] = React.useState<string[]>([]);
  const [course, setCourse] = React.useState<Course>({
    CSE: false,
    EEE: false,
    ECE: false,
    ME: false,
    CE: false,
    MBBS: false,
    BDS: false,
    BAMS: false,
    BHMS: false,
    BPT: false,
    Mathematics: false,
    Physics: false,
    Chemistry: false,
    Botany: false,
    Zoology: false,
  });

  let trueKeys = Object.keys(course).filter(
    (key) => course[key as keyof Course]
  );
  console.log(trueKeys, 'trueKeys');

  // useEffect(() => {
  //   trueKeys = Object.keys(course).filter((key) => course[key as keyof Course]);
  //   console.log(trueKeys, 'trueKeys');
  // }, [course]);

  // const trueKeysRef = useRef<string[]>([]);

  // useEffect(() => {
  //   const trueKeys = Object.keys(course).filter(
  //     (key) => course[key as keyof Course]
  //   ) as string[];
  //   trueKeysRef.current = trueKeys;
  //   console.log(trueKeys, 'trueKeys');
  // }, [course]);

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const data = [
    {
      categoryName: 'Engineering',
      courses: ['CSE', 'EEE', 'ECE', 'ME', 'CE'],
    },
    {
      categoryName: 'Medical',
      courses: ['MBBS', 'BDS', 'BAMS', 'BHMS', 'BPT'],
    },
    {
      categoryName: 'B. SC',
      courses: ['Mathematics', 'Physics', 'Chemistry', 'Botany', 'Zoology'],
    },
  ];

  const handleCourse = (sub: string) => {
    console.log(sub);

    setCourse((prevState) => ({
      ...prevState,
      [sub]: true,
    }));
  };

  console.log(course);
  return (
    <Paper elevation={0} sx={{ minHeight: '100vh' }}>
      <Box mb={3}>
        <Typography
          variant="h4"
          sx={{ color: 'primary.main', fontWeight: '600' }}
        >
          Course Fees
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: 'text_color.main', fontWeight: '400', mt: '2' }}
        >
          Lorem ipsum dolor sit amet, consectetur.
        </Typography>
      </Box>
      <Paper elevation={0}>
        <Typography
          variant="h6"
          sx={{ color: 'primary.main', fontWeight: '600', mb: 2 }}
        >
          Select Category
        </Typography>
        <FormControl sx={{ width: '350px' }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value={'Engineering'}>Engineering</MenuItem>
            <MenuItem value={'Medical'}>Medical</MenuItem>
            <MenuItem value={'B. SC'}>B. SC</MenuItem>
          </Select>
        </FormControl>
      </Paper>
      {category && (
        <Paper elevation={0} sx={{ mt: 3 }}>
          <Typography
            variant="h6"
            sx={{ color: 'primary.main', fontWeight: '600', mb: 2 }}
          >
            Select {category} Courses
          </Typography>

          {category &&
            data
              .filter((item) => item.categoryName === category)[0]
              .courses.map((item, i) => (
                <FormControlLabel
                  key={i}
                  control={<Checkbox onChange={() => handleCourse(item)} />}
                  label={item}
                />
              ))}
        </Paper>
      )}
      {trueKeys && trueKeys.map((item, i) => <AddCollegeCourseFees key={i} />)}

      <Button
        onClick={() => setValue(value + 1)}
        variant="outlined"
        color="secondary"
        size="large"
        sx={{ mt: 3 }}
      >
        next
      </Button>
    </Paper>
  );
};

export default AddCollegeCourseTab;
