interface CSSModule {
  [className: string]: string;
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module '*.module.css' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module 'rehype-react' {
  interface RehypeOptions {
    createElement: any;
    components: any;
  }
  class RehypeReact {
    Compiler: any;
    constructor(options: RehypeOptions);
  }
  export default RehypeReact;
}

export interface IInstagramPostApi {
  caption: string;
  comments: number;
  id: string;
  likes: number;
  localFile: {
    childImageSharp: {
      fluid: {
        aspectRatio: number;
        base64: string;
        sizes: string;
        src: string;
        srcSet: string;
        srcSetWebp: string;
        srcWebp: string;
      };
    };
  };
  username: string;
}

export interface IInstagramPost {
  caption: string;
  id: string;
  likes: number;
  src: string;
}
