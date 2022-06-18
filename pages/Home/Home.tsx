import { useDropzone } from "react-dropzone";
import styles from "../../styles/Home.module.css";
import { Box, Button } from "@mui/material";
import { useQuery, useMutation } from "../../convex/_generated";
import { useEffect } from "react";
import { imgSrcFromArrayBuffer } from "../../utility/utilityFunctions";
import deleteAllPosts from "../../convex/deleteAllPosts";
import Image from "next/image";
import usePostHandlers from "../../handlers/PostHandlers/usePostHandlers";

const HomeContent: React.FC = () => {
  const {uploadImageFromFile,deleteAllPosts,imagePosts} = usePostHandlers();
  const {
    getRootProps,
    getInputProps,
    open,
    acceptedFiles,
  } = useDropzone({
    noClick: true,
  });

  useEffect(()=>{acceptedFiles.forEach((file) =>{
   uploadImageFromFile(file);
  });},[acceptedFiles])
  return (
      <div className={styles.main}>
        <h1>BAY PEDALS</h1>
        <Box flex='1' width='100%' display = 'flex' flexDirection ='column' >
          {imagePosts.map((post,index)=>{
             return <Box key ={index} width = '100%' height = '100%' flex = '1' position = 'relative'><Image  src={post.imgSrc} layout = 'fill' objectFit="contain"/></Box>})} 
         </Box>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <Button onClick={open}>Upload!</Button>
        </div>
      </div>
  );
};

export default HomeContent;
