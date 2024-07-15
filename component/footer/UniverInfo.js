export default function UniverInfo() {
  const currentYear = new Date().getFullYear();
  return (
    <p>
      <span>&copy; 1991 - {currentYear} </span>
      <span>Національний університет технологій та дизайну</span>
    </p>
  );
}
