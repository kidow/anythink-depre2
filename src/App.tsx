import { ReEditor, ReToolbar } from 'components'
import React, { FunctionComponent, useEffect } from 'react'
import ReactTooltip from 'react-tooltip'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { contentState } from 'store'

export interface Props {}
interface State {}

const App: FunctionComponent<Props> = () => {
  const content = useRecoilValue(contentState)
  const setContent = useSetRecoilState(contentState)
  useEffect(() => {
    setContent(window.localStorage.getItem('anythink') || '')
    return () => {
      window.localStorage.setItem('anythink', content)
    }
  }, [])
  return (
    <div className="w-192 mx-4 md:mx-auto container">
      <ReToolbar />
      <ReEditor value={content} onChange={(content) => setContent(content)} />
      <ReactTooltip place="bottom" effect="solid" type="dark" />
    </div>
  )
}

export default App
