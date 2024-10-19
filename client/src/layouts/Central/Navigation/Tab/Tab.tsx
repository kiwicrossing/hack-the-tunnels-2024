import "./Tab.style.scss";

interface TabProps {
  label: string;
  highlighted: boolean;
  color: boolean;
}

function Tab({ label, highlighted, color }: TabProps) {
  return (
    <div className="Tab">
      <div className="Tab__left" color="hotpink"></div>
      <div className="Tab__label" color="hotpink">{label}</div>
      <div className="Tab__right" color="hotpink"></div>
    </div>
  );
}

export default Tab;
