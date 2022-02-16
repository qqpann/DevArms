import { IconType } from 'react-icons'
import { AiOutlineFileUnknown } from 'react-icons/ai'
import { FaHashtag, FaHtml5, FaIndent, FaPercent } from 'react-icons/fa'
import { HiOutlineIdentification } from 'react-icons/hi'
import { MdPassword } from 'react-icons/md'
import { RiBracesFill } from 'react-icons/ri'
import { SiJsonwebtokens } from 'react-icons/si'
import { TiSortAlphabetically, TiSortNumerically } from 'react-icons/ti'
import { VscSymbolKeyword } from 'react-icons/vsc'

import { Base64Converter } from './Base64'
import { Checksum } from './Checksum'
import { FormatJson } from './FormatJson'
import { HashGenerator } from './Hash'
import { HtmlEncDec } from './HtmlEncDec'
import { JsonYaml } from './JsonYaml'
import { Jwt } from './Jwt'
import { LoremIpsum } from './LoremIpsum'
import { NumberBase } from './NumberBase'
import { TextCasePage } from './TextCase'
import { UrlEncDec } from './UrlEncDec'
import { Uuid } from './Uuid'

export type ToolPage = {
  name: string
  path: string
  Icon: IconType
  Component: () => JSX.Element
}
export const toolPages: ToolPage[] = [
  {
    name: 'Hash',
    path: '/hash',
    Icon: FaHashtag,
    Component: HashGenerator,
  },
  {
    name: 'Base64',
    path: '/base64',
    Icon: MdPassword,
    Component: Base64Converter,
  },
  {
    name: 'JSON<>YAML',
    path: '/json-yaml',
    Icon: RiBracesFill,
    Component: JsonYaml,
  },
  {
    name: 'Number base',
    path: '/number-base',
    Icon: TiSortNumerically,
    Component: NumberBase,
  },
  {
    name: 'URL Encoder/Decoder',
    path: '/url-enc-dec',
    Icon: FaPercent,
    Component: UrlEncDec,
  },
  {
    name: 'HTML Encoder/Decoder',
    path: '/html-enc-dec',
    Icon: FaHtml5,
    Component: HtmlEncDec,
  },
  { name: 'JWT', path: '/jwt', Icon: SiJsonwebtokens, Component: Jwt },
  {
    name: 'UUID',
    path: '/uuid',
    Icon: HiOutlineIdentification,
    Component: Uuid,
  },
  {
    name: 'Lorem Ipsum',
    path: '/lorem',
    Icon: VscSymbolKeyword,
    Component: LoremIpsum,
  },
  {
    name: 'Text Case Converter',
    path: '/case',
    Icon: TiSortAlphabetically,
    Component: TextCasePage,
  },
  {
    name: 'Checksum',
    path: '/checksum',
    Icon: AiOutlineFileUnknown,
    Component: Checksum,
  },
  {
    name: 'Format JSON',
    path: '/format-json',
    Icon: FaIndent,
    Component: FormatJson,
  },
]
