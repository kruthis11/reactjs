import React, { useState } from 'react';
import "./subpagestyle.css";
import { Link } from 'react-router-dom';

const Etc = () => {

  const subjects = [
    { code: 'ETC01', name: 'Smart materials and systems', vacancies: 60 },
    { code: 'ETC02', name: 'Green buildings', vacancies: 60 },
    { code: 'ETC04', name: 'Introduction to Embedded systems', vacancies: 120 },
    { code: 'ETC05', name: 'Introduction to nano technology', vacancies: 120 },
    { code: 'ETC08', name: 'Renewable Energy sources', vacancies: 120 },
    { code: 'ETC11', name: 'Introduction to IOT', vacancies: 120 },
    { code: 'ETC12', name: 'Introduction to cyber security', vacancies: 120 },
  ];

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
      <h1 className="heading">Register subjects for Engineering Technological Course</h1>

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

export default Etc;
