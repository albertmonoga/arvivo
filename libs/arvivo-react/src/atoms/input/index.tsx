import './style.css'

interface InputProps {
  type: 'text' | 'password' | 'email' | 'number'
  style?: React.CSSProperties
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  type,
  style,
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      type={type}
      style={style}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}
