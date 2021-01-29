import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import Link from "next/link";
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
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>
      <h6
        style={{
          marginBottom: 10,
          fontWeight: 700,
          fontSize: 16,
          color: "rgba(56,59,64,0.64)",
        }}
      >
        FEATURED ARTICLE
      </h6>
      <div className="mb-20 md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 md:mb-28">
        <div>
          <h3
            className="mb-4 text-4xl leading-tight lg:text-6xl"
            style={{
              marginTop: 0,
              fontWeight: 700,
              fontSize: 36,
              textDecoration: "none",
            }}
          >
            <Link as={`/blog/${slug}`} href="/blog/[slug]">
              <a className={styles2.blogTitle}>{title}</a>
            </Link>
          </h3>

          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture.url} />
        </div>
      </div>
    </section>
  );
}
