import arcade from "./images/icon-arcade.svg";
import advanced from "./images/icon-advanced.svg";
import pro from "./images/icon-pro.svg";


export default function StepTwo(){
    return (
      <>
        <div className="one">
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </div>

        <div className="plans">
          <div className="planOne planStyle" id="Arcade">
            <input type="checkbox" id="Arcade"  />
            <img src={arcade} alt="" />
            <h4>Arcade</h4>
            <p>$9/mo</p>
          </div>

          <div className="palnTwo planStyle" id="Advanced">
            <input type="checkbox" id="Advanced"  />
            <img src={advanced} alt="" />
            <h4>Advanced</h4>
            <p>$12/mo</p>
          </div>

          <div className="planThree planStyle" id="Pro">
            <input type="checkbox" id="Pro" />
            <img src={pro} alt="" />
            <h4>Pro</h4>
            <p>$15/mo</p>
          </div>
        </div>

        <div className="swith">
          <p>Monthly</p>
          <div className="theSwith" onClick={()=>{
            console.log(`aziz`)
          }} ><span /></div>
          <p>Yearly</p>
        </div>

        <div className="bottuns">
          <button className="back">Go Back</button>
          <button className="next">Next Step</button>
        </div>
      </>
    );
}