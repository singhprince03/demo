import React from 'react';
import { Card, CardBody } from '@material-tailwind/react';
import Chart from 'react-apexcharts';

const chartConfig = {
  type: 'line',
  height: 240,
  series: [
    {
      name: '',
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: '',
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#020617'],
    stroke: {
      lineCap: 'round',
      curve: 'smooth',
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: '#616161',
          fontSize: '12px',
          fontFamily: 'inherit',
          fontWeight: 400,
        },
      },
      categories: [
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: '#616161',
          fontSize: '12px',
          fontFamily: 'inherit',
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: '#dddddd',
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: 'dark',
    },
  },
};

function Main() {
  return (
    <main className='relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl'>
      <div className='flex items-start justify-between'>
        <div className='relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80'>
          <div className='h-full bg-[#080a1e] rounded-2xl dark:bg-gray-700'>
            <div className='flex items-center justify-center pt-6'>
              <svg
                width='35'
                height='30'
                viewBox='0 0 256 366'
                version='1.1'
                preserveAspectRatio='xMidYMid'
              >
                <defs>
                  <linearGradient
                    x1='12.5189534%'
                    y1='85.2128611%'
                    x2='88.2282959%'
                    y2='10.0225497%'
                    id='linearGradient-1'
                  >
                    <stop
                      stopColor='#FF0057'
                      stopOpacity='0.16'
                      offset='0%'
                    ></stop>
                    <stop
                      stopColor='#FF0057'
                      offset='86.1354%'
                    ></stop>
                  </linearGradient>
                </defs>
                <g>
                  <path
                    d='M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z'
                    fill='#001B38'
                  ></path>
                  <circle
                    fill='url(#linearGradient-1)'
                    transform='translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) '
                    cx='147.013244'
                    cy='147.014675'
                    r='78.9933938'
                  ></circle>
                  <circle
                    fill='url(#linearGradient-1)'
                    opacity='0.5'
                    transform='translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) '
                    cx='147.013244'
                    cy='147.014675'
                    r='78.9933938'
                  ></circle>
                </g>
              </svg>
            </div>
            <nav className='mt-6'>
              <div>
                <a
                  className='flex items-center justify-start w-full p-4 my-2 font-thin text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800'
                  href='#'
                >
                  <span className='text-left'>
                    <svg
                      width='20'
                      height='20'
                      fill='currentColor'
                      viewBox='0 0 2048 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z'></path>
                    </svg>
                  </span>
                  <span className='mx-4 text-sm font-normal'>Dashboard</span>
                </a>
                <a
                  className='flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500'
                  href='#'
                >
                  <span className='text-left'>
                    <svg
                      width='20'
                      height='20'
                      fill='currentColor'
                      className='m-auto'
                      viewBox='0 0 2048 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z'></path>
                    </svg>
                  </span>
                  <span className='mx-4 text-sm font-normal'>Assets</span>
                </a>
                <a
                  className='flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500'
                  href='#'
                >
                  <span className='text-left'>
                    <svg
                      width='20'
                      height='20'
                      fill='currentColor'
                      className='m-auto'
                      viewBox='0 0 2048 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z'></path>
                    </svg>
                  </span>
                  <span className='mx-4 text-sm font-normal'>Analysis</span>
                </a>
                <a
                  className='flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500'
                  href='#'
                >
                  <span className='text-left'>
                    <svg
                      width='20'
                      height='20'
                      fill='currentColor'
                      className='m-auto'
                      viewBox='0 0 2048 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z'></path>
                    </svg>
                  </span>
                  <span className='mx-4 text-sm font-normal'>Jobs</span>
                </a>
                <a
                  className='flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500'
                  href='#'
                >
                  <span className='text-left'>
                    <svg
                      width='20'
                      height='20'
                      className='m-auto'
                      fill='currentColor'
                      viewBox='0 0 2048 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z'></path>
                    </svg>
                  </span>
                  <span className='mx-4 text-sm font-normal'>Transfers</span>
                </a>
                <a
                  className='flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500'
                  href='#'
                >
                  <span className='text-left'>
                    <svg
                      width='20'
                      height='20'
                      fill='currentColor'
                      className='m-auto'
                      viewBox='0 0 2048 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z'></path>
                    </svg>
                  </span>
                  <span className='mx-4 text-sm font-normal'>Reports</span>
                </a>
                <a
                  className='flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500'
                  href='#'
                >
                  <span className='text-left'>
                    <svg
                      width='20'
                      fill='currentColor'
                      height='20'
                      className='w-5 h-5'
                      viewBox='0 0 1792 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z'></path>
                    </svg>
                  </span>
                  <span className='mx-4 text-sm font-normal'>Settings</span>
                </a>
                <a
                  className='flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500'
                  href='#'
                >
                  <span className='text-left'>
                    <svg
                      width='20'
                      height='20'
                      fill='currentColor'
                      className='m-auto'
                      viewBox='0 0 2048 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z'></path>
                    </svg>
                  </span>
                  <span className='mx-4 text-sm font-normal'>Projects</span>
                </a>
                <a
                  className='flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500'
                  href='#'
                >
                  <span className='text-left'>
                    <svg
                      width='20'
                      height='20'
                      fill='currentColor'
                      viewBox='0 0 2048 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z'></path>
                    </svg>
                  </span>
                  <span className='mx-4 text-sm font-normal'>Support</span>
                </a>
                <a
                  className='flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500'
                  href='#'
                >
                  <span className='text-left'>
                    <svg
                      width='20'
                      height='20'
                      fill='currentColor'
                      className='m-auto'
                      viewBox='0 0 2048 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z'></path>
                    </svg>
                  </span>
                  <span className='mx-4 text-sm font-normal'>Feedback</span>
                </a>
                <a
                  className='flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500'
                  href='#'
                >
                  <span className='text-left'>
                    <svg
                      width='20'
                      fill='currentColor'
                      height='20'
                      className='w-5 h-5'
                      viewBox='0 0 1792 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z'></path>
                    </svg>
                  </span>
                  <span className='mx-4 text-sm font-normal'>Raise Ticket</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div className='flex flex-col w-full pl-0 md:p-4 md:space-y-4'>
          <header className='z-40 items-center w-full h-16 bg-white shadow-lg dark:bg-gray-700 rounded-2xl'>
            <div className='relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center'>
              <div className='relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0'>
                <div className='container relative left-0 z-50 flex w-3/4 h-auto'>
                  <select
                    className='block px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500'
                    name='projects'
                  >
                    <option value=''>Default Project</option>
                    <option value='project1'>Project 1</option>
                    <option value='project2'>Project 2</option>
                  </select>
                </div>
                <div className='relative flex items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto space-x-4'>
                  <button className='flex items-center p-2 text-gray-400 bg-white rounded-full shadow hover:text-gray-700 text-md'>
                    <svg
                      width='20'
                      height='20'
                      className=''
                      fill='currentColor'
                      viewBox='0 0 1792 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z'></path>
                    </svg>
                  </button>
                  <button className='flex items-center p-2 text-gray-400 bg-white rounded-full shadow hover:text-gray-700 text-md'>
                    <svg
                      width='20'
                      height='20'
                      className='text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 1792 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zm816-288q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z'></path>
                    </svg>
                  </button>
                  <span className='w-1 h-8 bg-gray-200 rounded-lg'></span>
                  <a
                    href='#'
                    className='flex items-center'
                  >
                    <img
                      alt='profil'
                      src='./assets/profile.jpg'
                      className='mx-auto object-cover rounded-full h-10 w-10 '
                    />
                  </a>
                  <select
                    className='block px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500'
                    name='users'
                  >
                    <option value=''>Prince S</option>
                    <option value='charlie'>Charlie R</option>
                    <option value='charlie'>Charlie R</option>
                  </select>
                </div>
              </div>
            </div>
          </header>
          <div className='h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0'>
            <div className='flex flex-col flex-wrap sm:flex-row '>
              <div className='w-full sm:w-1/2 '>
                <div className='mb-4'>
                  <div className='w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700'>
                    <div className='flex items-center justify-between mb-6'>
                      <div className='flex items-center'>
                        <div className='flex flex-col'>
                          <span className='ml-2 font-bold text-black text-md dark:text-white'>
                            Running Jobs
                          </span>
                        </div>
                      </div>
                      <div className='flex items-center'>
                        <select
                          className='block px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500'
                          name='week'
                        >
                          <option value=''>This Week</option>
                          <option value='week1'>Week 1</option>
                          <option value='week2'>Week 2</option>
                        </select>
                      </div>
                    </div>
                    <div className='flex items-center justify-start my-4 space-x-4'>
                      <div>
                        <span className='flex items-center px-2 py-1 text-gray-500'>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            stroke-width='0'
                            viewBox='0 0 512 512'
                            class='icons'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                            className='inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white bg-blue-200 p-2'
                          >
                            <path d='M431.3 388.8c7.5-6.3 16.7-16.1 16.7-31.4 0-13.7-5.7-22.8-10.9-29.1-.6-1.2-1.1-2.3-1.6-3.4l-.2-1.1c-.7-3.5 0-7.1 2-10 3.4-5 5.8-12.3 5.8-25.7 0-11.6-4.8-18.4-9.7-23.2-4.4-4.3-6.1-12.5-4.1-18.3 4.8-13.9.2-28.4-8.2-37.8-10.5-11.8-20.3-13.2-46.4-11.7-18 1.1-55.5 6.9-80.2 10.8-10.1 1.6-18.9 3-21.6 3.2-12.7 1.3-15.2 0-16.4-4.9-.5-2.1 1.9-6.9 4.9-13 4-8.1 9.5-19.2 14.5-35.8 10.1-33.2 9-69.2-2.7-90.2-5.5-9.9-14.8-19.1-26.3-19.1S223.6 50.5 219 56c-3.4 4-2.3 11.6-6.2 26.8-3.1 12.4-7 30.9-12 42-7.5 16.6-39.7 45.1-57 60.4-4.1 3.6-7.6 6.7-10.1 9.1-8.7 8.1-17.6 21.1-25.5 32.7-5.4 7.8-10.4 15.2-13.7 18.5-7.1 7.1-16.6 10.9-22.3 10.9-4.4 0-8 3.6-8 8v159.5c0 4.6 3.7 8.3 8.3 8.3 35.5 0 50.5 5.8 66.4 11.8 12.2 4.7 24.9 9.5 46.4 12.1 32.4 4 74.2 8.1 112.6 8.1 20.4 0 39.9-2 56.6-3.9 31-3.6 64.2-10.8 75.2-37 4.1-9.7 2.2-17.6-.5-23.7-.4-.8-.7-1.7-.8-2.6-.6-3.3.6-6.3 2.9-8.2z'></path>
                          </svg>
                        </span>
                        <span className='flex items-center px-2 py-1 text-xs font-semibold text-gray-500 '>
                          RENDERING JOBS
                        </span>
                        <span className='flex items-center px-2 py-1 text-s font-semibold'>
                          14
                        </span>
                      </div>
                      <div>
                        <span className='flex items-center px-2 py-1 text-xs font-semibold  text-gray-500'>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            stroke-width='0'
                            viewBox='0 0 512 512'
                            class='icons'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                            className='inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white bg-blue-200 p-2'
                          >
                            <path d='M232.9 371.6c0 12.7 10.4 23.1 23.1 23.1s23.1-10.4 23.1-23.1c0-12.7-10.4-23.1-23.1-23.1s-23.1 10.3-23.1 23.1zm0-323.6v92.4h46.2V96.1c78.3 11.3 138.7 78.3 138.7 159.9 0 89.4-72.3 161.8-161.8 161.8S94.2 345.4 94.2 256c0-38.8 13.6-74.4 36.5-102.2L256 279.1l32.6-32.6L131.4 89.4v.5C80.8 127.7 48 187.8 48 256c0 114.9 92.9 208 208 208 114.9 0 208-93.1 208-208S370.9 48 256 48h-23.1zm161.8 208c0-12.7-10.4-23.1-23.1-23.1-12.7 0-23.1 10.4-23.1 23.1s10.4 23.1 23.1 23.1c12.7 0 23.1-10.4 23.1-23.1zm-277.4 0c0 12.7 10.4 23.1 23.1 23.1s23.1-10.4 23.1-23.1-10.4-23.1-23.1-23.1-23.1 10.4-23.1 23.1z'></path>
                          </svg>
                        </span>
                        <span className='flex items-center px-2 py-1 text-xs font-semibold text-gray-500'>
                          WAITING JOBS
                        </span>
                        <span className='flex items-center px-2 py-1 text-s font-semibold'>
                          14
                        </span>
                      </div>
                      <div>
                        <span className='flex items-center px-2 py-1 text-xs font-semibold  text-gray-500'>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            stroke-width='0'
                            viewBox='0 0 24 24'
                            class='icons'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                            className='inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white bg-blue-200 p-2'
                          >
                            <g id='Monitor'>
                              <path d='M18.435,3.06H5.565a2.5,2.5,0,0,0-2.5,2.5v8.88a2.507,2.507,0,0,0,2.5,2.5h2.91l-.37,3H7a.5.5,0,0,0,0,1h10.01a.5.5,0,0,0,0-1H15.9l-.37-3h2.91a2.507,2.507,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.435,3.06ZM14.9,19.94H9.115l.37-3h5.03Zm5.04-5.5a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5V5.56a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5Z'></path>
                            </g>
                          </svg>
                        </span>
                        <span className='flex items-center px-2 py-1 text-xs font-semibold  text-gray-500'>
                          COMPLETED JOBS
                        </span>
                        <span className='flex items-center px-2 py-1 text-s font-semibold '>
                          14
                        </span>
                      </div>
                      <div>
                        <span className='flex items-center px-2 py-1 text-xs font-semibold  text-gray-500'>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            stroke-width='0'
                            viewBox='0 0 24 24'
                            class='icons'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                            className='inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white bg-blue-200 p-2'
                          >
                            <path
                              fill='none'
                              d='M0 0h24v24H0z'
                            ></path>
                            <path d='M20 4H4c-1.1 0-2 .9-2 2v3h2V6h16v3h2V6c0-1.1-.9-2-2-2zM20 18H4v-3H2v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3h-2v3z'></path>
                            <path d='M14.89 7.55c-.34-.68-1.45-.68-1.79 0L10 13.76l-1.11-2.21A.988.988 0 0 0 8 11H2v2h5.38l1.72 3.45c.18.34.52.55.9.55s.72-.21.89-.55L14 10.24l1.11 2.21c.17.34.51.55.89.55h6v-2h-5.38l-1.73-3.45z'></path>
                          </svg>
                        </span>
                        <span className='flex items-center px-2 py-1 text-xs font-semibold  text-gray-500'>
                          FAILED JOBS
                        </span>
                        <span className='flex items-center px-2 py-1 text-s font-semibold '>
                          14
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mb-4'>
                  <div className='w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700'>
                    <div className='flex items-center justify-between mb-6'>
                      <div className='flex items-center'>
                        <div className='flex flex-col'>
                          <span className='ml-2 font-bold text-black text-md dark:text-white'>
                            Running Frames
                          </span>
                        </div>
                      </div>
                      <div className='flex items-center'>
                        <select
                          className='block px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500'
                          name='week'
                        >
                          <option value=''>This Week</option>
                          <option value='week1'>Week 1</option>
                          <option value='week2'>Week 2</option>
                        </select>
                      </div>
                    </div>
                    <div className='flex items-center justify-start my-4 space-x-4'>
                      <div>
                        <span className='flex items-center px-2 py-1 text-xs font-semibold  text-gray-500'>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            stroke-width='0'
                            viewBox='0 0 512 512'
                            class='icons'
                            height='0.5em'
                            width='0.5em'
                            xmlns='http://www.w3.org/2000/svg'
                            className='inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white bg-blue-200 p-2'
                          >
                            <path d='M431.3 388.8c7.5-6.3 16.7-16.1 16.7-31.4 0-13.7-5.7-22.8-10.9-29.1-.6-1.2-1.1-2.3-1.6-3.4l-.2-1.1c-.7-3.5 0-7.1 2-10 3.4-5 5.8-12.3 5.8-25.7 0-11.6-4.8-18.4-9.7-23.2-4.4-4.3-6.1-12.5-4.1-18.3 4.8-13.9.2-28.4-8.2-37.8-10.5-11.8-20.3-13.2-46.4-11.7-18 1.1-55.5 6.9-80.2 10.8-10.1 1.6-18.9 3-21.6 3.2-12.7 1.3-15.2 0-16.4-4.9-.5-2.1 1.9-6.9 4.9-13 4-8.1 9.5-19.2 14.5-35.8 10.1-33.2 9-69.2-2.7-90.2-5.5-9.9-14.8-19.1-26.3-19.1S223.6 50.5 219 56c-3.4 4-2.3 11.6-6.2 26.8-3.1 12.4-7 30.9-12 42-7.5 16.6-39.7 45.1-57 60.4-4.1 3.6-7.6 6.7-10.1 9.1-8.7 8.1-17.6 21.1-25.5 32.7-5.4 7.8-10.4 15.2-13.7 18.5-7.1 7.1-16.6 10.9-22.3 10.9-4.4 0-8 3.6-8 8v159.5c0 4.6 3.7 8.3 8.3 8.3 35.5 0 50.5 5.8 66.4 11.8 12.2 4.7 24.9 9.5 46.4 12.1 32.4 4 74.2 8.1 112.6 8.1 20.4 0 39.9-2 56.6-3.9 31-3.6 64.2-10.8 75.2-37 4.1-9.7 2.2-17.6-.5-23.7-.4-.8-.7-1.7-.8-2.6-.6-3.3.6-6.3 2.9-8.2z'></path>
                          </svg>
                        </span>
                        <span className='flex items-center px-2 py-1 text-xs font-semibold text-gray-500 '>
                          RENDERING JOBS
                        </span>
                        <span className='flex items-center px-2 py-1 text-s font-semibold'>
                          14
                        </span>
                      </div>
                      <div>
                        <span className='flex items-center px-2 py-1 text-xs font-semibold  text-gray-500'>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            stroke-width='0'
                            viewBox='0 0 512 512'
                            class='icons'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                            className='inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white bg-blue-200 p-2'
                          >
                            <path d='M232.9 371.6c0 12.7 10.4 23.1 23.1 23.1s23.1-10.4 23.1-23.1c0-12.7-10.4-23.1-23.1-23.1s-23.1 10.3-23.1 23.1zm0-323.6v92.4h46.2V96.1c78.3 11.3 138.7 78.3 138.7 159.9 0 89.4-72.3 161.8-161.8 161.8S94.2 345.4 94.2 256c0-38.8 13.6-74.4 36.5-102.2L256 279.1l32.6-32.6L131.4 89.4v.5C80.8 127.7 48 187.8 48 256c0 114.9 92.9 208 208 208 114.9 0 208-93.1 208-208S370.9 48 256 48h-23.1zm161.8 208c0-12.7-10.4-23.1-23.1-23.1-12.7 0-23.1 10.4-23.1 23.1s10.4 23.1 23.1 23.1c12.7 0 23.1-10.4 23.1-23.1zm-277.4 0c0 12.7 10.4 23.1 23.1 23.1s23.1-10.4 23.1-23.1-10.4-23.1-23.1-23.1-23.1 10.4-23.1 23.1z'></path>
                          </svg>
                        </span>
                        <span className='flex items-center px-2 py-1 text-xs font-semibold text-gray-500'>
                          WAITING JOBS
                        </span>
                        <span className='flex items-center px-2 py-1 text-s font-semibold'>
                          14
                        </span>
                      </div>
                      <div>
                        <span className='flex items-center px-2 py-1 text-xs font-semibold  text-gray-500'>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            stroke-width='0'
                            viewBox='0 0 24 24'
                            class='icons'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                            className='inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white bg-blue-200 p-2'
                          >
                            <g id='Monitor'>
                              <path d='M18.435,3.06H5.565a2.5,2.5,0,0,0-2.5,2.5v8.88a2.507,2.507,0,0,0,2.5,2.5h2.91l-.37,3H7a.5.5,0,0,0,0,1h10.01a.5.5,0,0,0,0-1H15.9l-.37-3h2.91a2.507,2.507,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.435,3.06ZM14.9,19.94H9.115l.37-3h5.03Zm5.04-5.5a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5V5.56a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5Z'></path>
                            </g>
                          </svg>
                        </span>
                        <span className='flex items-center px-2 py-1 text-xs font-semibold  text-gray-500'>
                          COMPLETED JOBS
                        </span>
                        <span className='flex items-center px-2 py-1 text-s font-semibold '>
                          14
                        </span>
                      </div>
                      <div>
                        <span className='flex items-center px-2 py-1 text-xs font-semibold  text-gray-500'>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            stroke-width='0'
                            viewBox='0 0 24 24'
                            class='icons'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                            className='inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white bg-blue-200 p-2'
                          >
                            <path
                              fill='none'
                              d='M0 0h24v24H0z'
                            ></path>
                            <path d='M20 4H4c-1.1 0-2 .9-2 2v3h2V6h16v3h2V6c0-1.1-.9-2-2-2zM20 18H4v-3H2v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3h-2v3z'></path>
                            <path d='M14.89 7.55c-.34-.68-1.45-.68-1.79 0L10 13.76l-1.11-2.21A.988.988 0 0 0 8 11H2v2h5.38l1.72 3.45c.18.34.52.55.9.55s.72-.21.89-.55L14 10.24l1.11 2.21c.17.34.51.55.89.55h6v-2h-5.38l-1.73-3.45z'></path>
                          </svg>
                        </span>
                        <span className='flex items-center px-2 py-1 text-xs font-semibold  text-gray-500'>
                          FAILED JOBS
                        </span>
                        <span className='flex items-center px-2 py-1 text-s font-semibold '>
                          14
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='container max-w-3xl mx-auto'>
                  <div className='flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between rounded-2xl shadow-lg'>
                    <div className='flex flex-row justify-between w-full mb-1 sm:mb-0'>
                      <h2 className='ml-2 font-bold text-black text-md dark:text-white'>
                        Active Jobs
                      </h2>
                    </div>
                    <div className=' -mx-4 overflow-x-auto'>
                      <div className='inline-block min-w-full overflow-hidden rounded-lg shadow'>
                        <table className='min-w-full leading-normal'>
                          <thead>
                            <tr>
                              <th
                                scope='col'
                                className='px-5 py-3 text-sm font-normal text-left text-gray-400 uppercase bg-white border-b border-gray-200'
                              >
                                JOB ID
                              </th>
                              <th
                                scope='col'
                                className='px-5 py-3 text-sm font-normal text-left text-gray-400 uppercase bg-white border-b border-gray-200'
                              >
                                PROJECT ID
                              </th>
                              <th
                                scope='col'
                                className='px-5 py-3 text-sm font-normal text-left text-gray-400 uppercase bg-white border-b border-gray-200'
                              >
                                STAGE
                              </th>
                              <th
                                scope='col'
                                className='px-5 py-3 text-sm font-normal text-left text-gray-400 uppercase bg-white border-b border-gray-200'
                              >
                                SCENE/SHOT NAME
                              </th>
                              <th
                                scope='col'
                                className='px-5 py-3 text-sm font-normal text-left text-gray-400 uppercase bg-white border-b border-gray-200'
                              >
                                VIEW
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <div className='flex items-center'>
                                  <p className='text-gray-900 whitespace-no-wrap'>
                                    1234567890
                                  </p>
                                </div>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <p className='text-gray-900 whitespace-no-wrap'>
                                  Pro_256
                                </p>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <span className='relative inline-block px-3 py-1 font-semibold leading-tight text-green-900'>
                                  <span
                                    aria-hidden='true'
                                    className='absolute inset-0 bg-green-200 rounded-full opacity-50'
                                  ></span>
                                  <span className='relative'>Rendering</span>
                                </span>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <p className='text-gray-900 whitespace-no-wrap'>
                                  KD_00123...
                                </p>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <a
                                  href='#'
                                  className='text-indigo-600 hover:text-indigo-900'
                                >
                                  <img
                                    className='inline-block h-5 w-5 rounded-full object-cover ring-2 ring-white'
                                    src='./assets/eye-svgrepo-com.svg'
                                    alt='gear'
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <div className='flex items-center'>
                                  <p className='text-gray-900 whitespace-no-wrap'>
                                    1234567890
                                  </p>
                                </div>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <p className='text-gray-900 whitespace-no-wrap'>
                                  Pro_256
                                </p>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <span className='relative inline-block px-3 py-1 font-semibold leading-tight text-green-900'>
                                  <span
                                    aria-hidden='true'
                                    className='absolute inset-0 bg-green-200 rounded-full opacity-50'
                                  ></span>
                                  <span className='relative'>Uploading</span>
                                </span>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <p className='text-gray-900 whitespace-no-wrap'>
                                  KD_00123...
                                </p>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <a
                                  href='#'
                                  className='text-indigo-600 hover:text-indigo-900'
                                >
                                  <img
                                    className='inline-block h-5 w-5 rounded-full object-cover ring-2 ring-white'
                                    src='./assets/eye-svgrepo-com.svg'
                                    alt='gear'
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <div className='flex items-center'>
                                  <p className='text-gray-900 whitespace-no-wrap'>
                                    1234567890
                                  </p>
                                </div>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <p className='text-gray-900 whitespace-no-wrap'>
                                  Pro_256
                                </p>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <span className='relative inline-block px-3 py-1 font-semibold leading-tight text-green-900'>
                                  <span
                                    aria-hidden='true'
                                    className='absolute inset-0 bg-green-200 rounded-full opacity-50'
                                  ></span>
                                  <span className='relative'>Analysis</span>
                                </span>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <p className='text-gray-900 whitespace-no-wrap'>
                                  KD_00123...
                                </p>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <a
                                  href='#'
                                  className='text-indigo-600 hover:text-indigo-900'
                                >
                                  <img
                                    className='inline-block h-5 w-5 rounded-full object-cover ring-2 ring-white'
                                    src='./assets/eye-svgrepo-com.svg'
                                    alt='gear'
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <div className='flex items-center'>
                                  <p className='text-gray-900 whitespace-no-wrap'>
                                    1234567890
                                  </p>
                                </div>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <p className='text-gray-900 whitespace-no-wrap'>
                                  Pro_256
                                </p>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <span className='relative inline-block px-3 py-1 font-semibold leading-tight text-green-900'>
                                  <span
                                    aria-hidden='true'
                                    className='absolute inset-0 bg-green-200 rounded-full opacity-50'
                                  ></span>
                                  <span className='relative'>Analysis</span>
                                </span>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <p className='text-gray-900 whitespace-no-wrap'>
                                  KD_00123...
                                </p>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <a
                                  href='#'
                                  className='text-indigo-600 hover:text-indigo-900'
                                >
                                  <img
                                    className='inline-block h-5 w-5 rounded-full object-cover ring-2 ring-white'
                                    src='./assets/eye-svgrepo-com.svg'
                                    alt='gear'
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <div className='flex items-center'>
                                  <p className='text-gray-900 whitespace-no-wrap'>
                                    1234567890
                                  </p>
                                </div>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <p className='text-gray-900 whitespace-no-wrap'>
                                  Pro_256
                                </p>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <span className='relative inline-block px-3 py-1 font-semibold leading-tight text-green-900'>
                                  <span
                                    aria-hidden='true'
                                    className='absolute inset-0 bg-green-200 rounded-full opacity-50'
                                  ></span>
                                  <span className='relative'>Analysis</span>
                                </span>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <p className='text-gray-900 whitespace-no-wrap'>
                                  KD_00123...
                                </p>
                              </td>
                              <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
                                <a
                                  href='#'
                                  className='text-indigo-600 hover:text-indigo-900'
                                >
                                  <img
                                    className='inline-block h-5 w-5 rounded-full object-cover ring-2 ring-white'
                                    src='./assets/eye-svgrepo-com.svg'
                                    alt='gear'
                                  />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full sm:w-1/2'>
                <div className='mx-0 mb-4 sm:ml-4 xl:mr-4'>
                  <div className='w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700'>
                    <p className='p-4 font-bold text-black text-md dark:text-white'>
                      Network
                    </p>
                    <Card className='w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700'>
                      <CardBody className='px-2 pb-0'>
                        <Chart {...chartConfig} />
                      </CardBody>
                    </Card>
                  </div>
                </div>
                <div className='flex w-full sm:flex-row '>
                  <div className='mb-4 sm:ml-4 xl:mr-4'>
                   
                    <div className=' p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700'>
                    <img
                      className='inline-block '
                      src='./assets/img1.jpeg'
                      alt='gear'
                    />
                    {/*   <div className='flex items-center justify-between p-4'>
                        <p className='font-bold text-black text-md dark:text-white'>
                          Balance
                        </p>
                      </div>
                      <div className='flex items-center justify-between p-4 border-b-2 border-gray-100'>
                        <p className='font-bold text-black text-md dark:text-white'>
                          $458
                        </p>
                      </div>
                      <div className='flex items-center w-1/4 p-1 sm:mr-0 sm:right-auto space-x-4'>
                        <div className='flex items-center justify-between px-4 py-2 text-gray-600 border-b-2 border-gray-100'>
                          <p className='flex items-center text-xs dark:text-white'>
                            Coupon
                          </p>
                          <div className='flex items-center'>
                            <span className='ml-2 mr-2 text-xs text-gray-400 md:ml-4'>
                              $25
                            </span>
                          </div>
                        </div>
                        <span className='w-1 h-8 bg-gray-800 rounded-lg'></span>
                        <div className='flex items-center justify-between px-4 py-2 text-gray-600 border-b-2 border-gray-100'>
                          <p className='flex items-center text-xs dark:text-white'>
                            Credit
                          </p>
                          <div className='flex items-center'>
                            <span className='ml-2 mr-2 text-xs text-gray-400 md:ml-4'>
                              $0
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='flex items-center justify-between px-4 py-2 text-gray-600 border-b-2 border-gray-100'>
                        <p className='flex items-center text-xs dark:text-white'>
                          Hours Remaining
                        </p>
                        <div className='flex items-center'>
                          <span className='ml-2 mr-2 text-xs text-gray-400 md:ml-4'>
                            23:59:09
                          </span>
                        </div>
                      </div>
                      <div className='flex items-center justify-center px-4 py-2'>
                        <button className='px-4 py-2  text-base rounded-full text-indigo-500 border border-indigo-500 undefined '>
                          Recharge Now
                        </button>
                      </div>*/}
                    </div> 
                  </div>
                  <div className='mb-4 sm:ml-4 xl:mr-4'>
                    <div className=' p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700'>
                      <img
                        className='inline-block '
                        src='./assets/img2.jpeg'
                        alt='gear'
                      />

                      {/* <div className='flex items-center justify-between p-4'>
                        <p className='font-bold text-black text-md dark:text-white'>
                          Storage
                        </p>
                      </div>

                      <div>
                        <div className='block p-4 m-auto bg-white rounded-lg shadow w-52'>
                          <div className='w-full h-2 bg-gray-400 rounded-full mt-3'>
                            <div className='w-3/4 h-full text-center text-xs text-white bg-green-500 rounded-full'></div>
                          </div>
                        </div>
                      </div>
                      <div className='flex items-center justify-center p-4 w-full '>
                        <p className='font-bold text-black text-md dark:text-white'>
                          88
                        </p>
                      </div>
                      <div className='flex items-center justify-center p-4 w-full'>
                        <p className='font-bold text-black text-md dark:text-white'>
                          out of 100 GB (88%)
                        </p>
                      </div>
                      <div className='flex items-center justify-center px-4 py-2'>
                        <button className='px-4 py-2  text-base rounded-full text-indigo-500 border border-indigo-500 undefined '>
                          View Details
                        </button>
                      </div>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
