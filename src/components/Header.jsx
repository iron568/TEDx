export function Header() {
  const headerItems = [
    "WATCH",
    "DISCOVER",
    "ATTEND",
    "PARTICIPATE",
    "ABOUT",
    "SING IN",
  ];
  return (
    <div className="MainHeader">
      <div className="TedCompny">
        <span className="Ted">TED</span>
        <span className="idea">Ideas change everything</span>
      </div>
      <div className="headerItems">
        {headerItems.map(function (item) {
          return <span key={item}>{item}</span>;
        })}
        <span className="CompnyMembership">MEMBERSHIP</span>
      </div>
    </div>
  );
}
