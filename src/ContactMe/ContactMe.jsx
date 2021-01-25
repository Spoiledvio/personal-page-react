import './ContactMe.scss';

function ContactMe() {
  return (
    <div className="block">
      <div className="contact_panel">
        <h1>Contact me</h1>
        <form className="contact_form">
          <input type="text" id="fname" name="yourname" placeholder="Your name" />
          <input type="text" id="lname" name="email" placeholder="Your email" />
          <textarea id="subject" name="subject" placeholder="Messange" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default ContactMe;


