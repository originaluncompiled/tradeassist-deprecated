type strategyItem = {
  title: string,
  description?: string,
  type: 'radio' | 'checkbox',
  items: string[],
}

export const strategyChecklist: strategyItem[] = [
  {
    title: 'Pre-Market Trend:',
    description: 'Market trend 30mins before market open',
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
    description: 'Which liquidity sweep got hit first, determines what the bias is',
    type: 'radio',
    items: [
      'A High (bearish liq. sweep)',
      'A Low (bullish liq. sweep)',
    ]
  },
  {
    title: 'Trend Confirmation:',
    description: '* Required! BOS = iFVG (∴ just need one)',
    type: 'checkbox',
    items: [
      '1hr/4hr Liquidity Sweep (In-Line with Bias)',
      'Break of Structure',
      'Inverse Fair Value Gap',
    ]
  },
  {
    title: '3rd Confluence:',
    description: 'At Least 1',
    type: 'checkbox',
    items: [
      'Equilibrium',
      'Fair Value Gap',
      'Order Block',
    ]
  },
  {
    title: '> Buying/Selling Pressure',
    description: 'When there\'s a green/red candle that closes out of the 3rd confluence',
    type: 'radio',
    items: [
      'Scale Down Into the 1min (From 5min)',
      'Scale Down Into the 5min (From 15min)',
    ]
  },
  {
    title: 'Execution:',
    description: 'Execute using the above chosen lower timeframe',
    type: 'radio',
    items: [
      'Inverse Fair Value Gap',
      'Break of Structure',
    ]
  },
]