import arcade from "./images/icon-arcade.svg";
import advanced from "./images/icon-advanced.svg";
import pro from "./images/icon-pro.svg";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";



export default function StepTwo({data , setData }){
  
  // const [switchClass, setSwitchClass] = useState("left");
  const [ bottun, setBottun] = useState({ class: "Nextd", state: true });

  
  function swoth(){
    if (data.switchClass == "left") {
      setData({ ...data, switchClass: "rite", planType: "yr"  , planPraice: data.planType == "mo" ? data.planPraice * 10 : data.planPraice / 10});
      // setData({ ...data, });
    } else if (data.switchClass == "rite") {
      setData({ ...data, switchClass: "left", planType: "mo" , planPraice: data.planType == "mo" ? data.planPraice * 10 : data.planPraice / 10 });
      // setData({ ...data, });
    }
  }
  
  const [selectedPlan, setSelectedPlan] = useState(null) 

  const plans = [
    {name: "Arcade", basePrice: 9,img: arcade,id: 1,},
    { name: "Advanced", basePrice:  12 , img: advanced, id: 2 },
    { name: "Pro", basePrice:  15, img: pro, id: 3 },
  ];

  let contetn = plans.map(plan => {
      return (
        <div
          key={plan.id}
          style={{
            boxShadow:
              data.planName === plan.name
                ? "0 0 11px 0 hsl(243, 100%, 62%)"
                : "",
          }}
          onClick={() => {
            setData({
              ...data,
              planName: plan.name,
              planPraice:
                data.planType === "mo" ? plan.basePrice : plan.basePrice * 10,
            });
          }}
          className="planOne planStyle"
          id="Arcade"
        >
          <img src={plan.img} alt="" />
          <div>

          <h4>{plan.name}</h4>
          <p>
            ${data.planType == "mo" ? plan.basePrice : plan.basePrice * 10}/
            {data.planType}
          </p>
          </div>
        </div>
      );
  })
  

useEffect(() => {
  setBottun(
    data.planName !== ""
      ? { class: "Next", state: false }
      : { class: "Nextd", state: true },
  );
}, [data.planName]);



  return (
    <>
      <div className="one">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <div className="plans">{contetn}</div>

      <div className="swith">
        <p>Monthly</p>
        <div
          className="theSwith"
          onClick={() => {
            swoth();
          }}
        >
          <span className={data.switchClass} />
        </div>
        <p>Yearly</p>
      </div>

      <div className="bottuns">
        <Link to={"/"}>
          <button className="back">Go Back</button>
        </Link>
        <Link to={"/step-three"}>
          <button
            onClick={() => {
              // const dat = plans.find((d) => d.name === data.planName);
              // setData({
              //   ...data,
              //   planName: dat.name,
              //   planPraice:
              //     data.planType == "mo" ? dat.basePrice : dat.basePrice * 10,
              // });
            }}
            disabled={bottun.state}
            className={bottun.class}
          >
            Next Step
          </button>
        </Link>
      </div>
    </>
  );
}






