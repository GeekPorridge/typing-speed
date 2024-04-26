import { useEffect, useRef, useState } from "react"

const useCountdownTime = (initialTime: number) => {
  const [timeLeft, setTimeLeft] = useState(initialTime)
  const intervaRef = useRef<number | null>(null)

  const startCountdown = () => {
    intervaRef.current = window.setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1)
    }, 1000)
  }

  const resetCountdown = () => {
    if (intervaRef.current) {
      window.clearInterval(intervaRef.current)
    }
    setTimeLeft(initialTime)
  }

  useEffect(() => {
    if (!timeLeft && intervaRef.current) {
      window.clearInterval(intervaRef.current)
    }
  }, [timeLeft])

  return { timeLeft, startCountdown, resetCountdown }
}

export default useCountdownTime
