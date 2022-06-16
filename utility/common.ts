import { Id } from "convex-dev/values";

export type Post = {
  _id: Id;
  body: ArrayBuffer;
  time: number;
};
