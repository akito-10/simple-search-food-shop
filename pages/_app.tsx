import "src/styles/globals.css";

import type { AppProps } from "next/app";
import { axios } from "src/lib/axios.config";
import { SWRConfig } from "swr";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SWRConfig
    value={{
      fetcher: (url) => axios.get(url).then((res) => res.data),
    }}
  >
    <Component {...pageProps} />
  </SWRConfig>
);

export default MyApp;
