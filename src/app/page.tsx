'use client'

import { useState } from 'react';
import BarChart from './barChart';
import CHART_DATA from './data';

export default function Home() {
  const [showChart, setShowChart] = useState(false);

  return (
    <main className='container'>
      <button 
      onClick={() => setShowChart(prev => !prev)}
      > 
      Toggle Chart 
      </button>
      { showChart ? <BarChart data={CHART_DATA} /> : null}

    </main>
  );
}
