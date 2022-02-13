import { Base64Converter } from './Base64'
import { HashGenerator } from './Hash'
import { JsonYaml } from './JsonYaml'

export type ToolPage = {
  name: string
  path: string
  Component: () => JSX.Element
}
export const toolPages: ToolPage[] = [
  { name: 'Hash', path: '/hash', Component: HashGenerator },
  { name: 'Base64', path: '/base64', Component: Base64Converter },
  { name: 'JSON<>YAML', path: '/json-yaml', Component: JsonYaml },
]
