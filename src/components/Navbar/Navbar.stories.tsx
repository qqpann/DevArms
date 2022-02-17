import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Navbar } from './Navbar'

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: Navbar,
} as ComponentMeta<typeof Navbar>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
  title: 'storybook',
}
