import '../styles/components/PageTitle.css';

export function PageTitle({ children }) {
  if (!children) {
    children = '';
  }

  function getFirstLetter(text) {
    return text.charAt(0).toUpperCase();
  }

  function getReminderLetters(text) {
    return text.slice(1);
  }

  return (
    <h1 className="page-title">
      <span>{getFirstLetter(children)}</span>{getReminderLetters(children)}
    </h1>
  )
}
