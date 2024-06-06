import { QueryClientProvider } from "@tanstack/react-query";
import { AudioProvider } from "../context/Audio";
import { LikedTracksProvider } from "../context/LikedSongs";
import { SearchProvider } from "../context/Search";

const BuildProviderTree = (providers:any) => {
    if (providers.length === 1) {
      return providers[0];
    }
    const A = providers.shift();
    const B = providers.shift();
    return BuildProviderTree([
      ({ children}) => (
        <A>
          <B>
            {children}
          </B>
        </A>
      ),
      ...providers,
    ]);
  };

  export const Providers = BuildProviderTree([
    LikedTracksProvider,
    AudioProvider,
    QueryClientProvider,
    SearchProvider,
  ]);