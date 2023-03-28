import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface AreaChartProps {
  data: number[];
  months: string[];
}

const StudentChart: React.FC<AreaChartProps> = ({ data, months }) => {
  const options: ApexOptions = {
    chart: {
      id: 'area-chart',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: months,
    },
    yaxis: {
      min: 0,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
  };

  const series = [
    {
      name: 'Series 1',
      data: data,
    },
  ];

  return <Chart options={options} series={series} type="area" height={400} />;
};

export default StudentChart;
