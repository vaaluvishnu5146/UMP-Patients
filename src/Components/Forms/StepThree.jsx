import { useEffect, useState } from "react";
import { generateTimeSlots } from "../../utils/Time";
import ListsSelectable from "../Lists/ListsSelectable";

export default function StepThree({
  onPrev = (e) => {},
  onNext = (e) => {},
  handleSlotSelect = () => {},
  selectedValue = "",
}) {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    setSlots(
      generateTimeSlots([
        { startTime: "10:00", endTime: "14:00" },
        { startTime: "16:00", endTime: "17:00" },
      ])
    );
  }, []);

  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">
        <h3>Select Appointment Slots on Date</h3>
        <div className="form-render-slots">
          {slots.map((slot, index) => (
            <button
              key={`${slot}-${index}`}
              className={`btn btn-outline-primary ${
                slot === selectedValue && "active"
              }`}
              onClick={() => handleSlotSelect(slot)}
            >
              {slot}
            </button>
          ))}
        </div>
        <div className="form-steps-buttons">
          <button className="btn btn-lg btn-primary" onClick={onPrev}>
            Prev
          </button>
          <button className="btn btn-lg btn-primary" onClick={onNext}>
            Create Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
