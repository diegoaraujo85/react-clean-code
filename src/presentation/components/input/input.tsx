import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { errorState } = useContext(Context)

  const error = errorState[props.name] // eslint-disable-line react/prop-types

  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <div className={Styles.inputWrap}>
      <input
        {...props}
        autoComplete="off"
      />
      <span
        // eslint-disable-next-line react/prop-types
        data-testid={`${props.name}-status`}
        title={getTitle()}
        className={Styles.status}
      >{getStatus()}</span>
    </div>
  )
}

export default Input
