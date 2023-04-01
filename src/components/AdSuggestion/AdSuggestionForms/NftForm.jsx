import React from "react";
import Form from "./Form";

export default function NftForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}
