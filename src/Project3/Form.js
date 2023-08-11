import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  return (
    <>
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
          placeholder="John"
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
          placeholder="Doe"
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
          placeholder="johndoe123@abc.com"
        />
      </label>
      <p>First Name: {form.firstName}</p> 
      <p>Last Name: {form.lastName}</p>
      <p>Email: {form.email}</p>
    </>
  );
}
