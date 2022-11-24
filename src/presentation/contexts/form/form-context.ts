import { createContext } from 'react'

type LoginStateProps = {
  isLoading: boolean
  email: string
  password: string
  emailError: string
  passwordError: string
  mainError: string
}

// type ErrorProps = {
// }

interface ContextProps {
  state: LoginStateProps
  // errorState: ErrorProps
  setState: React.Dispatch<React.SetStateAction<LoginStateProps>>
}

export default createContext<ContextProps>(null)
