import { Avatar } from '../atoms/avatar';

export default {
  title: 'Molecules/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    src: 'https://via.placeholder.com/50',
    alt: 'Avatar',
    size: 'base',
    style: {},
  },
};

export const ExtraSmall = {
  args: {
    src: 'https://via.placeholder.com/30',
    alt: 'Avatar',
    size: 'xs',
    style: {},
  },
};

export const Small = {
  args: {
    src: 'https://via.placeholder.com/40',
    alt: 'Avatar',
    size: 'sm',
    style: {},
  },
};

export const Large = {
  args: {
    src: 'https://via.placeholder.com/60',
    alt: 'Avatar',
    size: 'lg',
    style: {},
  },
};

export const ExtraLarge = {
  args: {
    src: 'https://via.placeholder.com/70',
    alt: 'Avatar',
    size: 'xl',
    style: {},
  },
};
