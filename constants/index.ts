type strategyItem = {
  title: string,
  type: 'radio' | 'checkbox',
  items: string[],
}

export const strategyChecklist: strategyItem[] = [
  {
    title: 'Bias: (If 1hr = 4hr: Scale to 5min; Else 15min)',
    type: 'checkbox',
    items: [
      '1hr Bullish',
      '1hr Bearish',
      '4r Bullish',
      '4hr Bearish',
    ]
  },
  {
    title: 'Switched Bias: (If Opposite Confluence Got Hit First)',
    type: 'radio',
    items: [
      'Yes',
      'No',
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