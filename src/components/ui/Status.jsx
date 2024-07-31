export default function Status({ text, flag }) {
  console.log(text, flag, "flagggggggggggggggggggggg");
  return (
    <span
      className={`shadow rounded px-1 ${
        flag === "danger"
          ? "text-danger border-danger"
          : "text-success border-success"
      }`}
    >
      {text}
    </span>
  );
}
