const Footer = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const active = total - completed;

  return (
    <div className="stats">
      <div className="stats">
      📊 Total: {total} | ✅ Active: {active} | ✔ Completed: {completed}
    </div>
    </div>
  );
};

export default Footer;