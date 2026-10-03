'use client'
import React,{useState} from "react";
import { useRouter } from "next/navigation";
export default function Login(){
    const [password,setPassword]=useState('')
    const [userName,setUserName]=useState('')
    const body = {
    username: userName,
    password: password
}
const router=useRouter()
    const handleSubmit=async(e)=>{
e.preventDefault()

try{const response=await fetch("http://127.0.0.1:8000/api/token/",{
    method:"POST",
    headers:{
"content-type":"application/json"
    },
    body:JSON.stringify(body)
})
const data=await response.json()
if(response.ok){
   const accessToken=localStorage.setItem("accessToken", data.access)
   const refreshToken=localStorage.setItem("refreshToken",data.refresh)
   alert("Login Succeeded")
   router.push("/admin/dashboard");
}else{
alert("Login unsuccessful Please try again!")
}
}
catch(error){
console.error("login unsuccessfull",error)
}
    }

    return (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
    <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8">

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white">
          Admin Login
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          Sign in to manage inquiries
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Username
          </label>

          <input
            type="text"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-lg outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-lg outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 rounded-lg transition-colors duration-200 shadow-md"
        >
          Log in
        </button>

      </form>
    </div>
  </div>
)
}