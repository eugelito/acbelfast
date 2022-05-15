import "./FacebookNewsFeed.scss";
import { FacebookProvider, Page } from 'react-facebook';

const FacebookNewsFeed = () => {

  return (
    <>
      <div className="facebook-newsfeed">
        <h2>
          Like us on <i className="fab fa-facebook fax" aria-hidden="true"></i>{" "}
          Facebook
        </h2>
        <FacebookProvider appId="1234518782840956753076789">
          <Page href="https://www.facebook.com/acbelfast" tabs="timeline" />
        </FacebookProvider>
      </div>
    </>
  );
};

export default FacebookNewsFeed;
