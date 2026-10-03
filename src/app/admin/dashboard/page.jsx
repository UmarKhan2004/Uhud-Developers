'use client'
import React, { useState, useEffect } from "react";

export default function Dashboard() {

  const [loading, setLoading] = useState(false);
  const [inquiries, setInquiries] = useState([])
  const refreshacesssToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    try {
      const result = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ refresh: refreshToken })

      })
      const data = await result.json()
      if (!result.ok) {
        throw new Error("refresh token has expired")
      }
      localStorage.setItem("accessToken", data.access)
      return data.access
    }
    catch (error) {
      console.error("refresh token has expired", error)
    }
  }
  const getInquiry = async () => {
    setLoading(true)

    const accessToken = localStorage.getItem("accessToken");

    try {
      const response = await fetch("http://127.0.0.1:8000/uhudDev/inquiry/", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setInquiries(data)
      }
      else if (response.status === 401) {

        const newaccessToken = await refreshacesssToken()
        if (newaccessToken) {
          getInquiry()
        }
      }
      else {
        alert("Something went wrong")
      }
    }
    catch (error) {
      console.error("Something went wrong", error)
    } finally {
      setLoading(false)
    }
  };
  const updateStatus = async (id, status) => {

    const accessToken = localStorage.getItem("accessToken");

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/uhudDev/inquiry/${id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            status: status,
          }),

        }
      );

      const data = await response.json();

      if (response.ok) {
        setInquiries((prev) =>

          prev.map((item) =>
            item.id === id ? { ...item, status: data.status } : item
          )
        );
      }
      else if (response.status === 401) {
        const newaccessToken = await refreshacesssToken()
        if (newaccessToken) {
          updateStatus(id, status)
        }
      }
      else {
        console.error(data);
        alert("Failed to update status");
      }

    } catch (error) {
      console.error("Something went wrong", error);
    }

  };
  const deleteInquiry = async (id) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const remove = await fetch(`http://127.0.0.1:8000/uhudDev/inquiry/${id}/`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        },

      })
      if (remove.ok) {
        setInquiries((prev) =>
          prev.filter((item) => item.id !== id)
        )
      }
      else if (remove.status === 401) {
        
          const newaccessToken = await refreshacesssToken()
          if (newaccessToken) {
            deleteInquiry(id)
          }
        
      }
      else {
        alert("Something went wrong")
      }
    }
    catch (error) {
      console.error("Something went wrong", error)
    }
  }
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      window.location.href = "/admin/login";
      return;
    }

    getInquiry();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Top Navigation */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex items-center justify-between shadow-md">
        <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
          Admin Dashboard
        </h1>
        <button
          onClick={getInquiry}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
        >
          {loading ? "Refreshing..." : "Refresh Data"}
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 shadow-sm">
            <p className="text-sm font-medium text-gray-400">Total Inquiries</p>
            <p className="text-2xl font-bold text-white mt-1">{inquiries.length}</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 shadow-sm">
            <p className="text-sm font-medium text-gray-400">New Inquiries</p>
            <p className="text-2xl font-bold text-emerald-400 mt-1"> {inquiries.filter(item => item.status === "new").length}</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 shadow-sm">
            <p className="text-sm font-medium text-gray-400">Environment</p>
            <p className="text-2xl font-bold text-blue-400 mt-1">Localhost</p>
          </div>
        </div>

        {/* Inquiries Section */}
        <section className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg overflow-hidden">
          <div className="p-5 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-200">Recent Inquiries</h2>
            <span className="text-xs bg-gray-700 text-gray-300 px-2.5 py-1 rounded-full font-mono">
              {inquiries.length} entries
            </span>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="bg-gray-900/50 text-gray-400 uppercase text-xs font-semibold">
                <tr>
                  <th className="px-6 py-3.5">ID</th>
                  <th className="px-6 py-3.5">Name</th>
                  <th className="px-6 py-3.5">Email</th>
                  <th className="px-6 py-3.5">Message</th>
                  <th className="px-6 py-3.5">Date</th>
                  <th className="px-6 py-3.5">Status</th>

                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {inquiries.length > 0 ? (
                  inquiries.map((item, index) => (
                    <tr key={item.id || index} className="hover:bg-gray-750 transition-colors">
                      <td className="px-6 py-4 font-medium text-white">{item.id || index + 1}</td>
                      <td className="px-6 py-4 text-white font-medium">{item.name || "N/A"}</td>
                      <td className="px-6 py-4 text-gray-300">{item.email || "N/A"}</td>
                      <td className="px-6 py-4 text-gray-400 max-w-xs truncate">{item.message || "N/A"}</td>
                      <td className="px-6 py-4 text-gray-400 whitespace-nowrap">
                        {item.created_at ? new Date(item.created_at).toLocaleDateString() : "N/A"}
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={item.status}
                          onChange={(e) => updateStatus(item.id, e.target.value)}
                          className="bg-gray-700 text-white px-3 py-2 rounded-lg"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="completed">Completed</option>
                        </select>
                        <button className="ml-3 bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors" onClick={()=>deleteInquiry(item.id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                      {loading ? "Fetching inquiries from server..." : "No inquiries found."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="block md:hidden divide-y divide-gray-700">
            {inquiries.length > 0 ? (
              inquiries.map((item, index) => (
                <div key={item.id || index} className="p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">{item.name || "N/A"}</span>
                    <span className="text-xs text-gray-400 font-mono">#{item.id || index + 1}</span>
                  </div>
                  <p className="text-sm text-blue-400">{item.email || "N/A"}</p>
                  <p className="text-sm text-gray-300 bg-gray-900/40 p-2.5 rounded-lg border border-gray-700/50">
                    {item.message || "N/A"}
                  </p>
                  {item.created_at && (
                    <p className="text-xs text-gray-500 pt-1">
                      {new Date(item.created_at).toLocaleDateString()}
                    </p>

                  )}

                  <p className="text-sm text-emerald-400">
                    Status: {item.status || "N/A"}
                  </p>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500 text-sm">
                {loading ? "Fetching inquiries from server..." : "No inquiries found."}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );

}