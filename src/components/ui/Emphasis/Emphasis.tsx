interface EmphasisProps {
  text: string;
}

// Renders **marked** fragments of a content string as emphasis.
function Emphasis({ text }: EmphasisProps) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <b key={index} className="font-medium text-ink">
        {part}
      </b>
    ) : (
      part
    ),
  );
}

export default Emphasis;
