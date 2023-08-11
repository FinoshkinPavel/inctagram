import type { StoryObj } from '@storybook/react'

import { InvalidLinkVerification } from '@/src/pages/invalid-link-verefication/invalidLinkVerification'

const meta = {
  title: 'pages/InvalidLinkVerification',
  component: InvalidLinkVerification,
}

export default meta
type Story = StoryObj<typeof InvalidLinkVerification>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}
