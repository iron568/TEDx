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
        <span className="flex justify-center font-bold font-black text-3xl text-red-600">
          TED
        </span>
        <span className="hidden">Ideas change everything</span>
      </div>
      <div className="hidden">
        {headerItems.map(function (item) {
          return <span key={item}>{item}</span>;
        })}
        <span className="CompnyMembership">MEMBERSHIP</span>
      </div>
    </div>
  );
}
