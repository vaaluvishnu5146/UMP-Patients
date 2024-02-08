import DropdownC from "../Select/Select";

export default function StepOne({
  hospitals = [],
  handleInputChange = () => {},
  onNext = () => {},
  pnPrev = () => {},
  data = {},
}) {
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">
        <h3>Appointment Date</h3>
        <div className="form-steps">
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Appointment Date
            </label>
            <input
              type="date"
              className="form-control"
              id="appointmentDate"
              placeholder=""
              value={data.appointmentDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="hospital" className="form-label">
              Hospital
            </label>
            <DropdownC
              options={hospitals}
              id="hospitalId"
              name="hospitalId"
              onChange={handleInputChange}
              interestedLabelKey={"name"}
              interestedIdKey={"_id"}
              value={data.hospitalId}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="problem" className="form-label">
              Problem
            </label>
            <DropdownC
              options={[
                { label: "Fever", id: "fever" },
                { label: "Diarria", id: "diarrohia" },
                { label: "Skin Alergies", id: "skin allergies" },
              ]}
              id="problem"
              name="problem"
              onChange={handleInputChange}
              interestedLabelKey={"label"}
              interestedIdKey={"id"}
              value={data.problem}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Describe more about your problem"
              value={data.description}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-steps-buttons">
          <button className="btn btn-lg btn-primary" onClick={onNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
