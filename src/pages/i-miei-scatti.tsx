import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
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
import config from '../website-config';

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

const InstagramGrid = styled.div`
  display: flex;
  flex-wrap: wrap;

  article {
    margin: 1rem 1%;
    max-width: 48%;

    @media screen and (min-width: 768px) {
      margin: 1rem 1.66666%;
      max-width: 30%;
    }
  }
`;

const InstagramLink = styled.div`
  margin: 2rem auto;
  text-align: center;

  a {
    border: #3c3c3c 1px solid;
    border-radius: 20px;
    padding: 7px 10px;
    color: #3c3c3c;
    line-height: 1em;
    box-shadow: none;

    :hover {
      background: #3c3c3c;
      color: #fff;
      text-decoration: none;
      cursor: pointer;
    }
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
              <PostFullTitle>I miei scatti</PostFullTitle>
            </PostFullHeader>
            <PostFullContent className="post-full-content">
              <div className="post-content">
                <InstagramGrid>
                  {instagramPosts &&
                    instagramPosts.map(post => <InstagramPost post={post} key={post.id} />)}
                </InstagramGrid>
                <InstagramLink>
                  <a
                    href={config.instagram}
                    target="_blank"
                    title="Pagina Instagram"
                    rel="noopener noreferrer"
                  >
                    Vedi tutti i miei scatti
                  </a>
                </InstagramLink>
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
