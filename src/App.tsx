import Results from "./components/Results"
import RestartButton from "./components/RestartButton"
import UserTypings from "./components/UserTypings"
import useEngine from "./hooks/useEngine"
import DarkModeToggle from "./components/DarkModeToggle"
import { calculateCorrectAccuracy } from "./utils/helpers"

const App = () => {
  const { state, words, timeLeft, typed, errors, totalTyped, restart } =
    useEngine()

  return (
    <>
      <DarkModeToggle />
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GenerateWords words={words} />
        <UserTypings
          userInput={typed}
          className='absolute inset-0'
          words={words}
        />
      </WordsContainer>
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}
      />
      <Results
        state={state}
        errors={errors}
        accuracyPercentage={calculateCorrectAccuracy(totalTyped, errors)}
        total={totalTyped}
        className={`mt-10`}
      />
    </>
  )
}

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative text-3xl max-w-xl leading-relaxed break-all'>
      {children}
    </div>
  )
}

const GenerateWords = ({ words }: { words: string }) => {
  return <div className='text-slate-500'>{words}</div>
}

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return (
    <h2 className='dark:text-primary-400 text-green-500 font-medium mb-3'>
      Time: {timeLeft}
    </h2>
  )
}

export default App
