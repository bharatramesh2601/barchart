'use client'

import { useState } from 'react';
import BarChart from './barChart';

// import CHART_DATA from './data'

export default function Home() {
  const [showChart] = useState(false);

  return (
    <main className='container'>
      <button> Toggle Chart </button>
      { showChart ? <BarChart /> : null}

    </main>
  );
}
