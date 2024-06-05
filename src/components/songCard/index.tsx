import { type Track } from '../../types/data'
import './SongCard.css'
import { useAudioContext } from '../../hooks/useAudio'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { TracksService } from '../../services/TracksService'


interface Props {
  track: Track
  isActive?: boolean
}

const SongCard = ({ track }: Props) => {
  const { setAudioUrl, setAudioImg, trackId, setTrackId, setIsPlaying, getSongDuration, audioRef, setSongDuration } = useAudioContext()
console.log('--songcard', track)

useEffect(() => {
  console.log('track id actualizado')
}, [trackId] ) 

  const getTrack = async (trackId: string | undefined) => {
    if (trackId) {
      const song = await TracksService.getTrack(trackId)
      getSongDuration(audioRef, setSongDuration)
      setAudioUrl(song.url)
      setAudioImg(song.thumbnail)
      localStorage.setItem('localTrack', JSON.stringify(track))
      setTimeout(() => {
        setTrackId(0)
        void queryTrack.refetch()
      }, 90)
      return song
    } else {
      const song = JSON.parse(localStorage.getItem('localTrack') || '{}')
      setAudioUrl(song.url)
      setAudioImg(song.thumbnail)
      return song
    }
  }
  console.log('wth is dis?---',trackId)
  const queryTrack = useQuery({
    queryKey: ['track'],
    queryFn: async () => await getTrack(trackId)
  })

  useEffect(() => {
    const track = JSON.parse(localStorage.getItem('localTrack') || '{}')
    setTrackId !== undefined && setTrackId(track.id)
  }, [])

  return (
    <div className="songcard-container" onClick={() => {
      setTrackId !== undefined && setTrackId(track.id)
      setIsPlaying !== undefined && setIsPlaying(false)
      setTimeout(() => {
        void queryTrack.refetch()
      }, 90)
    }}>
      <img className="songcard-img" src={track.thumbnail} />
      <div className="songcard-track-info">
        <h3>{track.name}</h3>
        <p>{track.artist}</p>
      </div>
    </div>
  )
}

export default SongCard
