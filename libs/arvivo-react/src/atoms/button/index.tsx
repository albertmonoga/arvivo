import classNames from 'classnames';
import './style.css';

interface ButtonProps {
  children?: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  isOutline?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const Button = ({
  children,
  type,
  onClick,
  isOutline,
  disabled,
  style,
}: ButtonProps) => {
  return (
    <button
      className={classNames('button', {
        [`type-${type}`]: type,
        isOutline: isOutline,
      })}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};
