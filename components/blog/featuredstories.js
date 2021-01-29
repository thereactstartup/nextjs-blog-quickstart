import Article from "./featuredarticles";
import { Row } from "react-bootstrap";

export default function FeaturedStories({ posts }) {
  return (
    <section>
      <div style={{ marginTop: 60 }}>
        <Row>
          {posts.map((post) => (
            <Article
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </Row>
      </div>
    </section>
  );
}
