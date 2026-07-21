import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useAuth } from "../contex/AuthContext";
import api from "../api/axios";
import { useNavigate } from "react-router";

export default function Login() {
      const navigate = useNavigate();

      const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e:any) => {
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      // Save user globally
      setUser(response.data.user);

      // Redirect after login
      navigate("/");

    } catch (error) {
console.log(error)

    } 
  };

  const handleLogout = async (e:any) => {
    try {
        const response = await api.post("auth/logout")
        console.log(response)
    }
    catch (error) {
console.log(error)

    } 
  }


  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-400/10 blur-[150px] rounded-full" />

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          relative z-10
          w-full max-w-md
          rounded-3xl
          border border-zinc-800
          bg-zinc-950/80
          backdrop-blur-xl
          p-8
          shadow-2xl
        "
      >

        {/* Terminal header */}
        <div className="mb-8">
          <p className="text-sm text-zinc-500 font-mono">
            $ welcome_to_jeren.org
          </p>

          <h1 className="mt-4 text-3xl font-semibold">
            Welcome back
          </h1>

          <p className="text-zinc-400 mt-2">
            Sign in to continue your journey.
          </p>
        </div>


        {/* Email */}
        <div className="mb-5">
          <label className="text-sm text-zinc-400">
            Email
          </label>

          <div className="
            mt-2 flex items-center gap-3
            rounded-xl
            border border-zinc-800
            bg-black
            px-4 py-3
            focus-within:border-cyan-400
            transition
          ">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-zinc-500"
            />

            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="you@example.com"
              className="
                bg-transparent
                outline-none
                w-full
                text-white
                placeholder:text-zinc-600
              "
            />
          </div>
        </div>


        {/* Password */}
        <div className="mb-7">
          <label className="text-sm text-zinc-400">
            Password
          </label>

          <div className="
            mt-2 flex items-center gap-3
            rounded-xl
            border border-zinc-800
            bg-black
            px-4 py-3
            focus-within:border-cyan-400
            transition
          ">
            <FontAwesomeIcon
              icon={faLock}
              className="text-zinc-500"
            />

            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="••••••••"
              className="
                bg-transparent
                outline-none
                w-full
                text-white
                placeholder:text-zinc-600
              "
            />
          </div>
        </div>


        {/* Button */}
        <button
          className="
            group
            w-full
            flex items-center justify-center gap-3
            rounded-xl
            bg-cyan-400
            text-black
            font-semibold
            py-3
            hover:bg-cyan-300
            transition
          "
          onClick={handleLogin}
        >
          Continue

          <FontAwesomeIcon
            icon={faArrowRight}
            className="
              group-hover:translate-x-1
              transition
            "
          />
        </button>


        {/* Register */}
        <p className="
          text-center
          text-sm
          text-zinc-500
          mt-7
        ">
          New here?{" "}
          <button className="
            text-cyan-400
            cursor-pointer
            hover:underline
          " onClick={handleLogout}>
            Create account
          </button>
        </p>


        {/* Status */}
        <div className="
          mt-8
          text-xs
          font-mono
          text-zinc-600
        ">
          {">"} system.ready ✓
        </div>

      </motion.div>

    </div>
  );
}