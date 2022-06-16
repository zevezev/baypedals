import { query } from "convex-dev/server";
import { Post } from "../utility/common";

// List all chat messages.
export default query(
  async ({ db }): Promise<Post[]> => {
    return await db.table("posts").collect();
  }
);
