import { useEffect, useRef, useState } from "react"

const useCountdownTime = (initialTime: number) => {
  const [timeLeft, setTimeLeft] = useState(initialTime)
  const intervaRef = useRef<number | null | any>(null)

  const startCountdown = () => {
    intervaRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1)
    }, 1000)
  }

  const resetCountdown = () => {
    // q
    if (intervaRef.current) {
      clearInterval(intervaRef.current)
    }
    setTimeLeft(initialTime)
  }

  useEffect(() => {
    if (!timeLeft && intervaRef.current) {
      clearInterval(intervaRef.current)
    }
  }, [timeLeft])

  return { timeLeft, startCountdown, resetCountdown }
}

export default useCountdownTime
