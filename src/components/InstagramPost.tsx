import * as React from 'react';
import { IInstagramPost } from '../typings';

export interface IInstagramPostProps {
  post: IInstagramPost;
}

export const InstagramPost: (props: IInstagramPostProps) => JSX.Element = ({
  post: { caption, id, likes, src },
}) => {
  return (
    <div>
      <a href={`https://www.instagram.com/p/${id}/`} target="_blank">
        <img src={src} />
      </a>
      <h2>{caption}</h2>
      <p>Likes: {likes}</p>
    </div>
  );
};
