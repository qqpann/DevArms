import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { DropZone } from './DropZone'

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  // title: 'Dropzone',
  component: DropZone,
} as ComponentMeta<typeof DropZone>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof DropZone> = (args) => (
  <DropZone {...args} />
)

export const FirstStory = Template.bind({})

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
  onFileAccepted: (file: File) => {
    console.log(file)
  },
}
