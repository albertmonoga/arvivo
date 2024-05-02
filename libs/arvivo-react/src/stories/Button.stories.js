import { Button } from '../atoms/button';

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
};

export const Primary = {
    args: {
      type: 'primary',
      children: 'Este es mi primary',
    },
  };
  
export const Secondary = {
    args: {
      type: 'secondary',
      children: 'Este es mi Secondary',
    },
  };
  
export const Tertiary = {
      args:{
          type: 'tertiary',
          children: 'Este es mi tertiary',
      }
  }