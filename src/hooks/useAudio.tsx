import { useContext } from 'react'
import { AudioContext } from '../context/Audio'

export const useAudioContext = () => {
  console.log('estoy dfuera del usEaUDIContext')
  const context = useContext(AudioContext)
  console.log('estoy dentro del usEaUDIContext')
  console.log(AudioContext)
  if (!context) {
    throw new Error('useAudioContext must be used within a AudioProvider')
  }
  return context
}
