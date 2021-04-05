import React, { FunctionComponent, useEffect, useMemo, useRef } from 'react'
import ReactQuill, { Quill } from 'react-quill'
import { Delta, Sources } from 'quill'

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
        container: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' }
          ],
          ['link', 'image', 'video'],
          ['blockquote', 'code-block']
        ]
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
