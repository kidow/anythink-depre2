import { ReEditor, ReToolbar } from 'components'
import React, { FunctionComponent, useEffect } from 'react'
import { useObject } from 'services'

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
      {/* <ReToolbar /> */}
      <ReEditor value={content} onChange={(content) => setState({ content })} />
    </div>
  )
}

export default App
