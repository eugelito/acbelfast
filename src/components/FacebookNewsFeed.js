import React from "react";
import { FacebookProvider, useFacebook, Page } from "react-facebook";

const FacebookNewsFeed = () => {
  const { appId } = useFacebook();

  return (
    <>
      <div className="facebook-newsfeed">
        <h2>
          Like us on <i className="fab fa-facebook fax" aria-hidden="true"></i>{" "}
          Facebook
        </h2>
        <FacebookProvider appId={appId}>
          <Page href="https://www.facebook.com/acbelfast" tabs="timeline" />
        </FacebookProvider>
      </div>
    </>
  );
};

export default FacebookNewsFeed;
