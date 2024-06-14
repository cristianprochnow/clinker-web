import '../styles/components/ActionButton.css';

export function ActionButton({
  type = 'button',
  onClick,
  disabled,
  children
}) {
  return (
    <button
      className="action-button"
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
}