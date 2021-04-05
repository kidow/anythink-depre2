import React, { FunctionComponent, useEffect, useMemo, useRef } from 'react'
import ReactQuill, { Quill } from 'react-quill'
import { Delta, Sources, RangeStatic } from 'quill'

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
        container: '#toolbar'
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
            key: 'E',
            ctrlKey: true,
            shiftKey: true,
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
              quill.removeFormat(range.index, range.length)
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
