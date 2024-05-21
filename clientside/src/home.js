
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedHotel, setSelectedHotel] = useState("");
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();










  useEffect(() => {
    axios.get("http://localhost:3000/api/doctors")
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error("Error fetching doctors:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      age,
      phoneNumber,
      message,
      doctor: selectedDoctor
    };

    axios.post("http://localhost:5000/api/patient", formData)
      .then(response => {
        console.log("Patient data saved:", response.data);
        navigate("/patient-dashboard");
      })
      .catch(error => {
        console.error("Error saving patient data:", error);
      });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <button onClick={() => navigate("/doctor")}>Doctor Register</button>
        <button onClick={() => navigate("/nurse")}>Nurse Register</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        <br />
        <label>Phone Number:</label>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        <br />
        <label>Message:</label>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <br />
        <label>Doctor:</label>
        <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)} required>
          <option value="">Select Doctor</option>
          {doctors.map(doctor => (
            <option key={doctor._id} value={doctor._id}>{doctor.name}----------{doctor.specialization}</option>
          ))}
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
