import React, { useState } from 'react';
import "./subpagestyle.css";
import { Link } from 'react-router-dom';

const Plc = ({ subjects }) => {
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

const App = () => {
  const subjects = [
    { code: 'PLC1', name: 'Introduction to Web Programming', vacancies: 120 },
    { code: 'PLC2', name: 'Introduction to Python Programming', vacancies: 120 },
    { code: 'PLC3', name: 'Basics to Java programming', vacancies: 120 },
    { code: 'PLC4', name: 'Introduction to C++ Programming', vacancies: 120 },
  ];

  return <Plc subjects={subjects} />;
};

export default App;
