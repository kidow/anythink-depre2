import React, { FunctionComponent } from 'react'
import 'react-quill/dist/quill.snow.css'

export interface Props {}

const ReToolbar: FunctionComponent<Props> = () => {
  return (
    <div id="toolbar" className="fixed w-192 top-0 z-10">
      <div className="ql-formats">
        <button className="ql-header" value="1" type="button" />
        <button className="ql-header" value="2" type="button" />
      </div>
      <div className="ql-formats">
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
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
    </div>
  )
}

export default ReToolbar
