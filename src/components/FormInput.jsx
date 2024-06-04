import '../styles/components/FormInput.css';

export function FormInput({
  label,
  type,
  placeholder,
  value,
  onChange,
  disabled
}) {
  return (
    <div className="form-input-group">
      <label className="form-input-label">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form-input"
        disabled={disabled}/>
    </div>
  );
}
