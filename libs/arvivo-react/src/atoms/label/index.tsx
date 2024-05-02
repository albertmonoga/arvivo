import classNames from 'classnames'
import './style.css'

interface LabelProps {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  isBold?: boolean
  isUpperCase?: boolean
  style?: React.CSSProperties
  children?: string
}
export const Label = ({
  size = 'base',
  children,
  isBold,
  isUpperCase,
  style,
}: LabelProps) => {
  return (
    <label
      className={classNames({
        [`size-${size}`]: size,
        isUpperCase: isUpperCase,
        isBold: isBold,
      })}
      style={style}
    >
      {children}
    </label>
  )
}
