import arcade from "./images/icon-arcade.svg";
import advanced from "./images/icon-advanced.svg";
import pro from "./images/icon-pro.svg";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";



export default function StepTwo({data , setData }){
  
  const [switchClass, setSwitchClass] = useState("left");
  
  const [planPrice, setPlanPrice] = useState({ name: ``, praice: null });


  const [Arcade , setArcade] = useState(9)
  const [Advanced , setAdvanced] = useState(12)
  const [Pro , setPro] = useState(15)
  
  const [selected, setSelected] = useState(null);
  
  
  function swoth(){
    if(switchClass == "left"){
      setSwitchClass("rite");
      setData({...data, planType:`yl`});
      setArcade(Arcade * 10);
      setAdvanced(Advanced * 10);
      setPro(Pro * 10);
    }else if (switchClass == "rite") {
      setSwitchClass("left");
      setData({ ...data, planType: `mo` });
      setArcade(9);
      setAdvanced(12);
      setPro(15);

    }
  }
  


  // useEffect(() => {
  //   if (praiceType == "mo") {
  //     setPlanPrice({...planPrice,name: planPrice.name,praice: planPrice.praice / 10});
  //     setData({ ...data, planPraice: planPrice.praice, planName: planPrice.name });
  //   } else if (praiceType == "yl") {
  //     setPlanPrice({...planPrice,name: planPrice.name,praice: planPrice.praice * 10});
  //     setData({ ...data, planPraice: planPrice.praice, planName: planPrice.name });
  //   }

  // }, [praiceType]);

  // useEffect(() => {
  //   setData({ ...data, planPraice: planPrice.praice, planName: planPrice.name });
  // }, [planPrice]);

  return (
    <>
      <div className="one">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <div className="plans">
        <div
          style={{ borderColor: selected === "one" ? "blue" : "#ddd" }}
          onClick={() => {
            setSelected("one");
            setPlanPrice({ ...planPrice, name: "Arcade", praice: Arcade });
          }}
          className="planOne planStyle"
          id="Arcade"
        >
          <img src={arcade} alt="" />
          <h4>Arcade</h4>
          <p>
            ${Arcade}/{data.planType}
          </p>
        </div>

        <div
          style={{ borderColor: selected === "two" ? "blue" : "#ddd" }}
          onClick={() => {
            setSelected("two");
            setPlanPrice({ ...planPrice, name: "Advanced", praice: Advanced });
          }}
          className="palnTwo planStyle"
          id="Advanced"
        >
          <img src={advanced} alt="" />
          <h4>Advanced</h4>
          <p>
            ${Advanced}/{data.planType}
          </p>
        </div>

        <div
          style={{ borderColor: selected === "three" ? "blue" : "#ddd" }}
          onClick={() => {
            setSelected("three");
            setPlanPrice({ ...planPrice, name: "Pro", praice: Pro });
          }}
          className="planThree planStyle"
          id="Pro"
        >
          <img src={pro} alt="" />
          <h4>pro</h4>
          <p>
            ${Pro}/{data.planType}
          </p>
        </div>
      </div>

      <div className="swith">
        <p>Monthly</p>
        <div
          className="theSwith"
          onClick={() => {
            swoth();
          }}
        >
          <span className={switchClass} />
        </div>
        <p>Yearly</p>
      </div>

      <button
        onClick={() => {
          console.log(data);
        }}
      >
        click
      </button>

      <div className="bottuns">
        <Link to={"/"}>
          <button className="back">Go Back</button>
        </Link>
        <Link to={"/step-three"}>
          <button className="next">Next Step</button>
        </Link>
      </div>
    </>
  );
}





