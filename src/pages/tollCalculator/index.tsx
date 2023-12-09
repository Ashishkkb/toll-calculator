// pages/toll-calculator/index.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import CalculateTollButton from '../../components/CalculateTollButton';
import TollGuide from '../../components/TollGuide';

// Dynamically import LeafletMap with ssr set to false
const MyMap = dynamic(() => import('../../components/LeafletMap'), { ssr: false });

const TollCalculatorPage: React.FC = () => {
  return (
    <div>
      <TollGuide />
      <CalculateTollButton />
      <div className='h-[600px] w-[600px] border-2 border-black mx-auto'>
        <MyMap />
      </div>
    </div>
  );
};

export default TollCalculatorPage;
