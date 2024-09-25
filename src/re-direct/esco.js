import React, { useState } from 'react';
import "./subpagestyle.css";
import { Link } from 'react-router-dom';


const ParentComponent = () => {
  
  const subjects = [
    { code: 'ESC01', name: 'Introduction to Civil Engineering', vacancies: 120 },
    { code: 'ESC02', name: 'Introduction to Electrical Engineering', vacancies: 120 },
    { code: 'ESC03', name: 'Introduction to Electronics Engineering', vacancies: 120 },
    { code: 'ESC04', name: 'Introduction to Mechanical Engineering', vacancies: 120 },
  ];

  return (
    <div>
      <Esco subjects={subjects} />
    </div>
  );
};


const Esco = ({ subjects }) => {
  
  const [selectedSubject, setSelectedSubject] = useState('');

  const handleSubmit = () => {
    if (selectedSubject) {
      alert(`Subject ${selectedSubject} registered successfully`);
    } else {
      alert("Please select a subject before submitting.");
    }
  };

  const handleRadioChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  return (
    <>
      <h1 className="heading">Register subjects for Engineering Science Course</h1>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Sl.no</th>
              <th scope="col">Sub Code</th>
              <th scope="col">Subject Name</th>
              <th scope="col">Vacancies</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {subjects.map((subject, index) => (
              <tr key={subject.code}>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="subject"
                      value={`${subject.code} - ${subject.name}`}
                      onChange={handleRadioChange}
                    />
                  </div>
                </td>
                <th scope="row">{index + 1}</th>
                <td>{subject.code}</td>
                <td>{subject.name}</td>
                <td>{subject.vacancies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <center>
        <div className="but-class">
          <Link to="/final">
            <button onClick={handleSubmit} className="sbut">Submit</button>
          </Link>
        </div>
      </center>
    </>
  );
};

export default ParentComponent;
