import React, { useState, useEffect } from "react";
import { FacebookProvider, Page } from "react-facebook";
import "./FacebookNewsFeed.scss";

const FacebookNewsFeed = () => {
  const [forceRerender, setForceRerender] = useState(false);

  useEffect(() => {
    // Function to reload the Facebook timeline script
    const reloadTimeline = () => {
      setForceRerender((prev) => !prev);
    };

    // Call the function on mount and when forceRerender changes
    reloadTimeline();
  }, []); // Watch for changes in forceRerender

  return (
    <div className="facebook-newsfeed">
      <h2>
        Follow us on <i className="fab fa-facebook fax" aria-hidden="true"></i>{" "}
        Facebook
      </h2>
      <FacebookProvider appId="196175799810100">
        {forceRerender && <FacebookPage />}
      </FacebookProvider>
    </div>
  );
};

const FacebookPage = React.memo(() => {
  return <Page href="https://www.facebook.com/acbelfast" tabs="timeline" />;
});

export default FacebookNewsFeed;
