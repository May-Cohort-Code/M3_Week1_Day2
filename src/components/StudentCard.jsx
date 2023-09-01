import React from 'react';
 
function StudentCard({name,location,bootcamp}) {
  return (
    <div className="StudentCard">
      <p id='name-student'>Name: {name.toUpperCase()} </p>
      <p>In the city of {location.country}</p>
      <p>Currently Enrolled in Bootcamp: {bootcamp}</p>
      <br />
    </div>
  );
}
 
export default StudentCard;


//exercise:
//pass down props from the app for each of the name, city, and bootcamp
//display the values where the ________ is