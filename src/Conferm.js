import confImg from "./images/icon-thank-you.svg"
import "./Conferm.css"

export default function Conferm() {
    return (
      <>
        <img src={confImg} />
        <h1>Thank you!</h1>
        <p >
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </>
    );
};