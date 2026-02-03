import "./azoz.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function StepOne({ data, setData }) {
  function useIsMobile() {
    const [isMobile, setIsMobile] = useState(
      window.matchMedia("(max-width: 768px)").matches,
    );

    useEffect(() => {
      const media = window.matchMedia("(max-width: 768px)");
      const handler = () => setIsMobile(media.matches);

      media.addEventListener("change", handler);
      return () => media.removeEventListener("change", handler);
    }, []);

    return isMobile;
  }

  const [bottun, setBottun] = useState({ class: "Nextd", state: true });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10,12}$/;
  const nameRegex = /^(?!.*\b([a-z])\1{1,}\b)[a-z]{3,}(?:\s[a-z]{3,})?$/i;

  const [color, setColor] = useState("");
  const [phoneClolor, setPhoneClolor] = useState("");
  const [nameClolor, setNameClolor] = useState("");

  function check() {
    if (data.name !== `` && data.email !== `` && data.PhonNumber !== ``) {
      if (
        emailRegex.test(data.email) &&
        phoneRegex.test(data.PhonNumber) &&
        nameRegex.test(data.name)
      ) {
        setBottun({ ...bottun, class: "Next", state: false });
      } else {
        setBottun({ ...bottun, class: "Nextd", state: true });
      }

      if (emailRegex.test(data.email)) {
        setColor(``);
      } else {
        setColor(`red`);
      }

      if (phoneRegex.test(data.PhonNumber)) {
        setPhoneClolor(``);
      } else {
        setPhoneClolor(`red`);
      }

      if (nameRegex.test(data.name)) {
        setNameClolor(``);
      } else {
        setNameClolor(`red`);
      }
    }
  }

  return (
    <>
      
        <div className="one">
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>

        <div className="inpOne">
          <label for="one">Name</label>
          <input
            style={{ borderColor: nameClolor }}
            onBlur={check}
            value={data.name}
            type="text"
            id=""
            placeholder="e.g. Stephen King"
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
          />
        </div>

        <div className="inpTwo">
          <label for="two">Email Address</label>
          <input
            onBlur={check}
            value={data.email}
            style={{ borderColor: color }}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
            type="text"
            id="two"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>

        <div className="inpThree">
          <label value for="three">
            Phone Number
          </label>
          <input
            onBlur={check}
            value={data.PhonNumber}
            style={{ borderColor: phoneClolor }}
            onChange={(e) => {
              setData({ ...data, PhonNumber: e.target.value });
            }}
            type="number"
            id="three"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
        <div className="divNex">
          <Link to={"/step-two"}>
            <button disabled={bottun.state} className={bottun.class}>
              Next Step
            </button>
          </Link>
        </div>
    </>
  );
}
