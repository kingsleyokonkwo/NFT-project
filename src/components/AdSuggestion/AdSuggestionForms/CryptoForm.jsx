import React from "react";
import Form from "./Form";

export default function CryptoForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}
