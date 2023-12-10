// pages/toll-calculator/index.tsx
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import CalculateTollButton from '../../components/CalculateTollButton';
import TollGuide from '../../components/TollGuide';

// Dynamically import LeafletMap with ssr set to false
const MyMap = dynamic(() => import('../../components/LeafletMap'), { ssr: false });

const TollCalculatorPage: React.FC = () => {

  return (
    <div className='w-screen'>
      <div className='mx-auto min-w-screen justify-center items-center'>
      <MyMap />
      </div>
    </div>
  );
};

export default TollCalculatorPage;
