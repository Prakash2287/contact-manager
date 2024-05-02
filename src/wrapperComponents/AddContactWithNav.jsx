import React from "react";
import AddContact from "../components/AddContact/AddContact";
import { Navigation } from "../components/Navigation/Navigation";

const AddContactWithNav = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Navigation />
      <AddContact/>
    </div>
  );
};

export default AddContactWithNav;
