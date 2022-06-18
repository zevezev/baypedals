import { query } from "convex-dev/server";
import { Post } from "../utility/common";
import { imgSrcFromArrayBuffer } from "../utility/utilityFunctions";

// List all image posts.
//TODO: eventually list image by issue
export default query(
  async ({ db }): Promise<Post[]> => {
    return await db.table("posts").collect();
  }
);
