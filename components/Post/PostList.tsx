import { styled } from "@mui/system";
import React from "react";
import usePostHandlers from "../../handlers/PostHandlers/usePostHandlers";
import Post from "./Post";

// TODO: should this read as scrollable, or as a book?
function PostList() {
  const { imagePosts } = usePostHandlers();

  return (
    <IssueViewBox>
      {imagePosts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </IssueViewBox>
  );
}
const IssueViewBox = styled("div")({
  flex: "1",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
});
export default PostList;
