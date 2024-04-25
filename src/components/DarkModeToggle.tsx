import useDarkMode from "./useDarkMode"
import { MdDarkMode } from "react-icons/md"
import { CiLight } from "react-icons/ci"

const DarkModeToggle = () => {
  const { isDark, setIsDark } = useDarkMode()

  return (
    <button
      className='absolute top-4 right-4 dark:text-slate-400'
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? <MdDarkMode /> : <CiLight />}
    </button>
  )
}

export default DarkModeToggle
