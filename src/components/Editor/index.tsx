import React, { FunctionComponent, useEffect } from 'react'
import Quill, { Delta, Sources, RangeStatic } from 'quill'
import QuillBetterTable from 'quill-better-table'
import 'quill-better-table/dist/quill-better-table.css'

let BlockEmbed = Quill.import('blots/block/embed')

class DividerBlot extends BlockEmbed {}
DividerBlot.blotName = 'divider'
DividerBlot.tagName = 'hr'

Quill.register(DividerBlot)
Quill.register({ 'modules/better-table': QuillBetterTable }, true)

export interface Props {
  value: string
  onChange: (
    content: string,
    delta: Delta,
    source: Sources,
    editor: any
  ) => void
}
interface State {}

const ReEditor: FunctionComponent<Props> = ({ value, onChange }) => {
  useEffect(() => {
    const quill = new Quill('#editor', {
      theme: 'snow',
      modules: {
        toolbar: {
          container: '#toolbar',
          handlers: {
            divider: () => {
              const range = quill.getSelection(true)
              quill.insertText(range.index, '\n')
              quill.insertEmbed(range.index + 1, 'divider', true)
              quill.setSelection(range.index + 2, range.length)
            },
            table: () => {
              const table = quill.getModule('better-table')
              table.insertTable(10, 10)
            }
          }
        },
        keyboard: {
          bindings: {
            header1: {
              key: '1',
              ctrlKey: true,
              handler: function (range: RangeStatic, context: any) {
                const format = quill.getFormat(range)
                quill.format(
                  'header',
                  format.header ? (format.header === 2 ? 1 : false) : 1
                )
              }
            },
            header2: {
              key: '2',
              ctrlKey: true,
              handler: function (range: RangeStatic, context: any) {
                const format = quill.getFormat(range)
                quill.format(
                  'header',
                  format.header ? (format.header === 1 ? 2 : false) : 2
                )
              }
            },
            strike: {
              key: 'S',
              ctrlKey: true,
              shiftKey: true,
              handler: function (range: RangeStatic, context: any) {
                const format = quill.getFormat(range)
                quill.format('strike', !format.strike)
              }
            },
            clear: {
              key: 220,
              ctrlKey: true,
              handler: function (range: RangeStatic, context: any) {
                quill.removeFormat(range.index, range.length)
              }
            },
            divider: {
              key: 13,
              ctrlKey: true,
              shiftKey: true,
              handler: function (range: RangeStatic, context: any) {
                quill.insertText(range.index, '\n')
                quill.insertEmbed(range.index + 1, 'divider', true)
                quill.setSelection(range.index + 2, range.length)
              }
            },
            outdent: {
              key: 219,
              ctrlKey: true,
              handler: function (range: RangeStatic, context: any) {
                const format = quill.getFormat(range)
                console.log(format)
                quill.format(
                  'indent',
                  format.indent ? format.indent - 1 : false
                )
              }
            }
          }
        },
        clipboard: {
          matchVisual: false
        },
        table: false,
        'better-table': true
      },
      placeholder: '지금 떠오르는 생각은?'
    })
    quill.focus()
    quill.root.setAttribute('spellCheck', 'false')
    // quill.setContents(JSON.parse(window.localStorage.getItem('anythink') || ''))
    // return () => {
    //   const delta = quill.getContents()
    //   window.localStorage.setItem('anythink', JSON.stringify(delta))
    // }
    window.addEventListener('keypress', (e) => {
      const range = quill.getSelection(true)
      const format = quill.getFormat(range)
      if (e.key === '' && e.ctrlKey) {
        quill.format('indent', format.indent ? format.indent + 1 : 1)
      }
      if (e.key === '' && e.ctrlKey) {
        quill.format(
          'list',
          format.list
            ? format.list === 'bullet'
              ? 'ordered'
              : false
            : 'ordered'
        )
      }
      if (e.key === '' && e.ctrlKey) {
        quill.format(
          'list',
          format.list
            ? format.list === 'ordered'
              ? 'bullet'
              : false
            : 'bullet'
        )
      }
    })
  }, [])
  return <div id="editor" />
}

export default ReEditor
