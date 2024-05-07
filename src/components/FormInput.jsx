import '../styles/components/FormInput.css';

export function FormInput({ label, type, placeholder }) {
  return (
    <div className="form-input-group">
      <label className="form-input-label">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="form-input"/>
    </div>
  );
}
