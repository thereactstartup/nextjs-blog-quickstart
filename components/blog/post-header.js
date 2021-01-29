import Avatar from "../avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import getTheme from "../../theme";

export default function PostHeader({ title, coverImage, date, author, tags }) {
  const theme = getTheme();

  return (
    <>
      <div style={{ marginTop: 80, marginBottom: 20 }}>
        <PostTitle>{title}</PostTitle>
      </div>
      <div className="mb-6 text-lg text-center">
        <Date dateString={date} />
      </div>
      {tags ? (
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: 10, marginBottom: 40 }}
        >
          {tags.map((tag) => (
            <a
              style={{
                backgroundColor: theme.secondary,
                marginRight: 10,
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 10,
                paddingRight: 10,
                borderRadius: 4,
                color: "white",
                fontSize: 13,
              }}
            >
              {tag}{" "}
            </a>
          ))}
        </div>
      ) : null}
      <div
        style={{ marginBottom: 50 }}
        className="d-flex justify-content-center"
      >
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <div className="max-w-2xl mx-auto"></div>
    </>
  );
}
