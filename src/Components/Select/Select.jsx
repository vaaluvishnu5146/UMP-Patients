export default function DropdownC({
  options = [],
  id = "",
  name = "",
  onChange = () => {},
  interestedLabelKey = "",
  interestedIdKey,
  value = "",
}) {
  return (
    <select
      className="form-select"
      id={id}
      name={name}
      aria-label="Default select example"
      onChange={onChange}
      defaultValue={value}
    >
      <option selected>Open this select menu</option>
      {options?.map((option, index) => (
        <option
          key={`${option[`${interestedIdKey}`]}-${index}`}
          value={option._id}
        >
          {option[interestedLabelKey]}
        </option>
      ))}
    </select>
  );
}
