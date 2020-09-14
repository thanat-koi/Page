import React from "react";

export default function Input({ addPost }) {
  return (
    <div className="Input">
      <div className="Input__header">Create Post</div>
      <input className="Input__field" type="text" />
    </div>
  );
}
