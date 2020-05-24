import React from "react";
export default function Pet({ name, animal, breed }) {
  return React.createElement("div", null, [
    React.createElement("h1", null, name),
    React.createElement("h2", null, animal),
    React.createElement("h2", null, breed),
  ]);
}
