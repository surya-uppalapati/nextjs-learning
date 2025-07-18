import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h3>Welcome to Next, Please Authenticate yourself!</h3>
      {children}
    </div>
  );
};

export default AuthLayout;
