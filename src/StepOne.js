export default function StepOne(){
    return (
        <>
        
      <div className="one">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      
      

        <div className="inpOne">

          <label for="one">Name</label>
          <input type="text" id="" placeholder="e.g. Stephen King" />
        </div>
        
        <div className="inpTwo">

          <label for="two">Email Address</label>
          <input type="text" id="two" placeholder="e.g. stephenking@lorem.com" />
        </div>
        
        <div className="inpThree">

          <label for="three">Phone Number</label>
          <input type="number" id="three" placeholder="e.g. +1 234 567 890" /> 
        </div>
        
        <div className="divNex">

          <button className="Next">Next Step</button>
        </div>
      
        </>
    )
}