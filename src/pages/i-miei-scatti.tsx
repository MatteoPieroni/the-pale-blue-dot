import * as React from 'react';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { IInstagramPost, IInstagramPostApi } from '../typings';

import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import { InstagramPost } from '../components/InstagramPost';

interface IInstagramQuery {
  edges: {
    node: IInstagramPostApi;
  }[];
}

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const extractInstagramPostDetails: (
  query: IInstagramQuery,
) => IInstagramPost[] | null = allInstaNodes => {
  const { edges } = allInstaNodes || {};
  console.log(allInstaNodes);

  if (edges && edges.length > 0) {
    return edges.map(
      ({
        node: {
          caption,
          id,
          likes,
          localFile: {
            childImageSharp: {
              fluid: { src },
            },
          },
        },
      }) => ({
        caption,
        id,
        likes,
        src,
      }),
    );
  }

  return null;
};

const About: React.FC<{ data: any }> = ({ data: { allInstaNode } }) => {
  const instagramPosts = extractInstagramPostDetails(allInstaNode);

  return (
    <IndexLayout>
      <Helmet>
        <title>I miei scatti</title>
      </Helmet>
      <Wrapper css={PageTemplate}>
        <header css={[outer, SiteHeader]}>
          <div css={inner}>
            <SiteNav />
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader>
              <PostFullTitle>CIAO, SONO…</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                Nodi
                {instagramPosts &&
                  instagramPosts.map(post => <InstagramPost post={post} key={post.id} />)}
                {console.log(instagramPosts)}
              </div>
            </PostFullContent>
          </article>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default About;

export const pageQuery = graphql`
  query ScrapingQuery {
    allInstaNode {
      edges {
        node {
          id
          username
          likes
          caption
          comments
          localFile {
            childImageSharp {
              fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
