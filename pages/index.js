import { Container, Row, Col } from "react-bootstrap";
import MoreStories from "../components/blog/stories";
import FeaturedStories from "../components/blog/featuredstories";
import Featured from "../components/blog/featured-article";
import styles from "./index.module.css";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/graphcms";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import PostPreview from "../components/blog/post-preview";
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoJavascript,
} from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import Link from "next/link";

import getTheme from "../theme.js";

export default function Index({ posts, preview }) {
  const morePosts = posts;

  const theme = getTheme();

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Blog | YOURWEBSITENAME</title>
        </Head>
        <Container
          fluid
          className={["d-flex align-items-center"]}
          style={{
            minHeight: "60vh",
            backgroundColor: theme.back,
          }}
        >
          <Container>
            <Row
              className="d-flex justify-content-center no-gutters"
              style={{
                paddingTop: 40,
                paddingBottom: 100,
              }}
            >
              <Col xl={7} lg={7} md={7}>
                <div className="text-center">
                  <img
                    src="./download.png"
                    style={{
                      width: 130,
                      borderRadius: "50%",
                      margin: "auto",
                      border: "2px solid white",
                    }}
                  />
                  <h1
                    className="text-5xl md:text-6xl lg:text-7xl"
                    style={{
                      color: "#ebebec",
                      marginLeft: 0,
                      fontWeight: 600,
                    }}
                  >
                    Carlos Nunez
                  </h1>
                </div>
                <hr
                  style={{
                    height: 3.5,
                    backgroundColor: theme.secondary,
                    width: "7%",
                    marginRight: 10,
                    margin: "auto",
                    marginTop: 20,
                  }}
                />

                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ marginTop: 20, marginBottom: 20 }}
                >
                  <a href="https://github.com/carlos-nunez" target="_blank">
                    <IoLogoGithub
                      style={{ color: "white", fontSize: 20, margin: 10 }}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/carlos-nunezz/"
                    target="_blank"
                  >
                    <RiLinkedinFill
                      style={{ color: "white", fontSize: 20, margin: 10 }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/carlos_nunezz_/"
                    target="_blank"
                  >
                    <IoLogoInstagram
                      style={{ color: "white", fontSize: 20, margin: 10 }}
                    />
                  </a>
                </div>
              </Col>
              <Col
                xl={5}
                lg={5}
                md={5}
                className="justify-content-center align-items-center"
              >
                <h3
                  className="text-sm d-flex align-items-center"
                  style={{
                    fontSize: 15,
                    marginTop: 20,
                    fontWeight: 500,
                    letterSpacing: "1px",
                    color: "#999aa2",
                  }}
                >
                  <hr
                    style={{
                      height: 0.5,
                      backgroundColor: "#999aa2",
                      width: 10,
                      marginRight: 10,
                    }}
                  />
                  Introduction
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    color: "#ebebec",
                    fontSize: 28,
                    fontWeight: "600",
                    maxWidth: 330,
                  }}
                >
                  Software Engineer and React Developer, based in Miami.
                </p>
                <p
                  style={{
                    maxWidth: 330,
                    color: "#999aa2",
                    marginTop: 10,
                    fontSize: 14,
                    lineHeight: 2,
                  }}
                >
                  Hi, I'm Carlos and I develop tools and experiences that help
                  people succeed using technology.
                </p>
                <div style={{ marginTop: 20 }}>
                  <Link href="/#projects" passHref>
                    <a style={{ fontSize: 16, color: theme.primary }}>
                      View work{" "}
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container
          fluid
          style={{
            paddingLeft: 0,
            paddingBottom: 100,
            backgroundColor: "white",
            paddingTop: 50,
          }}
        >
          <Container style={{ maxWidth: 1150 }}>
            <Row>
              <Col className="justify-content-center">
                <h1
                  className="text-3xl md:text-4xl lg:text-6xl text-center"
                  style={{
                    color: "black",
                    marginTop: "2rem",
                    fontWeight: 700,
                  }}
                >
                  /Knowledgebase/
                </h1>

                <p
                  className="text-sm my-4 md:my-5 lg:my-6 text-center"
                  style={{
                    fontSize: 20,
                    maxWidth: 800,
                    fontWeight: 300,
                    paddingTop: 10,
                    color: "rgba(9,14,36,.9)",
                    paddingBottom: 20,
                    paddingRight: 15,
                    paddingLeft: 15,
                    margin: "auto",
                  }}
                >
                  Learn a little something about Software Engineering.
                </p>
              </Col>
            </Row>
            <Row>
              {posts.map((post) => (
                <Col xs={12} md={6}>
                  <div style={{ margin: 10, marginBottom: 20 }}>
                    <PostPreview
                      key={post.slug}
                      title={post.title}
                      coverImage={post.coverImage}
                      date={post.date}
                      author={post.author}
                      slug={post.slug}
                      excerpt={post.excerpt}
                      tags={post.tags}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
        <div id="contactme" />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { posts, preview },
  };
}
