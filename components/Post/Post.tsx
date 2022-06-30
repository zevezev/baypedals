import React from "react";
import { Post } from "../../utility/common";
import Image from "next/image";
import { styled } from "@mui/system";
import PostImage from "./PostImage";
//TODO: do more design. should posts have an image and text?
//should they have 2 components, regardless?

function Post({ post }: { post: Post }) {
  return (
    <PostBox>
      <PostImage post={post} />
    </PostBox>
  );
}
const PostBox = styled("div")({
  flex: 1,
  //TODO: use mediaquery to get the height of the parent container
  minHeight: "750px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export default Post;
