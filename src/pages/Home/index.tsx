import './Home.css'
import settings from '../../assets/icons/settings-icon.svg'
import CategoryBtn from '../../styledComponents/categoryBtn'
import Carrousel from '../../components/carrousel/Carrousel'
import { useState } from 'react'
import { type User, type Album, type Playlist, type Track } from '../../types/data'
import { Link } from 'react-router-dom'
import { PlaylistMiniCard } from '../../components/playlistMiniCard/PlaylistMiniCard'
import lofiPlaylist from '../../assets/playlists-img/lofi-playlist.png'
import kanyeAlbum from '../../assets/albums-img/graduation-kanye-cover.jpg'
import canserbero from '../../assets/albums-img/jeremias17-5.jpg'
import cookingPlaylist from '../../assets/playlists-img/relaxing-cooking-mix.png'
import readingFlow from '../../assets/playlists-img/reading-flow.png'
import { useQueryClient } from "@tanstack/react-query";


export const Home = ({ user }: { user: User }) => {
  const [isActive] = useState(true)
  const queryClient = useQueryClient()

  const trackArray: Track[] | undefined = queryClient.getQueryData(['tracks'])
  const playlistArray: Playlist[] | undefined = queryClient.getQueryData(['playlists'])
  const albumArray: Album[] | undefined = queryClient.getQueryData(['albums'])

  console.log('====>', trackArray)
  return (
    <>
      <main className="home-main-container">
        <section className="home-welcome-section">
          <h3 className="home-welcome-text">
            Welcome back,
            <span className="home-username"> {user.name}</span>
          </h3>
          <button className="home-settings-btn">
            <Link to="/config"><img src={settings} /></Link>
          </button>
        </section>
        <section>
          <CategoryBtn>Music</CategoryBtn>
          <CategoryBtn>Podcasts</CategoryBtn>
          <CategoryBtn>AudioBooks</CategoryBtn>
        </section>
        <section className="home-miniplaylist-display">
          <PlaylistMiniCard img={lofiPlaylist} title="LoFi Music" />
          <PlaylistMiniCard img={kanyeAlbum} title="Graduation" />
          <PlaylistMiniCard img={canserbero} title="Jeremias 17:5" />
          <PlaylistMiniCard img={cookingPlaylist} title="Relaxing Cooking Mix" />
          <PlaylistMiniCard img={readingFlow} title="Reading Flow" />
        </section>
        <section className="home-fav-songs">
          <h2>Latest songs uploaded</h2>
          <Carrousel
            dataTrack={trackArray}
            isActive={isActive}
          />
        </section>
        <section className="home-recently-played">
          <h2>Recently played</h2>
          <Carrousel dataPlaylist={playlistArray} />
        </section>
        <section className="home-jump-back-in">
          <h2>Jump back in</h2>
          <Carrousel dataAlbum={albumArray} />
        </section>
        <div className="home-bottom-space"></div>
      </main>
    </>
  )
}
