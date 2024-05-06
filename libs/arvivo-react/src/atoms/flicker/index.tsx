import './styles.css';

export interface FlickerProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export const Flicker = ({ children, onClick }: FlickerProps) => {

    return (
        <div
            className='flicker'
            onClick={onClick}
        >
            {children}
        </div>
    )
}