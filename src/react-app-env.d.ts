/// <reference types="react-scripts" />

declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module "react/jsx-runtime" {
  export default any;
}

declare module "react/react" {
  export default any;
}
