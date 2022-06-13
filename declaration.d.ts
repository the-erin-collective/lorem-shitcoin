declare module "*.css";
declare module "*.scss";
declare module '*.jpg';
declare module '*.png';

declare module "*.svg" {
    const content: any;
    export default content;
  }