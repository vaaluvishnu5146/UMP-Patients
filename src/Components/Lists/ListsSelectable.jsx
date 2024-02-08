export default function ListsSelectable({
  data = [],
  handleSelect = () => {},
  selectedValue = () => {},
}) {
  return (
    <div className="list-group">
      {data?.map((d, index) => (
        <button
          key={`${d.name}-${index}`}
          type="button"
          className={`list-group-item list-group-item-action mb-2 ${
            selectedValue === d._id && "active"
          } `}
          aria-current="true"
          onClick={() => handleSelect(d)}
        >
          <div className="row">
            <div className="col-3">
              <img src={d.profileImage} alt={d.name} style={{ width: 50 }} />
            </div>
            <div className="col-9">
              <h5>{d.name}</h5>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
