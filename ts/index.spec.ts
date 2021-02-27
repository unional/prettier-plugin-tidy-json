import { format } from 'prettier'

describe('using inferred parser', () => {
  test('handles inferred parser (json)', () => {
    const a = format('{}', {
      filepath: 'test.json',
      plugins: ['.']
    })

    expect(a).toEqual(`{}
`)
  })
})

// TODO: figure out difference between json and json-stringify parser
describe('using explicit json-stringify parser', () => {

  test('empty', () => {
    const a = format('{}', {
      filepath: 'test.json',
      parser: 'json-stringify',
      plugins: ['.']
    })

    expect(a).toEqual(`{}
`)
  })
})
