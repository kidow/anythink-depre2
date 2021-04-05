import React, { FunctionComponent } from 'react'
import { FaCopy } from 'react-icons/fa'
import { VscClearAll } from 'react-icons/vsc'

export interface Props {}

const ReToolbar: FunctionComponent<Props> = () => {
  return (
    <div id="toolbar" className="fixed w-192 top-0 z-10 bg-white">
      <div className="ql-formats">
        <button className="ql-header" value="1" />
        <button className="ql-header" value="2" />
      </div>
      <div className="ql-formats">
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
      </div>
      <div className="ql-formats">
        <select className="ql-color" />
      </div>
      <div className="ql-formats">
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        <button className="ql-indent" value="-1" />
        <button className="ql-indent" value="+1" />
      </div>
      <div className="ql-formats">
        <button className="ql-link" />
        <button className="ql-image" />
        <button className="ql-video" />
      </div>
      <div className="ql-formats">
        <button className="ql-blockquote" />
        <button className="ql-code-block" />
      </div>
      <div className="ql-formats">
        <button className="ql-copy">
          <FaCopy />
        </button>
        <button className="ql-clear">
          <VscClearAll className="w-full" />
        </button>
      </div>
    </div>
  )
}

export default ReToolbar
