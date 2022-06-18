import { useEffect } from "react";
import { useQuery, useMutation } from "../../convex/_generated";
import { imgSrcFromArrayBuffer } from "../../utility/utilityFunctions";

const usePostHandlers = () => {
  const uploadPost = useMutation("uploadPost");
  const rawImagePosts = useQuery("getPosts");
  const deleteAllPosts = useMutation("deleteAllPosts");

  const imagePosts =
    rawImagePosts?.map((post) => {
      return { ...post, imgSrc: imgSrcFromArrayBuffer(post.buffer) };
    }) || [];

  const uploadImageFromFile = async (file: File) => {
    //todo: downsample the image so it's < 1mb
    const arrayBuffer = await file.arrayBuffer();
    uploadPost(arrayBuffer);
  };

  const uploadText = () => {
    //TODO: create a convex function for uploading and retrieving text posts
  };

  return { uploadImageFromFile, uploadText, deleteAllPosts, imagePosts };
};
export default usePostHandlers;
