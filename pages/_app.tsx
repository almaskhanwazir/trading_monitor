import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { makeStore } from "../store";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />

  );
}

