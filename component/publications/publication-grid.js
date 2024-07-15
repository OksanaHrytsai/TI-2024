export default function PublicationGrid({ publications }) {
  return (
    <ul>
      {publications.map((publication) => (
        <li key={publication.id}></li>
      ))}
    </ul>
  );
}
