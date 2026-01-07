import "./azoz.css"
import "./StepTwoStyle.css"
import Steps from "./Steps"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"

function App() {
  return (

    <div className="body">

      <Steps />

      <div style={{ display: "none" }} className="stepOne">
        <StepOne />
      </div>

      <div className="StepTwo">
        <StepTwo />
      </div>

    </div>

  ); 
}

export default App;
