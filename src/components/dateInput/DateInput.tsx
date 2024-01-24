import React from 'react'
import styles from './DateInput.module.css'

type DateInput = React.ComponentProps<'input'> & {
  id: string;
  label: string
}

const DateInput = ({
  label,
  id,
  ...props
}: DateInput ) => {

  return (
    <div className={styles.data}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input
        className={styles.input}
        type="date"
        id={id}
        name={id}
        {...props}
      />
    </div>
  )
}

export default DateInput