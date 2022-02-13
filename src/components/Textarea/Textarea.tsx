import { Textarea, TextareaProps } from '@chakra-ui/react'
import React, { SyntheticEvent } from 'react'

type Props = TextareaProps & {
  value: string
  set?: (txt: string) => void
}
export const ArmsTextarea = ({ value, set, ...rest }: Props) => {
  const onChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLTextAreaElement
    if (set) set(target.value)
  }
  return <Textarea {...rest} value={value} onChange={onChange} />
}
