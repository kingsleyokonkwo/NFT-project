import React from 'react';
import Form from "./Form";

export default function MetaverseForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
      };
  return (
    <div className="crypto-form">
      <Form onSubmit={handleSubmit} />
    </div>
  )
}
