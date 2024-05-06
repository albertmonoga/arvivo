import { Input } from '../atoms/input'

export default {
  title: 'Molecules/Input',
  component: Input,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    placeholder: 'Default Input',
    type: 'text',
    style: {},
  },
}

export const Password = {
  args: {
    placeholder: 'Password Input',
    type: 'password',
    style: {},
  },
}

export const Email = {
  args: {
    placeholder: 'Email Input',
    type: 'email',
    style: {},
  },
}

export const Number = {
  args: {
    placeholder: 'Number Input',
    type: 'number',
    style: {},
  },
}
