import { Id } from "convex-dev/values";

// TODO: need an issue, page number, author, note
export type Post = {
  _id?: Id;
  buffer: ArrayBuffer;
  imgSrc?: string;
  time: number;
};
