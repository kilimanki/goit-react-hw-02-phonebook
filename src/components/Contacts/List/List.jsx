export const List = ({ items, onclick }) => {
  const elements = items.map(item => {
    return (
      <li key={item.id}>
        <span>{item.name}:</span>
        <span>{item.number}</span>
        <button onClick={() => onclick(item.id)}>Delete</button>
      </li>
    );
  });

  return <ul>{elements}</ul>;
};
