//CAREFUL WITH THIS FUNCTION
import { mutation } from "convex-dev/server";
import { Id } from "convex-dev/values";
import { Post } from "../utility/common";

// Send a chat message.
export default mutation(async ({ db }) => {
  const posts: Post[] = await db.table("posts").collect();
  posts.forEach((post) => {
    if (post._id) db.delete(post._id);
  });
});
