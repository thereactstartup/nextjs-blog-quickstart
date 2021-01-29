import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "react-bootstrap/Container";
import PostBody from "components/blog/post-body";
import MoreStories from "components/blog/more-stories";
import Header from "components/header";
import PostHeader from "components/blog/post-header";
import SectionSeparator from "components/section-separator";
import Layout from "components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "lib/graphcms";
import PostTitle from "components/blog/post-title";
import Head from "next/head";
import { CMS_NAME } from "lib/constants";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  console.log(post);
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container
        fluid
        style={{ backgroundColor: "white", paddingBottom: 30, paddingTop: 30 }}
      >
        <Container>
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <Head>
                  <title>{post.title} | Schemer</title>
                  <meta property="og:image" content={post.coverImage.url} />
                  <meta name="twitter:card" content="summary" />
                  <meta name="twitter:site" content="@SchemerHQ" />
                  <meta name="twitter:title" content={post.excerpt} />
                  <meta name="twitter:image" content={post.coverImage.url} />
                </Head>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  tags={post.tags}
                />
                <PostBody content={post.content} />
              </article>
            </>
          )}
        </Container>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data.post,
      morePosts: data.morePosts || [],
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPostsWithSlug();
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  };
}
