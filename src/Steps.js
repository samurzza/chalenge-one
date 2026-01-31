import { useLocation } from "react-router-dom";

export default function Steps() {
  const location = useLocation();

  const steps = [
    { id: 1, path: "/", label: "Your info", name: "Step 1" },
    { id: 2, path: "/step-two", label: "Select plan", name: "Step 2" },
    { id: 3, path: "/step-three", label: "Add-ons", name: "Step 3" },
    { id: 4, path: "/step-four", label: "Summary", name: "Step 4" },
  ];

  console.log(location.pathname); 

  return (
      <div className="steps">
        <ol>
          {steps.map((step) => {
            return (
              <li key={step.id}>
                <span
                  style={{
                    backgroundColor:
                      location.pathname === step.path
                        ? " hsl(229, 24%, 87%)"
                        : "",
                    color: location.pathname === step.path ? "black" : "",
                  }}
                >
                  {step.id}
                </span>
                <span>{step.name}</span>
                <span>{step.label}</span>
              </li>
            );
          })}
        </ol>
      </div>
  );
}
