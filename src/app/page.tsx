'use client';

import React, { useState } from 'react';
import Grid from './components/grid';

export default function Home() {
  const [showGrid, setShowGrid] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => setShowGrid(true)}>Start</button>
      {showGrid && <Grid />}
    </main>
  )
}
