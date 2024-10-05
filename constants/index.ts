type strategyItem = {
  title: string,
  type: 'radio' | 'checkbox',
  items: string[],
}

export const strategyChecklist: strategyItem[] = [
  {
    title: 'Pre-Market Trend:',
    type: 'checkbox',
    items: [
      '1hr Bullish',
      '1hr Bearish',
      '4hr Bullish',
      '4hr Bearish',
    ]
  },
  {
    title: 'What Got Hit First After Market Open?',
    type: 'radio',
    items: [
      'A High',
      'A Low',
    ]
  },
  {
    title: 'Trend Confirmation:',
    type: 'checkbox',
    items: [
      '1hr/4hr Liquidity Sweep (In-Line with Bias)',
      'Break of Structure',
      'Inverse Fair Value Gap',
    ]
  },
  {
    title: '3rd Confluence: (At Least 1)',
    type: 'checkbox',
    items: [
      'Equilibrium',
      'Fair Value Gap',
      'Order Block',
    ]
  },
  {
    title: '> Buying/Selling Pressure (Green/Red Candle that Closes Out of 3rd Confluence)',
    type: 'radio',
    items: [
      'Scale Down Into the 1min (From 5min)',
      'Scale Down Into the 5min (From 15min)',
    ]
  },
  {
    title: 'Execution: (On ^ Lower Timeframe)',
    type: 'radio',
    items: [
      'Inverse Fair Value Gap',
      'Break of Structure',
    ]
  },
]