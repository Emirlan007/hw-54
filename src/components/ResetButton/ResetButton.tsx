const ResetButton = ({ onReset }: { onReset: () => void }) => {
  return <button onClick={onReset}>Reset</button>;
};

export default ResetButton;