import { useDropzone } from "react-dropzone";
import styles from "../../styles/Home.module.css";
import { Button } from "@mui/material";
import { useQuery, useMutation } from "../../convex/_generated";
import { useEffect } from "react";
import { imgSrcFromArrayBuffer } from "../../utility/utilityFunctions";

const HomeContent: React.FC = () => {
  const {
    getRootProps,
    getInputProps,
    open,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    noClick: true,
  });
  const posts = useQuery("getPosts") || [];
  const uploadPost = useMutation("uploadPost")

  useEffect(()=>{acceptedFiles.forEach(async (file) =>{
    const arrayBuffer = await file.arrayBuffer();
    uploadPost(arrayBuffer)
  });},[acceptedFiles])
  

  return (
      <div className={styles.main}>
        <h1>BAY PEDALS</h1>
        <div>
          {posts.map((post,index)=>{
            const src = imgSrcFromArrayBuffer(post.body);
            return <img key ={index} src={src}/>})}
        </div>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <Button onClick={open}>Upload!</Button>
        </div>
      </div>
  );
};

export default HomeContent;
