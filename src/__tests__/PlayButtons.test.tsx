import { BrowserRouter } from "react-router-dom";
import { PlayButtons } from "../pages/SongPage/components/playButtons";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { vi } from 'vitest'


describe("testing PlayButtons component", () => {

  test('should mute when i click on volume icon & isMuted turns to true', async() => {
    const toggleMute = vi.fn()
    let isMuted = false
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

    await waitFor(()=> {
      expect(toggleMute).toHaveBeenCalledTimes(3);
      isMuted = !isMuted
      expect(isMuted).toBe(true)
    })
  });

  test('should go to previous song when i clicked on previous track icon', () => {
    const handlePreviousTrack = vi.fn()
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
    expect(handlePreviousTrack).toHaveBeenCalled()
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
    expect(handleNextTrack).toHaveBeenCalled()
    
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
    expect(togglePlay).toHaveBeenCalled()
    
  });

});
