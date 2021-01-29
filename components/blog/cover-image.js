import cn from "classnames";
import Link from "next/link";
import styles2 from "./featured.module.css";

export default function CoverImage({ title, url, slug }) {
  const image = (
    <img
      height={504}
      width={896}
      alt={`Cover Image for ${title}`}
      src={url}
      className={styles2.image2}
    />
  );

  return (
    <div className="">
      {slug ? (
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
