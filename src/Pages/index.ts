import { Base64Converter } from './Base64'
import { HashGenerator } from './Hash'
import { HtmlEncDec } from './HtmlEncDec'
import { JsonYaml } from './JsonYaml'
import { Jwt } from './Jwt'
import { NumberBase } from './NumberBase'
import { UrlEncDec } from './UrlEncDec'

export type ToolPage = {
  name: string
  path: string
  Component: () => JSX.Element
}
export const toolPages: ToolPage[] = [
  { name: 'Hash', path: '/hash', Component: HashGenerator },
  { name: 'Base64', path: '/base64', Component: Base64Converter },
  { name: 'JSON<>YAML', path: '/json-yaml', Component: JsonYaml },
  { name: 'Number base', path: '/number-base', Component: NumberBase },
  { name: 'URL Encoder/Decoder', path: '/url-enc-dec', Component: UrlEncDec },
  {
    name: 'HTML Encoder/Decoder',
    path: '/html-enc-dec',
    Component: HtmlEncDec,
  },
  { name: 'JWT', path: '/jwt', Component: Jwt },
]
