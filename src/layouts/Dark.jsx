/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";

const DarkTheme = ({ children, useSkin }) => {
  React.useEffect(() => {
    window.theme = "dark";
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/dark.css" />
        {useSkin ? (
          <link rel="stylesheet" href="/css/arch-skin-dark.css" />
        ) : (
          ""
        )}
      </Head>
      {children}
    </>
  );
};

export default DarkTheme;
