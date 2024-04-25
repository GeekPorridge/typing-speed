import { useState } from "react"
import useWords from "./useWords"
import useCountdownTime from "./useCountdownTime"

export type State = "start" | "run" | "finish"
const initialTime = 30

const useEngine = () => {
  const [state, setState] = useState<State>("start")

  const { timeLeft, resetCountdown, startCountdown } =
    useCountdownTime(initialTime)

  const { words, updateWords } = useWords(10)

  return { state, words, updateWords, timeLeft }
}

export default useEngine
