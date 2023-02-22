import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "../../features/PostsSlice";
const AddPostForm = () => {
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onImgChanged = (e) => setImg(e.target.value);
  const onSavedPostClicked = () => {
    if (description & img) {
      dispatch(
        postAdded({
          id: nanoid(),
          description,
          img,
        })
      );
      setDescription("");
      setImg("");
    }
  };
  return (
    <section>
      <h2>Add a new Post</h2>
      <form>
        <label htmlFor="" className="">
          Image:{" "}
        </label>
        <input
          name="image"
          type="text"
          className=""
          value={img}
          placeholder="Image of the post"
          onChange={onImgChanged}
        />
        <label htmlFor="" className="">
          Image:{" "}
        </label>
        <textarea
          name="img"
          type="text"
          className=""
          value={description}
          placeholder="Image of the post"
          onChange={onDescriptionChanged}
        />
        <button type="button">Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
