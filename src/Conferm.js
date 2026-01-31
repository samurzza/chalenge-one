import confImg from "./images/icon-thank-you.svg"

export default function Conferm() {
    return (
      <>
        <img src={confImg} style={{ margin: "130px 253px 45px" }} />
        <h1 style={{display: "flex", justifyContent:" center" , marginBottom:"30px" , color:"hsl(213, 96%, 18%)"}}>Thank you!</h1>
        <p style={{  color:"hsl(231, 11%, 63%)" ,  textAlign: "center",margin:" 19px",fontSize:" large"}}>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </>
    );
};