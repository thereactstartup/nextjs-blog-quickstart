import Avatar from "../avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import styles2 from "./featured.module.css";
import { BsArrowRight } from "react-icons/bs";
import getTheme from "../../theme.js";
export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
}) {
  const theme = getTheme();

  return (
    <div>
      <div>
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>

      <h3
        className="text-3xl leading-snug"
        style={{
          marginTop: 20,
          fontWeight: 700,
          fontSize: 24,
          textDecoration: "none",
        }}
      >
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a className={styles2.blogTitle}>{title}</a>
        </Link>
      </h3>

      {tags ? (
        <div
          className="justify-content-start"
          style={{ marginTop: 10, marginBottom: 15 }}
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

      <p
        style={{ color: "rgba(9,14,36,.9)", fontWeight: "300" }}
        className="mb-4 text-lg leading-relaxed"
      >
        {excerpt.slice(0, 120)}...
      </p>
      <div
        style={{
          paddingBottom: 20,
        }}
        className="d-flex align-items-center justify-content-between"
      >
        <Link as={`/blog/${slug}`} passHref href="/blog/[slug]">
          <button
            className="d-flex align-items-center justify-content-center"
            style={{
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
              backgroundColor: "white",
              color: theme.secondary,
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 0,
              paddingRight: 14,
              borderRadius: 4,
            }}
          >
            Read more{" "}
            <BsArrowRight style={{ marginLeft: 5, fontWeight: 500 }} />
          </button>
        </Link>

        <div className="d-flex align-items-center " style={{ color: "black" }}>
          {author ? (
            <Avatar picture={author.picture.url} name="Carlos" />
          ) : null}
          <Date dateString={date} />
        </div>
      </div>
    </div>
  );
}
