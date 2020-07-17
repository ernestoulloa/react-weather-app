import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';

const WeatherBarChart = ({ series, day, scale }) => {
  const options = {
    chart: {
      type: 'column',
      className: 'chart-container',
      zoomType: 'x',
    },
    title: {
      text: `Temperatures in Munich during the day: ${day}`,
    },
    xAxis: {
      type: 'category',
      title: {
        enabled: true,
        text: 'Time (UTC)',
        style: {
          fontWeight: 'normal',
        },
      },
      labels: {
        rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: `Temperatures °(${scale})`,
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: `Temperature: <b>{point.y:.1f}° ${scale}</b>`,
    },
    series: [{
      name: 'Temperatures',
      color: 'rgb(56,72,168)',
      data: series,
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.1f}',
        y: 10,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            enabled: false,
          },
        },
      }],
    },
  };

  return (
    <div className="chart-wrapper">
      <div className="chart-inner">
        <FadeIn>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </FadeIn>
      </div>
    </div>
  );
};

export default WeatherBarChart;
WeatherBarChart.propTypes = {
  series: PropTypes.instanceOf(Array).isRequired,
  day: PropTypes.string.isRequired,
  scale: PropTypes.string.isRequired,
};
