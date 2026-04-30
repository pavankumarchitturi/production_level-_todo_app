const Footer = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <footer className="stats">
      <em>
        Total: {total} | Completed: {completed} | Pending: {pending}
      </em>
    </footer>
  );
};

export default Footer;