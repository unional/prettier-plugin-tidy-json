// import { doc } from 'prettier'
import { requireSafe } from './requireSafe'
const parser = (
  requireSafe('prettier/parser-babel') || requireSafe('prettier/parser-babylon')
).parsers['json-stringify']

console.log(`'${parser.astFormat}'`)
export const parsers = {
  'json': {
    ...parser,
    // preprocess(text: string, _options: any) {
    //   return text
    // }
    parse(text: string, parsers: any, options: any) {
      const result = parser.parse(text, parsers, options)
      // console.info(text, result)
      return result
    }
  },
  'json-stringify': {
    ...parser,
    // preprocess(text: string, _options: any) {
    //   return text
    // }
    parse(text: string, parsers: any, options: any) {
      const result = parser.parse(text, parsers, options)
      console.info(text, result)
      return result
    }
  },
}

// TODO: figure out why printers are not being called
export const printers = {
  "estree-json": {
    print(_path: any, _options: any, _print: (path: any) => any) {
      console.log('print called')
      // const node = path.getValue()
      // console.log(path, node)
      return ''
    },
    embed() {
      console.log('embed called')
    }
  }
}
