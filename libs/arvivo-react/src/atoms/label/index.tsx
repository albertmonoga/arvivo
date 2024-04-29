import classNames from 'classnames'

interface LabelProps{
    size?: 'small' | 'medium';
    children?: string;
}
export const Label = ({size, children}:LabelProps)=> {
    return(
        <label className={classNames('label',{[`size-${size}`]:size})}>{children}</label>
    )
}