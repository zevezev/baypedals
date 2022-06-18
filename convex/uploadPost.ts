import { mutation } from "convex-dev/server";
import { Id } from "convex-dev/values";
import { Post } from "../utility/common";

// TODO: enable description
export default mutation(({ db }, buffer: ArrayBuffer) => {
  const post: Post = { buffer, time: Date.now(), description: "", imgSrc: "" };
  db.insert("posts", post);
});
