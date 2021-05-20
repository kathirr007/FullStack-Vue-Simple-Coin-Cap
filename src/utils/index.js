export const formatCurrency = number => {
  const standardFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigis: 0
  })

  const expandedFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigis: 4
  })

  if (standardFormat.format(number) === '$0') {
    return expandedFormat.format(number)
  }

  return standardFormat.format(number)
}

export const formatNumber = number => {
  return new Intl.NumberFormat().format(number)
}
export const isValuePositive = number => {
  return number > 0
}
