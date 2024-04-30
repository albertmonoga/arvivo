import classNames from 'classnames';
import './style.css';

interface AvatarProps {
    size: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
    src: string;
    alt?: string;
}

export const Avatar = ({ src, size = 'base', alt }: AvatarProps) => {
    return (
        <img
            src={src}
            alt={alt}
            className={classNames('avatar', {
                [`avatar-${size}`]: size,
            })}
        />
    );
};


