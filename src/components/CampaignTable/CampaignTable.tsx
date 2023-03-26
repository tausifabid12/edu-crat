import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const data = [
  {
    campaignId: '1',
    campaignType: 'Slider',
    campaignName: 'Campaign 1',
    dateCreated: '2021-09-01',
    recipient: 'John Doe',
    clickRate: '10%',
    openRate: '20%',
    progress: '50%',
  },
  {
    campaignId: '2',
    campaignType: 'Slider',
    campaignName: 'Campaign 1',
    dateCreated: '2021-09-01',
    recipient: 'John Doe',
    clickRate: '10%',
    openRate: '20%',
    progress: '50%',
  },
  {
    campaignId: '3',
    campaignType: 'Slider',
    campaignName: 'Campaign 1',
    dateCreated: '2021-09-01',
    recipient: 'John Doe',
    clickRate: '10%',
    openRate: '20%',
    progress: '50%',
  },
  {
    campaignId: '4',
    campaignType: 'Slider',
    campaignName: 'Campaign 1',
    dateCreated: '2021-09-01',
    recipient: 'John Doe',
    clickRate: '10%',
    openRate: '20%',
    progress: '50%',
  },
  {
    campaignId: '5',
    campaignType: 'Slider',
    campaignName: 'Campaign 1',
    dateCreated: '2021-09-01',
    recipient: 'John Doe',
    clickRate: '10%',
    openRate: '20%',
    progress: '50%',
  },
];

const CampaignTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Campaign ID</TableCell>
            <TableCell align="center">Campaign Type</TableCell>
            <TableCell align="center">Campaign Name</TableCell>
            <TableCell align="center">Date Created</TableCell>
            <TableCell align="center"> Recipient</TableCell>
            <TableCell align="center"> Click Rate</TableCell>
            <TableCell align="center"> Open Rate</TableCell>
            <TableCell align="center"> Progress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.campaignId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.campaignId}
              </TableCell>
              <TableCell align="center">{row.campaignType}</TableCell>
              <TableCell align="center">{row.campaignName}</TableCell>
              <TableCell align="center">{row.dateCreated}</TableCell>
              <TableCell align="center">{row.clickRate}</TableCell>
              <TableCell align="center">{row.openRate}</TableCell>
              <TableCell align="center">{row.progress}</TableCell>
              <TableCell align="center">{row.progress}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CampaignTable;
