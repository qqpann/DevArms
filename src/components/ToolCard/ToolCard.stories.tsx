import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { SiJsonwebtokens } from 'react-icons/si'
import { ToolPage } from 'src/Pages'

import { ToolCard } from './ToolCard'

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: ToolCard,
} as ComponentMeta<typeof ToolCard>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ToolCard> = (args) => (
  <ToolCard {...args} />
)

export const FirstStory = Template.bind({})

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
  page: { name: 'Test', Icon: SiJsonwebtokens } as ToolPage,
}
