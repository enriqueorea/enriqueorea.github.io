import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact"].map(
        (link, index) => (
          <a 
            className="app__navigation-dot" 
            style={active === link ? {backgroundColor: '#313BAC'}  : {}}
            href={`#${link}`} 
            key={index}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
