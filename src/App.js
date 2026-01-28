import "./azoz.css"
import "./StepTwoStyle.css"
import Steps from "./Steps"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree";
import StepFour from "./stepFour";
import { Route,Routes } from "react-router-dom"
import { useState } from "react"

function App() {

  let [formData, setFormData] = useState({
    name:``,
    email:``,
    PhonNumber:``,

    planName:``,
    planPraice:``,

    planType:"mo",

    extra:[]
  })


  return (
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
              <StepTwo
                data={formData}
                setData={setFormData}
              />
            </div>
          }
        />

        <Route
          path="/step-three"
          element={
            <div className="stepThree">
              <StepThree
                data={formData}
                setData={setFormData}

              />
            </div>
          }
        />

        <Route
          path="/step-four"
          element={
            <div className="stepFour">
              <StepFour
                data={formData}
                setData={setFormData}
              />
            </div>
          }
        />
      </Routes>
    </div>
  ); 
}

export default App;
