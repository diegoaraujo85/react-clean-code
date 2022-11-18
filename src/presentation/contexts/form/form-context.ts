import { createContext } from 'react'

type LoginStateProps = {
  isLoading: boolean
}

type ErrorProps = {
  email: string
  password: string
  main: string
}

interface ContextProps {
  state: LoginStateProps
  errorState: ErrorProps
}

export default createContext<ContextProps>(null)
