export function formatDate(date) {
  const formatDate = new Date(date);

  const day = formatDate.getDate().toString().padStart(2, '0');
  const month = (formatDate.getMonth() + 1).toString().padStart(2, '0');
  const year = formatDate.getFullYear();

  return `${day}/${month}/${year}`;
}