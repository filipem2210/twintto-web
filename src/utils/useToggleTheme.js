import { useContext } from 'react'
import { ThemeContext } from '../contexts/toggleTheme'

export default function useToggleTheme() {
  const context = useContext(ThemeContext)

  return context
}
