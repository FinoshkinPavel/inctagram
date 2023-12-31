import type { StoryObj } from '@storybook/react'

import EmailConfirmed from '@/src/pages/auth/email-confirmed/index'

const meta = {
  title: 'pages/emailConfirmed',
  component: EmailConfirmed,
}

export default meta
type Story = StoryObj<typeof EmailConfirmed>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}
