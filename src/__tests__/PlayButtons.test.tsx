import { BrowserRouter } from "react-router-dom";
import { PlayButtons } from "../pages/SongPage/components/playButtons";
import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from 'vitest'

describe("testing PlayButtons component", () => {

  test('should mute when i click on volume icon', () => {
    const toggleMute = vi.fn()
    const isMuted = false
    render(
      <BrowserRouter>
      <PlayButtons
        togglePlay={() => {}}
        isPlaying={true}
        toggleMute={toggleMute}
        isMuted={false}
        track={{
          id: 1,
          name: "Hola",
          artist: "john doe",
          url: "jjjj",
          thumbnail: "",
          genre: "Pop",
          liked: true,
        }}
        handleNextTrack={() => {}}
        handlePreviousTrack={() => {}}
      />
      </BrowserRouter>
    );
    const iconoVolumen = screen.getByTestId('volume-mute-icon');
    fireEvent.click(iconoVolumen);
    fireEvent.click(iconoVolumen);
    fireEvent.click(iconoVolumen);

    expect(toggleMute).toBeCalledTimes(3);
    // expect(isMuted).toBeFalsy()
  });

  test('should go to previous song when i clicked on previous track icon', () => {
    const handlePreviousTrack = vi.fn()
    const isMuted=false
    render(
      <BrowserRouter>
      <PlayButtons
        togglePlay={() => {}}
        isPlaying={true}
        toggleMute={() => {}}
        isMuted={false}
        track={{
          id: 1,
          name: "Hola",
          artist: "john doe",
          url: "jjjj",
          thumbnail: "",
          genre: "Pop",
          liked: true,
        }}
        handleNextTrack={() => {}}
        handlePreviousTrack={handlePreviousTrack}
      />
      </BrowserRouter>
    );
    const iconPrevious = screen.getByTestId('previous-track-icon');
    fireEvent.click(iconPrevious);
    expect(handlePreviousTrack).toBeCalled()
    
  });

  test('should go to next song when i clicked on next track icon', () => {
    const handleNextTrack = vi.fn()
    render(
      <BrowserRouter>
      <PlayButtons
        togglePlay={() => {}}
        isPlaying={true}
        toggleMute={() => {}}
        isMuted={false}
        track={{
          id: 1,
          name: "Hola",
          artist: "john doe",
          url: "jjjj",
          thumbnail: "",
          genre: "Pop",
          liked: true,
        }}
        handleNextTrack={handleNextTrack}
        handlePreviousTrack={() => {}}
      />
      </BrowserRouter>
    );
    const iconPrevious = screen.getByTestId('next-track-icon');
    fireEvent.click(iconPrevious);
    expect(handleNextTrack).toBeCalled()
    
  });

  test('should play song when i click on play track icon', () => {
    const togglePlay = vi.fn()
    render(
      <BrowserRouter>
      <PlayButtons
        togglePlay={togglePlay}
        isPlaying={true}
        toggleMute={() => {}}
        isMuted={false}
        track={{
          id: 1,
          name: "Hola",
          artist: "john doe",
          url: "jjjj",
          thumbnail: "",
          genre: "Pop",
          liked: true,
        }}
        handleNextTrack={() => {}}
        handlePreviousTrack={() => {}}
      />
      </BrowserRouter>
    );
    const iconPlay = screen.getByTestId('play-track-icon');
    fireEvent.click(iconPlay);
    expect(togglePlay).toBeCalled()
    
  });

  // test('should mark as fav song when i click on fav track icon', () => {
  //   const handleHeartClick = vi.fn()
  //   render(
  //     <BrowserRouter>
  //     <PlayButtons
  //       togglePlay={() => {}}
  //       isPlaying={true}
  //       toggleMute={() => {}}
  //       isMuted={false}
  //       track={{
  //         id: 1,
  //         name: "Hola",
  //         artist: "john doe",
  //         url: "jjjj",
  //         thumbnail: "",
  //         genre: "Pop",
  //         liked: true,
  //       }}
  //       handleNextTrack={() => {}}
  //       handlePreviousTrack={() => {}}
  //     />
  //     </BrowserRouter>
  //   );
  //   const iconFav = screen.getByTestId('fav-track-icon');
  //   fireEvent.click(iconFav);
    // expect(handleHeartClick).toBeCalled()
    
  // });
});
