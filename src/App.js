import React, { useState } from "react";
import { AppContainer } from "./style";

function App() {
  const [isAnunul, setIsAnnul] = useState(false);

  const Annual = [
    {
      title: "Basic",
      cost: "199.99",
      benefits: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    },
    {
      title: "Professional",
      cost: "249.99",
      benefits: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    },
    {
      title: "Master",
      cost: "399.99",
      benefits: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    },
  ];

  const Monthly = [
    {
      title: "Basic",
      cost: "19.99",
      benefits: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    },
    {
      title: "Professional",
      cost: "24.99",
      benefits: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    },
    {
      title: "Master",
      cost: "49.99",
      benefits: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    },
  ];

  const OPTIONS = isAnunul ? Annual : Monthly;

  return (
    <AppContainer>
      <h1>Our Pricing</h1>
      <div className="option_switcher">
        <p>Annually</p>
        <div
          className={`toggler ${isAnunul ? "anu" : "mon"}`}
          onClick={() => setIsAnnul(!isAnunul)}
        >
          <div className="toggler_circle"></div>
        </div>
        <p>Monthly</p>
      </div>
      <div className="options">
        {React.Children.toArray(
          OPTIONS.map((data) => (
            <div className="option">
              <div className="option_title">{data.title}</div>
              <div className="option_cost">
                <span>$</span>
                {data.cost}
              </div>
              {React.Children.toArray(
                data.benefits.map((d) => (
                  <>
                    <div className="option_line"></div>
                    <div className="option_benefit">{d}</div>
                  </>
                ))
              )}
              <div className="option_line"></div>
              <div className="option_button">Learn More</div>
            </div>
          ))
        )}
      </div>
    </AppContainer>
  );
}

export default App;
