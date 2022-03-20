import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HelmetCom = () => {
  return (
    <div className="application">
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Moya for Desktop</title>

          <meta
            name="description"
            content="내 책상 위의 애널리스트, MoYa for Desktop"
          />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Moya for Desktop" />
          <meta property="og:site_name" content="Moya" />

          <link
            rel="icon"
            type="image/x-icon"
            href="/images/favicon.ico"
            sizes="16x16"
          />
        </Helmet>
      </HelmetProvider>
    </div>
  );
};

export default HelmetCom;
