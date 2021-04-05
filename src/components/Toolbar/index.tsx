import React, { FunctionComponent, useEffect } from 'react'
import { VscClearAll } from 'react-icons/vsc'
import { IoHelp } from 'react-icons/io5'
import { FaDivide } from 'react-icons/fa'

export interface Props {}

const ReToolbar: FunctionComponent<Props> = () => {
  return (
    <div id="toolbar" className="fixed w-192 top-0 z-10 bg-white">
      <div className="ql-formats">
        <button className="ql-header" value="1" data-tip="제목 1" />
        <button className="ql-header" value="2" data-tip="제목 2" />
      </div>
      <div className="ql-formats">
        <button className="ql-bold" data-tip="굵게 (Ctrl + B)" />
        <button className="ql-italic" data-tip="기울임꼴 (Ctrl + I)" />
        <button className="ql-underline" data-tip="밑줄 (Ctrl + U)" />
        <button className="ql-strike" data-tip="줄긋기" />
        <button className="ql-clean" data-tip="글자 효과 없애기" />
      </div>
      <div className="ql-formats">
        <select className="ql-color" />
      </div>
      <div className="ql-formats">
        <button className="ql-list" value="ordered" data-tip="번호 매기기" />
        <button className="ql-list" value="bullet" data-tip="글머리 기호" />
        <button className="ql-indent" value="-1" data-tip="내어쓰기" />
        <button className="ql-indent" value="+1" data-tip="들여쓰기" />
      </div>
      <div className="ql-formats">
        <button className="ql-link" data-tip="링크 (Ctrl + K)" />
        <button className="ql-image" data-tip="이미지" />
        <button className="ql-video" data-tip="동영상" />
      </div>
      <div className="ql-formats">
        <button className="ql-blockquote" data-tip="인용구" />
        <button className="ql-code-block" data-tip="코드 블럭" />
        <button className="ql-divider" data-tip="구분선 추가">
          <FaDivide className="w-full" />
        </button>
      </div>
      <div className="ql-formats">
        <button className="ql-clear" data-tip="정리">
          <VscClearAll className="w-full" />
        </button>
        <button className="ql-help" data-tip="도움말">
          <IoHelp className="w-full" />
        </button>
      </div>
    </div>
  )
}

export default ReToolbar
