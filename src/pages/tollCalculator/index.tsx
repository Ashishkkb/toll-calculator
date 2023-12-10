// pages/toll-calculator/index.tsx
import React, { useState } from 'react';
import dynamic from 'next/dynamic';


// Dynamically import LeafletMap with ssr set to false
const MyMap = dynamic(() => import('../../components/MainToll/LeafletMap'), { ssr: false });
import Footer from './../../components/HomePage/Footer';
import MainToll from '@/components/MainToll/Main';

const TollCalculatorPage: React.FC = () => {

  return (
    <div className='w-screen'>
      <MainToll />
    </div>
  );
};

export default TollCalculatorPage;
