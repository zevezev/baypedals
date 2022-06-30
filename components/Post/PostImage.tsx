import React from "react";
import { Post } from "../../utility/common";
import Image from "next/image";
import { styled } from "@mui/system";

function PostImage({ post }: { post: Post }) {
  return (
    <ImageBox>
      <Image
        src={post.imgSrc || ""}
        alt={post.description}
        layout="fill"
        objectFit="contain"
      />
    </ImageBox>
  );
}
const ImageBox = styled("div")({
  width: "100%",
  //TODO:use breakpoints
  height: "600px",
  flex: "1",

  position: "relative",
});
export default PostImage;
