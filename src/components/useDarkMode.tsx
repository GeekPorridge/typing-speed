import { useEffect, useState } from "react"

// 用于检查用户设备是否偏好暗色主题
const matchDark = "(prefers-color-scheme:dark)"

const useDarkMode = () => {
  const [isDark, setIsDark] = useState<boolean>(
    () => window.matchMedia && window.matchMedia(matchDark).matches
  )

  useEffect(() => {
    const media = window.matchMedia(matchDark)
    const handler = () => setIsDark(media.matches)
    media.addEventListener("change", handler)
    return () => media.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  return {
    isDark,
    setIsDark,
  }
}

export default useDarkMode
