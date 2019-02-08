import React from "react";

import withSecretToLife from "../HOC/WithSecretToLife";

const SecretToLife = ({ secretToLife }) => {
  // destructuring props right inside arguments parentheses
  return (
    <div className="app-sol">
      Secret to life: <strong>{secretToLife}</strong>
    </div>
  );
};

export default withSecretToLife(SecretToLife);
