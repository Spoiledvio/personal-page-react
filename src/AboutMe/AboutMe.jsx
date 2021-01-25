import './AboutMe.scss';
import one from '../Images/one.png';
import two from '../Images/two.png';


function AboutMe() {
  return (
    <div className="background">
      <div className="About">
        <h2>Frontend developer</h2>
      </div>
      <div className="About_img">
        <img src={one} alt="4"/>
      </div>
    </div>
  );
}

export default AboutMe;
