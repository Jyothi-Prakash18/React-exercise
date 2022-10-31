import React from 'react';

function Car({name1, tool1, model1,model2,model3,name2, tool2,name3, tool3,}) {

    return (
      <div>
        <h1>Car</h1>
        <h2>Brand: {name1}.</h2>
        <h2>Model: {model1}.</h2>
        <h2>Price: {tool1}.</h2><br></br>

        <h1>Car</h1>
        <h2>Brand: {name2}.</h2>
        <h2>Model: {model2}.</h2>
        <h2>Price: {tool2}.</h2><br></br>

        <h1>Car</h1>
        <h2>Brand: {name3}.</h2>
        <h2>Model: {model3}.</h2>
        <h2>Price: {tool3}.</h2><br></br>
      </div>
      
    );

  }
  
  Car.defaultProps = {
    name1: "Audi",
    model1:"A6",
    tool1: "49,99,999",

    name2: "Ferrari",
    model2:"BSI",
    tool2: "70,00,000",

    name3: "Hyundai",
    model3:"i20",
    tool3: "9,87,974",
  }
export default Car


