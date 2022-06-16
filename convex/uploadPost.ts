import { mutation } from "convex-dev/server";
import { Id } from "convex-dev/values";

// Send a chat message.
export default mutation(({ db }, body: ArrayBuffer) => {
  const post = { body, time: Date.now() };
  db.insert("posts", post);
});
