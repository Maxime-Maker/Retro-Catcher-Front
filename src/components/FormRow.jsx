const FormRow = ({ type, name, labelText, defaultValue = '' }) => {
  return (
    <div className="coolinput">
      <label htmlFor={name} className="text">
        {labelText || name}
      </label>
      <input
        placeholder={name}
        type={type}
        name={name}
        id={name}
        className="input"
        defaultValue={defaultValue}
        required
      />
    </div>
  );
};

export default FormRow;
