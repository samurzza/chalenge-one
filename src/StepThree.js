import { Link } from "react-router-dom";
import "./stepThree.css";
import { useState, useEffect } from "react";

export default function StepThree({ data, setData }) {
  const [imput1, setInput1] = useState(data.Online == "" ? false: true );
  const [imput2, setInput2] = useState(data.Larger == "" ? false: true );
  const [imput3, setInput3] = useState(data.Customizable == "" ? false: true );

  

useEffect(()=>{

if (imput1) {
  setData({ ...data, Online: "Online service", OnlinePrice: data.planType == "mo" ? 1 : 1 * 10,});
} else {
  setData({ ...data, Online: "", OnlinePrice: ""});

}
},[ imput1 ])

useEffect(()=>{

if (imput2) {
    setData({ ...data, Larger: "Larger storage", LargerPrice: data.planType == "mo" ? 2 : 2 * 10});
  } else {
  setData({ ...data, Larger: "", LargerPrice: ""});
}
},[ imput2 ])

useEffect(()=>{

if (imput3) {
      setData({ ...data, Customizable: "Customizable Profile", CustomizablePrice: data.planType == "mo" ? 2 : 2 * 10});
    } else {
  setData({ ...data, Customizable: "", CustomizablePrice: ""});
}

},[ imput3 ])

  return (
    <>
    <div className="titleThree">

      <h1>Pick add-ons</h1>
      <p style={{ marginBottom: "75px" }}>
        Add-ons help enhance your gaming experience.
      </p>
    </div>

      <div
        className="cuntent"
        onClick={() => {
          setInput1(imput1 ? false : true);
        }}
        style={{ backgroundColor: imput1 ? "hsl(218, 100%, 97%)" : "white" }}
      >
        <input type="checkbox" checked={imput1}  />
        <div className="center">
          <h3>Online service</h3>
          <p>Access to multiplayer games</p>
        </div>
        <div className="salery">
          +${data.planType == "mo" ? 1 : 1 * 10}/{data.planType}
        </div>
      </div>

      <div
        className="cuntent"
        onClick={() => {
          setInput2(imput2 ? false : true);
        }}
        style={{ backgroundColor: imput2 ? "hsl(218, 100%, 97%)" : "white" }}
      >
        <input type="checkbox" checked={imput2} />
        <div className="center">
          <h3>Larger storage</h3>
          <p>Extra 1TB of cloud save</p>
        </div>
        <div className="salery">
          +${data.planType == "mo" ? 2 : 2 * 10}/{data.planType}
        </div>
      </div>

      <div
        className="cuntent"
        onClick={() => {
          setInput3(imput3 ? false : true);
        }}
        style={{ backgroundColor: imput3 ? "hsl(218, 100%, 97%)" : "white" }}
      >
        <input type="checkbox" checked={imput3} />
        <div className="center">
          <h3>Customizable Profile</h3>
          <p>Custom theme on your profile</p>
        </div>
        <div className="salery">
          +${data.planType == "mo" ? 2 : 2 * 10}/{data.planType}
        </div>
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
