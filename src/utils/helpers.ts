const formatPercentage = (percentage: number) => {
  return percentage.toFixed(0) + "%"
}

const countErrors = (actual: string, expected: string) => {
  const expectedChars = expected.split("")

  return expectedChars.reduce((errors, expectedChars, index) => {
    const actualChar = actual[index]
    return errors + (actualChar == expectedChars ? 0 : 1)
  }, 0)
}

const calculateCorrectAccuracy = (total: number, errors: number) => {
  if (total > 0) {
    const correct = total - errors
    return (correct / total) * 100
  }

  return 0
}

export { formatPercentage, countErrors, calculateCorrectAccuracy }
