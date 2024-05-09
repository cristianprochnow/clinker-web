import '../styles/components/ActionButton.css';

export function ActionButton({ type = 'button', children }) {
  return (
    <button className="action-button" type={type}>{children}</button>
  );
}
