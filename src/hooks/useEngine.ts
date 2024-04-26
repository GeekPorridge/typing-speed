import { useCallback, useEffect, useState } from "react"
import useWords from "./useWords"
import useCountdownTime from "./useCountdownTime"
import useTyping from "./useTyping"
import { countErrors } from "src/utils/helpers"

export type State = "start" | "run" | "finish"
const initialTime = 30

const useEngine = () => {
  const [state, setState] = useState<State>("start")
  const [errors, setErrors] = useState(0)

  const { timeLeft, resetCountdown, startCountdown } =
    useCountdownTime(initialTime)
  const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTyping(
    state != "finish"
  )

  const { words, updateWords } = useWords(10)

  const areWordsFinished = cursor == words.length

  const restart = () => {
    resetCountdown()
    resetTotalTyped()
    setState("start")
    updateWords()
    clearTyped()
    setErrors(0)
  }

  const sumErrors = useCallback(() => {
    const wordReached = words.substring(0, Math.min(words.length, totalTyped))

    setErrors((prevErrors) => prevErrors + countErrors(typed, wordReached))
  }, [typed, words, totalTyped])

  // 开始敲击、开始计时、开始计算错误、正确率等
  useEffect(() => {
    if (state == "start" && cursor > 0) {
      setState("run")
      startCountdown()
    }
  }, [state, startCountdown, cursor])

  // 当计时结束
  useEffect(() => {
    if (timeLeft == 0 && state == "run") {
      setState("finish")
      sumErrors()
    }
  }, [timeLeft, state, sumErrors])

  // 当一组单词敲完,产生新的一组单词
  useEffect(() => {
    if (areWordsFinished) {
      updateWords()
      clearTyped()
      sumErrors()
    }
  }, [areWordsFinished, updateWords, clearTyped, sumErrors])

  return {
    state,
    words,
    timeLeft,
    typed,
    errors,
    totalTyped,
    updateWords,
    restart,
  }
}

export default useEngine
