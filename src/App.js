import "./azoz.css"
import "./StepTwoStyle.css"
import Steps from "./Steps"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree";
import StepFour from "./stepFour";
import Conferm from "./Conferm"
import { Route,Routes } from "react-router-dom"
import { useState } from "react"
import { useLocation } from "react-router-dom";


function App() {

let [formData, setFormData] = useState({
  switchClass: "left" ,
  name: ``,
  email: ``,
  PhonNumber: ``,

  planName: ``,
  planPraice: ``,

  planType: "mo",

  Online: "",
  OnlinePrice: "",

  Larger: "",
  LargerPrice: "",

  Customizable: "",
  CustomizablePrice: "",
});

  const location = useLocation();


  const steps = [
    { id: 1, path: "/", label: "Your info", name: "Step 1" },
    { id: 2, path: "/step-two", label: "Select plan", name: "Step 2" },
    { id: 3, path: "/step-three", label: "Add-ons", name: "Step 3" },
    { id: 4, path: "/step-four", label: "Summary", name: "Step 4" },
  ];

  return (
    <>
    
      <div className="body">
        <Steps />
        <Routes>
          <Route
            path="/"
            element={
              <div className="stepOne">
                <StepOne data={formData} setData={setFormData} />
              </div>
            }
          />
          <Route
            path="/step-two"
            element={
              <div className="StepTwo">
                <StepTwo data={formData} setData={setFormData} />
              </div>
            }
          />

          <Route
            path="/step-three"
            element={
              <div className="stepThree">
                <StepThree data={formData} setData={setFormData} />
              </div>
            }
          />

          <Route
            path="/step-four"
            element={
              <div className="stepFour">
                <StepFour data={formData} setData={setFormData} />
              </div>
            }
          />

          <Route
            path="/conferm"
            element={
              <div className="conferm">
                <Conferm />
              </div>
            }
          />
        </Routes>
      </div>
    </>
  ); 
}

export default App;
