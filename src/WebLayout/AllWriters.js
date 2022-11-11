import React, { useState, useEffect } from "react";
import Loading from "../Notfound/Loading";
import WriterCard from "./WriterCard";

import "./AllWriters.css";

const AllWriters = () => {
  const [writers, setWriters] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/user/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setWriters(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div className="w-full h-screen relative px-8">
        <div
          className="absolute top-[calc(50vh-37%)] left-[calc(50vw-45%)]
           flex flex-col w-[90%] mx-auto px-1 py-3"
        >
          <h1 className="text-center text-gray-100">All Writers</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 w-full py-3 mt-3 place-items-center">
            {writers.length !== 0 ? (
              writers.map((writer) => {
                return <WriterCard writer={writer} />;
              })
            ) : (
              <p className="font-semibold md:col-span-2 lg:col-span-3 pt-20">
                No Writers signed up yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllWriters;
