import React from 'react';
import Form from "./Form";

export default function MetaverseForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
      };
  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}
