import { faker } from "@faker-js/faker"
import RestartButton from "./components/RestartButton"

const words = faker.word.words(10)

const App = () => {
  return (
    <>
      <CountdownTimer timeLeft={20} />
      <GenerateWords words={words} />
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={() => null}
      />
    </>
  )
}

const GenerateWords = ({ words }: { words: string }) => {
  return <div className='text-slate-500 text-4xl'>{words}</div>
}

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className='text-primary-400 font-medium mb-3'>Time: {timeLeft}</h2>
}

export default App
