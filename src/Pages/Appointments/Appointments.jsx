import { useEffect, useState } from "react";
import StepOne from "../../Components/Forms/StepOne";
import StepTwo from "../../Components/Forms/StepTwo";
import StepThree from "../../Components/Forms/StepThree";

export default function Appointments() {
  const [step, setStep] = useState(0);
  const [hospitals, setHospitals] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    patientId: "65c06b175e7cdca012d7704c",
  });
  async function getAllHospitals() {
    try {
      const response = await fetch("http://localhost:5000/api/hospital/all");
      const result = await response.json();
      setHospitals(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getDoctorsForHospital(hospitalId = "") {
    try {
      const response = await fetch(
        `http://localhost:5000/api/hospital/${hospitalId}/doctors`
      );
      const result = await response.json();
      setDoctors(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleInputChange(e) {
    e.preventDefault();
    if (e) {
      const formCopy = {
        ...formData,
      };
      formCopy[e.target.id] = e.target.value;
      setFormData(formCopy);
    }
  }

  function handleStepOneNext(e) {
    e.preventDefault();
    if (
      formData.appointmentDate &&
      formData.hospitalId &&
      formData.problem &&
      formData.description
    ) {
      setStep(1);
    }
  }

  function handleDoctorSelect(doctor = {}) {
    if (doctor) {
      const formDataCopy = {
        ...formData,
      };
      formDataCopy["doctorId"] = doctor._id;
      setFormData(formDataCopy);
    }
  }

  function handleSlotSelect(timeSlot = {}) {
    if (timeSlot) {
      const formDataCopy = {
        ...formData,
      };
      formDataCopy["timeSlot"] = timeSlot;
      setFormData(formDataCopy);
    }
  }

  function createAppointment(e) {
    e.preventDefault();

    fetch("http://localhost:5000/api/appointment/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getAllHospitals();
    return () => {};
  }, []);

  useEffect(() => {
    if (step === 1 && formData.hospitalId) {
      getDoctorsForHospital(formData.hospitalId);
    }
    if (step === 1 && !formData.hospitalId) {
      alert("Select hospital to continue");
    }
    return () => {};
  }, [step]);

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        height: "100%",
      }}
    >
      {step === 0 && (
        <StepOne
          data={formData}
          hospitals={hospitals}
          handleInputChange={handleInputChange}
          onNext={handleStepOneNext}
        />
      )}
      {step === 1 && (
        <StepTwo
          doctors={doctors}
          onNext={() => setStep(2)}
          onPrev={() => setStep(0)}
          handleDoctorSelect={handleDoctorSelect}
          data={formData}
        />
      )}
      {step === 2 && (
        <StepThree
          onPrev={() => setStep(1)}
          onNext={createAppointment}
          selectedValue={formData.timeSlot}
          handleSlotSelect={handleSlotSelect}
        />
      )}
    </div>
  );
}
