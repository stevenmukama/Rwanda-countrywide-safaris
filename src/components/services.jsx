import React from "react";

export const Services = (props) => {
  if (!props.data) {
    return <div>Loading...</div>;
  }
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>We offer different services to help tourists</p>
        </div>
        <div className="row">
          {props.data.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-md-4">
              {" "}
              <i className={d.icon}></i>
              <div className="service-desc">
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
