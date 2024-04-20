import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

function CryptoChart() {
  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, { width: 400, height: 300 });
    const lineSeries = chart.addLineSeries();
    lineSeries.setData([
      { time: '2019-04-11', value: 80.01 },
      { time: '2019-04-12', value: 96.63 },
      { time: '2019-04-13', value: 76.64 },
      { time: '2019-04-14', value: 81.89 },
      { time: '2019-04-15', value: 74.43 },
    ]);

    return () => chart.remove();
  }, []);

  return <div ref={chartContainerRef} />;
}

export default CryptoChart;