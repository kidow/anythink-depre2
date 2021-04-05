import React, { FunctionComponent, useEffect, useMemo, useRef } from 'react'
import ReactQuill, { Quill } from 'react-quill'
import { Delta, Sources, RangeStatic } from 'quill'

let BlockEmbed = Quill.import('blots/block/embed')

class DividerBlot extends BlockEmbed {}
DividerBlot.blotName = 'divider'
DividerBlot.tagName = 'hr'

Quill.register(DividerBlot)

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
  const ref = useRef<ReactQuill>(null)
  const modules = useMemo(
    () => ({
      toolbar: {
        container: '#toolbar',
        handlers: {
          divider: (value: any) => {
            console.log(value)
            if (!ref.current) return
            const quill = ref.current.getEditor()
            const range = quill.getSelection(true)
            quill.insertText(range.index, '\n')
            quill.insertEmbed(range.index + 1, 'divider', true)
            quill.setSelection(range.index + 2, range.length)
          }
        }
      },
      keyboard: {
        bindings: {
          header1: {
            key: '1',
            ctrlKey: true,
            handler: function (range: RangeStatic, context: any) {
              if (!ref.current) return
              const quill = ref.current.getEditor()
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
              if (!ref.current) return
              const quill = ref.current.getEditor()
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
              if (!ref.current) return
              const quill = ref.current.getEditor()
              const format = quill.getFormat(range)
              quill.format('strike', !format.strike)
            }
          },
          clear: {
            key: 220,
            ctrlKey: true,
            handler: function (range: RangeStatic, context: any) {
              if (!ref.current) return
              const quill = ref.current.getEditor()
              quill.removeFormat(range.index, range.length)
            }
          },
          divider: {
            key: 13,
            ctrlKey: true,
            handler: function (range: RangeStatic, context: any) {
              if (!ref.current) return
              const quill = ref.current.getEditor()
              quill.insertText(range.index, '\n')
              quill.insertEmbed(range.index + 1, 'divider', true)
              quill.setSelection(range.index + 2, range.length)
            }
          },
          ordered: {
            key: '7',
            ctrlKey: true,
            shiftKey: true,
            handler: function (range: RangeStatic, context: any) {
              if (!ref.current) return
              const quill = ref.current.getEditor()
              const format = quill.getFormat(range)
              quill.format(
                'list',
                format.list
                  ? format.list === 'bullet'
                    ? 'ordered'
                    : false
                  : 'ordered'
              )
            }
          },
          bullet: {
            key: '8',
            ctrlKey: true,
            shiftKey: true,
            handler: function (range: RangeStatic, context: any) {
              if (!ref.current) return
              const quill = ref.current.getEditor()
              const format = quill.getFormat(range)
              quill.format(
                'list',
                format.list
                  ? format.list === 'ordered'
                    ? 'bullet'
                    : false
                  : 'bullet'
              )
            }
          },
          indent: {
            key: 219,
            ctrlKey: true,
            handler: function (range: RangeStatic, context: any) {
              if (!ref.current) return
              const quill = ref.current.getEditor()
              const format = quill.getFormat(range)
              quill.format('indent', format.indent ? format.indent + 1 : 1)
            }
          },
          outdent: {
            key: 221,
            ctrlKey: true,
            handler: function (range: RangeStatic, context: any) {
              if (!ref.current) return
              const quill = ref.current.getEditor()
              const format = quill.getFormat(range)
              quill.format('indent', format.indent ? format.indent - 1 : false)
            }
          }
        }
      },
      clipboard: {
        matchVisual: false
      }
    }),
    []
  )
  useEffect(() => {
    if (!ref.current) return
    ref.current.focus()
    ref.current.getEditor().root.setAttribute('spellCheck', 'false')
  }, [])
  return (
    <ReactQuill
      ref={ref}
      value={value}
      onChange={onChange}
      placeholder="지금 떠오르는 생각은?"
      modules={modules}
    />
  )
}

export default ReEditor
