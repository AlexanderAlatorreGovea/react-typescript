import React, { useState } from "react";
import { IState as Props } from "./App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        age: number;
        url: string;
        note?: string;
      }[]
    >
  >;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    url: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    const { name, age, url, note } = input;
    if (!name || !age || !url) {
      return;
    }

    setPeople([
      ...people,
      {
        name: name,
        age: +age,
        url: url,
        note: note,
      },
    ]);

    setInput({
      name: "",
      age: "",
      note: "",
      url: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        value={input.name}
        type="text"
        placeholder="Name"
        className="AddToList-input"
        onChange={handleChange}
        name="name"
      />
      <input
        value={input.age}
        type="number"
        placeholder="Age"
        className="AddToList-input"
        onChange={handleChange}
        name="age"
      />
      <input
        value={input.url}
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        onChange={handleChange}
        name="url"
      />
      <textarea
        value={input.note}
        placeholder="Notes"
        className="AddToList-input"
        onChange={handleChange}
        name="note"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
