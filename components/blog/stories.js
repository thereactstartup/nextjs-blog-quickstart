import Article from "./article";

export default function MoreStories({ posts }) {
  return (
    <section>
      <div>
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
      </div>
    </section>
  );
}
