import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time style={{ color: "rgb(0,0,0,.9)" }} dateTime={dateString}>
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
}
