import { mutation } from "convex-dev/server";
import { Id } from "convex-dev/values";
import { Post } from "../utility/common";

// Send a chat message.
export default mutation(({ db }, buffer: ArrayBuffer) => {
  const post: Post = { buffer, time: Date.now() };
  db.insert("posts", post);
});
