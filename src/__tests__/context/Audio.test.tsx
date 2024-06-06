import { useContext } from "react";
import { AudioProvider, AudioContext } from "../../context/Audio";
import { render, renderHook } from "@testing-library/react";

describe("Tests in Audio Context", () => {
  test('renders children without crashing', () => {
    const { getByText } = render(
      <AudioProvider>
        <div>Test Children</div>
      </AudioProvider>
    );
    expect(getByText('Test Children')).toBeDefined();
  });

  test('provides the correct context values', () => {
    const { result } = renderHook(() => useContext(AudioContext));
    const contextValues = result.current;
    expect(contextValues).toBeDefined()
  });

})


  