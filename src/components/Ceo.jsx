import React from 'react';

export const Ceo = (props) => {
  return (
    <div id="ceo" className="text-center">
      <div className="ceostyles container d-flex flex-wrap justify-content-between">
        <div className="col-md-8 section-title">
          <h2>Meet the Ceo</h2>
          <p> Meet our CEO Julius Kayigamba, a young, visionary founder. Despite his young age, Julius has a deep passion for tourism, and he wants to take Rwanda tourism to the next level. With determination and hard work, he started Rwanda Safaris Countrywide, a company that provides affordable and high-quality tourism services to visitors from all over the world. Julius's goal is to showcase the beauty of Rwanda, from the majestic mountains to the breathtaking Lake Kivu, and to give visitors a taste of the local culture and traditions. Rwanda Safaris Countrywide offers a range of tour packages that cater to all types of travelers. Julius's passion for tourism is contagious, and he wants to inspire others to see the beauty of Rwanda </p>
        </div>
        <div id="row" className="d-flex flex-wrap justify-content-center">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="ceoimagestyles col-md-3 col-sm-6 Ceo">
                  <div className="thumbnail">
                    <img src={d.img} alt="..." className="Ceo-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  );
};
