"use client";

import { signIn } from "next-auth/react";
import { useRef } from "react";

const LoginPage = () => {
  const username = useRef("");
  const password = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: username.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div>
      <h1>Login page</h1>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => {
            username.current = e.target.value;
          }}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            password.current = e.target.value;
          }}
        />
      </div>
      <div>
        <button onClick={onSubmit}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
