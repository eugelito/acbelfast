import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact__container">
      <div className="container">
        <h1>Contact</h1>
        <div>
        <div>
        <h3>Telephone</h3>
        <span>028 9999 9999</span>
        </div>
        <div>

        <h3>Email</h3>
        <span>athleticclubbelfast@gmail.com</span>
</div> </div>
        <form className="form">
          <div>
            <label>Full name:</label>
            <input
              type="text"
              placeholder="Please enter your full name"
              minLength={2}
              maxLength={50}
              required
            />

            <label>Email address:</label>
            <input
              type="email"
              placeholder="Please enter your email address"
              minLength={3}
              maxLength={64}
              required
            />

            <label>Message:</label>
            <textarea
              type="text"
              placeholder="Please enter your message"
              minLength={5}
              maxLength={4000}
              rows="6"
              required
            ></textarea>

            <input type="submit" id="submitBtn" className="submitBtn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
