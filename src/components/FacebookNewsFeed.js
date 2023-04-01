import React from "react";
import { FacebookProvider, Page } from "react-facebook";

const FacebookNewsFeed = () => {
  const [key, setKey] = useState(0);

  return (
    <>
      <div className="facebook-newsfeed" key={key}>
        <h2>
          Like us on <i className="fab fa-facebook fax" aria-hidden="true"></i>{" "}
          Facebook
        </h2>
        <FacebookProvider appId="196175799810100">
          <Page href="https://www.facebook.com/acbelfast" tabs="timeline" />
        </FacebookProvider>
      </div>
    </>
  );
};

export default FacebookNewsFeed;
