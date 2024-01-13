import React, { useState, useEffect } from "react";
import { FacebookProvider, Page } from "react-facebook";
import "./FacebookNewsFeed.scss";

const FacebookNewsFeed = () => {
  const [forceRerender, setForceRerender] = useState(false);
  const [initialMount, setInitialMount] = useState(true);

  useEffect(() => {
    if (initialMount) {
      // Function to reload the Facebook timeline script
      const reloadTimeline = () => {
        setForceRerender((prev) => !prev);
      };

      // Call the function only on the initial mount
      reloadTimeline();

      // Update initialMount to false to prevent further calls
      setInitialMount(false);
    }
  }, [initialMount]); // Watch for changes in initialMount

  return (
    <div className="facebook-newsfeed">
      <h2>
        Like us on <i className="fab fa-facebook fax" aria-hidden="true"></i>{" "}
        Facebook
      </h2>
      <FacebookProvider appId="196175799810100">
        <FacebookPage key={`reload-${forceRerender}`} />
      </FacebookProvider>
    </div>
  );
};

const FacebookPage = React.memo(() => {
  return <Page href="https://www.facebook.com/acbelfast" tabs="timeline" />;
});

export default FacebookNewsFeed;
