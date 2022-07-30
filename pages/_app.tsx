import "src/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { axios } from "src/lib/axios.config";
import { store } from "src/state";
import { SWRConfig } from "swr";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <SWRConfig
        value={{
          fetcher: (url) => axios.get(url).then((res) => res.data),
          suspense: true,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </MantineProvider>
  </Provider>
);

export default MyApp;
