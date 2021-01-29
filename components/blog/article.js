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
    <Row style={{ marginTop: 40 }}>
      <Col xs={12} lg={6}>
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </Col>
      <Col xs={12} lg={6} className="d-flex  align-items-center" style={{}}>
        <div style={{ paddingLeft: 20, paddingRight: 10 }}>
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
                <a className={styles2.blogTitle} style={{ fontSize: 26 }}>
                  {title}
                </a>
              </Link>
            </h3>

            <h3 className={styles2.excerpt}>{excerpt}</h3>
          </div>

          <div
            className="d-flex justify-content-start align-items-center"
            style={{
              marginTop: 30,
              flexDirection: "row",
            }}
          >
            <Link as={`/blog/${slug}`} href="/blog/[slug]">
              <Button className={styles2.button}>Read more</Button>
            </Link>
            <Date dateString={date} />
          </div>
        </div>
      </Col>
    </Row>
  );
}
