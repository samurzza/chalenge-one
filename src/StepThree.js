import { Link } from "react-router-dom";
import "./stepThree.css"

export default function StepThree() {


    return (
      <>
        <h1>Pick add-ons</h1>
        <p style={{marginBottom: "75px"}}>Add-ons help enhance your gaming experience.</p>

        <div className="cuntent">
          <input type="checkbox" />
          <div className="center">
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <div className="salery">+$1/mo</div>
        </div>

        <div className="cuntent">
          <input type="checkbox"  />
          <div className="center">
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <div className="salery">+$2/mo</div>
        </div>

        <div className="cuntent">
          <input type="checkbox" />
          <div className="center">
            <h3>Customizable Profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          <div className="salery">+$2/mo</div>
        </div>

        <div className="bottuns">
          <Link to={"/step-two"}>
            <button className="back">Go Back</button>
          </Link>
          <Link to={"/step-four"}>
            <button className="next">Next Step</button>
          </Link>
        </div>
      </>
    );
}