import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeImage(e) {
    setImage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    console.log(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend name</label>
      <input type="text" value={name} onChange={(e) => handleChangeName(e)} />
      <label>📷 Image URL</label>
      <input type="text" value={image} onChange={(e) => handleChangeImage(e)} />
      <Button>Add</Button>
    </form>
  );
}
