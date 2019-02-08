import React from "react";

const withSecretToLife = injectedProps => WrappedComponent => {
  const HOC = props => <WrappedComponent {...injectedProps} {...props} />;

  return HOC;
};

export default withSecretToLife;
