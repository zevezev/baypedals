import { AppProps } from "next/app";
import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ConvexProvider, ConvexReactClient } from "convex-dev/react";
import createEmotionCache from "../utility/createEmotionCache";
import lightTheme from "../styles/theme/Theme";
import "../styles/globals.css";
import convexConfig from "../convex.json";

const clientSideEmotionCache = createEmotionCache();
const convex = new ConvexReactClient(convexConfig.origin);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ConvexProvider client={convex}>

    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
   </ConvexProvider>
  );
};

export default MyApp;
