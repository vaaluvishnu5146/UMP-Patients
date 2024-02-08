import ListsSelectable from "../Lists/ListsSelectable";

export default function StepTwo({
  doctors = [],
  onNext = () => {},
  onPrev = () => {},
  handleDoctorSelect = (data) => {},
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
        <h3>Select Doctor</h3>
        <ListsSelectable
          data={doctors}
          handleSelect={handleDoctorSelect}
          selectedValue={data.doctorId}
        />
        <div className="form-steps-buttons">
          <button className="btn btn-lg btn-primary" onClick={onPrev}>
            Prev
          </button>
          <button
            className="btn btn-lg btn-primary"
            onClick={onNext}
            disabled={!data.doctorId}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
