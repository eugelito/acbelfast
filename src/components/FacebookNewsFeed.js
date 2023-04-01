import React from "react";
import { FacebookProvider, Page } from "react-facebook";

const FacebookNewsFeed = ({ appId }) => {
  return (
    <>
      <div className="facebook-newsfeed">
        <h2>
          Like us on <i className="fab fa-facebook fax" aria-hidden="true"></i>{" "}
          Facebook
        </h2>
        <FacebookProvider appId={appId} xfbml>
          <Page href="https://www.facebook.com/acbelfast" tabs="timeline" />
        </FacebookProvider>
      </div>
    </>
  );
};

export default FacebookNewsFeed;
