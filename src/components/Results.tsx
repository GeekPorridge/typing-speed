import { motion } from "framer-motion"
import { formatPercentage } from "src/utils/helpers"

interface ResultsType {
  state: string
  errors: number
  accuracyPercentage: number
  total: number
  className?: string
}

const Results = ({
  state,
  errors,
  accuracyPercentage,
  total,
  className,
}: ResultsType) => {
  const initial = { opacity: 0 }
  const animate = { opacity: 1 }
  const duration = { duration: 0.3 }

  if (state !== "finish") return null

  return (
    <motion.ul
      className={`${className} flex flex-col items-center dark:text-primary-400 text-green-500 space-y-3`}
    >
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0 }}
      >
        Results
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.1 }}
      >
        Accuracy: {formatPercentage(accuracyPercentage)}
      </motion.li>
      <motion.li
        className='text-red-500'
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.2 }}
      >
        Errors: {errors}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.3 }}
      >
        Typed: {total}
      </motion.li>
    </motion.ul>
  )
}

export default Results
