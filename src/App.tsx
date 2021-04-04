import React, { FunctionComponent } from 'react'
import { useObject } from 'services'

export interface Props {}
interface State {
  content: string
}

const App: FunctionComponent<Props> = () => {
  const [{ content }, setState] = useObject<State>({ content: '' })
  return <div className="container mx-auto">App</div>
}

export default App
