"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { userId, getToken } = useAuth();

  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  return (
    <div className="h-screen w-full bg-sky-50">
      <UserButton afterSignOutUrl="/" />
      <h1>{userId}</h1>
      <Link href="/test">TEST</Link>
      <button
        onClick={() => {
          postData("/api", { answer: 42 }).then((data) => {
            console.log(data); // JSON data parsed by `data.json()` call
          });
        }}
        className="mt-12 p-2 bg-red-200"
      >
        API REQUEST
      </button>
    </div>
  );
}
