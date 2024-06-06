import { MiniPlayer } from "../components/miniPlayer/MiniPlayer";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { AudioProvider } from "../context/Audio";
import { BrowserRouter } from "react-router-dom";

describe("Tests on Miniplayer", () => {
  test("Should render MiniPlayer component", () => {
    const result = render(
      <AudioProvider>
        <BrowserRouter>
          <MiniPlayer />
        </BrowserRouter>
      </AudioProvider>
    );
    expect(result).toMatchSnapshot();
  });

  test("Should show song duration", () => {
      render( <AudioProvider>
        <BrowserRouter>
          <MiniPlayer />
        </BrowserRouter>
      </AudioProvider>)
    const songDuration = screen.getByTestId('song-duration');

      expect(songDuration).toBeTypeOf("object")
  })
});
