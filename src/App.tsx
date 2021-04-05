import { ReEditor, ReToolbar } from 'components'
import React, { FunctionComponent, useEffect } from 'react'
import { useObject } from 'services'
import ReactTooltip from 'react-tooltip'

export interface Props {}
interface State {
  content: string
}

const App: FunctionComponent<Props> = () => {
  const [{ content }, setState] = useObject<State>({
    content: window.localStorage.getItem('anythink') || ''
  })
  useEffect(() => {
    return () => {
      window.localStorage.setItem('anythink', content)
    }
  }, [])
  return (
    <div className="w-192 mx-4 md:mx-auto container">
      <ReToolbar />
      <ReEditor
        value={content}
        onChange={(content) => setState({ content })}
        onClear={() => setState({ content: '' })}
      />
      <ReactTooltip place="bottom" effect="solid" type="dark" />
    </div>
  )
}

export default App
