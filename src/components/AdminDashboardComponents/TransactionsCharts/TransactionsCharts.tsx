import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface PieChartProps {
  data: number[];
  labels: string[];
}

const TransactionsCharts: React.FC<PieChartProps> = ({ data, labels }) => {
  const options: ApexOptions = {
    chart: {
      id: 'pie-chart',
      toolbar: {
        show: false,
      },
    },
    labels: labels,
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'bottom',
    },
  };

  const series = data;

  return <Chart options={options} series={series} type="pie" height={400} />;
};

export default TransactionsCharts;
