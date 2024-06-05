import { createContext } from 'react'
import { useAudioReducer } from '../reducers/audio'

export const AudioContext = createContext({} as any)

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
  const {
    audioRef,
    isPlaying,
    isMuted,
    currentTime,
    songDuration,
    progressWidth,
    togglePlay,
    toggleMute,
    formatTime,
    handleProgressClick,
    setAudioUrl,
    audioUrl,
    audioImg,
    setAudioImg,
    trackId,
    setTrackId,
    setIsPlaying,
    getSongDuration,
    setCurrentTime,
    setSongDuration,
    handleNextTrack,
    handlePreviousTrack
  } = useAudioReducer()

  console.log('AudioProvider state:', {
    audioRef,
    isPlaying,
    isMuted,
    currentTime,
    songDuration,
    progressWidth,
    togglePlay,
    toggleMute,
    formatTime,
    handleProgressClick,
    audioUrl,
    audioImg,
    trackId,
    setIsPlaying,
    getSongDuration,
    setCurrentTime,
    setSongDuration,
    handleNextTrack,
    handlePreviousTrack
  });

  return (
        <AudioContext.Provider
        value={
            {
              audioRef,
              isPlaying,
              isMuted,
              currentTime,
              songDuration,
              progressWidth,
              togglePlay,
              toggleMute,
              formatTime,
              handleProgressClick,
              audioUrl,
              setAudioUrl,
              audioImg,
              setAudioImg,
              trackId,
              setTrackId,
              setIsPlaying,
              getSongDuration,
              setCurrentTime,
              setSongDuration,
              handleNextTrack,
              handlePreviousTrack
            }
        }>
            {children}
        </AudioContext.Provider>
  )
}
