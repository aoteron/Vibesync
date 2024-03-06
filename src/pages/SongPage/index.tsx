import { SongDetails } from './components/songDetails'
import './songPage.css'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getTrack as fetchTrack } from '../../services/dataService'
import { useAudioContext } from '../../hooks/useAudio'

const getTrack = async (trackId: string, setAudioUrl: any) => {
  console.log(trackId)
  if (trackId) {
    const track = await fetchTrack(parseInt(trackId))
    console.log('track', track.url)
    setAudioUrl(track.url)
    return track
  }
}

export const SongPage = () => {
  const { setAudioUrl } = useAudioContext()

  const { trackId } = useParams()

  if (!trackId) return null

  const queryTrack = useQuery({
    queryKey: ['track'],
    queryFn: async () => await getTrack(trackId, setAudioUrl)
  })
  console.log('queryTrack', queryTrack.data?.url)

  return (
      <>
        <SongDetails song={queryTrack.data ? queryTrack.data : {}} />
      </>
  )
}
