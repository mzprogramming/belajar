function HighLight() {
  return (
    <div className="buttons">
      <div className="height">
        <Budge text={`PhD`} />
      </div>
      <div className="height">
        <Budge text={`😂PhD`} />
      </div>
    </div>
  );
}

function Budge({ text }) {
  return (
    <button>
      <div className="height">{text}</div>
    </button>
  );
}

export default HighLight;
