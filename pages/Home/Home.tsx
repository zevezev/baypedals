import { useDropzone } from "react-dropzone";
import styles from "../../styles/Home.module.css";
import { Box, Button } from "@mui/material";
import { useQuery, useMutation } from "../../convex/_generated";
import { useEffect } from "react";
import { imgSrcFromArrayBuffer } from "../../utility/utilityFunctions";
import deleteAllPosts from "../../convex/deleteAllPosts";
import Image from "next/image";
import usePostHandlers from "../../handlers/PostHandlers/usePostHandlers";
import { styled } from "@mui/system";
import Post from "../components/Post/Post";
import PostList from "../components/Post/PostList";

const HomeContent: React.FC = () => {
  const { uploadImageFromFile, deleteAllPosts, imagePosts } = usePostHandlers();
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
  });

  useEffect(() => {
    acceptedFiles.forEach((file) => {
      uploadImageFromFile(file);
    });
  }, [acceptedFiles]);
  //...fix the linter somehow
  return (
    <div className={styles.main}>
      <h1>BAY PEDALS: your Bay Area biker zine</h1>
      <PostList />
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <Button onClick={open}>Upload!</Button>
      </div>
    </div>
  );
};

const IssueViewBox = styled("div")({
  flex: "1",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
});

export default HomeContent;
