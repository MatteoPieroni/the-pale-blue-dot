import * as React from 'react';
import styled from '@emotion/styled';
import { IInstagramPost } from '../typings';

export interface IInstagramPostProps {
  post: IInstagramPost;
}

const InstagramPostStyled = styled.article`
  margin: 1rem 1.66666%;
  border: 1px solid #eee;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  max-width: 30%;

  img {
    display: block;
    margin: 0;
    border: 1px solid #eee;
    width: 100%;
  }

  main {
    padding: 1rem;
  }

  h3 {
    position: relative;
    margin: 0;
    max-height: 3.5rem;
    font-size: 1.6rem;
    text-overflow: ellipsis;
    overflow: hidden;

    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 1px;
      background: rgb(255, 255, 255);
      background: linear-gradient(0, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    }
  }

  p {
    margin-bottom: 0;
  }
`;

export const InstagramPost: (props: IInstagramPostProps) => JSX.Element = ({
  post: { caption, id, likes, src },
}) => {
  return (
    <InstagramPostStyled>
      <a href={`https://www.instagram.com/p/${id}/`} target="_blank">
        <img src={src} />
      </a>
      <main>
        <h3>{caption}</h3>
        {/* <p>Likes: {likes}</p> */}
      </main>
    </InstagramPostStyled>
  );
};
