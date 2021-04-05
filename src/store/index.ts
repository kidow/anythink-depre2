import { atom } from 'recoil'

export const contentState = atom({
  key: 'contentState',
  default: ''
})

export const helpState = atom({
  key: 'helpState',
  default: false
})
