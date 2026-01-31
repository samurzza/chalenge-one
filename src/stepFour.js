import { Link } from "react-router-dom";
import "./stepFour.css"

export default function StepFour({ data , setData }) {

  const spanStyle = {
    color: "hsl(231, 11%, 63%)",
  };

  function OnlineObj(){
    if(data.Online !== ``){
      return (
        <div>
          <span style={spanStyle}>{data.Online}</span>
          <span>{"+$" + data.OnlinePrice + "/" + data.planType}</span>
        </div>
      );
    }else {
      return 
    }
  }

  function LargerObj(){
    if(data.Larger !== ``){
      return (
        <div>
          <span style={spanStyle}>{data.Larger}</span>
          <span>{"+$" + data.LargerPrice + "/" + data.planType}</span>
        </div>
      );
    }else {
      return 
    }
  }

  function CustomizableObj() {
    if (data.Customizable !== ``) {
      return (
        <div>
          <span style={spanStyle}>{data.Customizable}</span>
          <span>{"+$" + data.CustomizablePrice + "/" + data.planType}</span>
        </div>
      );
    }else {
      return 
    }
  }



  return (
    <>
      <div className="title">
        <h1>Finishing up</h1>
        <p> Double-check everything looks OK before confirming.</p>
      </div>
      {/* <!-- Dynamically add subscription and add-on selections here --> */}
      <div className="data">
        <div className="div">
          <div
            style={{
              color: "hsl(213, 96%, 18%)",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <span>
              {data.planName} ( {data.planType == "mo" ? "monthly" : "yirlli"} )
            </span>
            <span>${data.planPraice + "/" + data.planType}</span>
          </div>
          <hr></hr>

          {OnlineObj()}

          {LargerObj()}

          {CustomizableObj()}
        </div>
        <div className="total">
          <span style={spanStyle}>
            Total ({data.planType == "mo" ? "monthly" : "yirlli"})
          </span>
          <span style={{ color: "hsl(243, 100%, 62%)", fontSize: "19px" }}>
            $
            <b>
              {Number(data.CustomizablePrice) +
                Number(data.LargerPrice) +
                Number(data.OnlinePrice) +
                Number(data.planPraice)}
            </b>
            {"/" + data.planType}
          </span>
        </div>
      </div>

      <div className="bottuns">
        <Link to={"/step-three"}>
          <button className="back">Go Back</button>
        </Link>
        <Link to={"/conferm"}>
          <button className="next">Confirm</button>
        </Link>
      </div>
    </>
  );
}