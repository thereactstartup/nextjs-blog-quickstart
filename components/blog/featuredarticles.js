import Avatar from "../avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { Button, Container, Col, Row } from "react-bootstrap";
import styles2 from "./featured.module.css";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Col xs={12} lg={4}>
      <CoverImage slug={slug} title={title} url={coverImage.url} />

      <div style={{ paddingLeft: 20, paddingRight: 10, marginBottom: 30 }}>
        <div>
          <h3
            style={{
              marginTop: 0,
              fontWeight: 700,
              fontSize: 36,
              textDecoration: "none",
            }}
          >
            <Link as={`/blog/${slug}`} href="/blog/[slug]">
              <a className={styles2.blogTitle} style={{ fontSize: 24 }}>
                {title}
              </a>
            </Link>
          </h3>
        </div>
      </div>
    </Col>
  );
}
