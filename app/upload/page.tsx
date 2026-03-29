// app/upload/page.tsx
"use client";
import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  async function handleUpload() {
    const res = await fetch("/api/upload", { method: "POST" });
    const data = await res.json();
    console.log(data); // check browser console
  }
  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Upload video</h1>
      <div className="border-2 border-dashed rounded-lg p-12 text-center">
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        {file && <p className="mt-4 text-sm text-gray-600">{file.name}</p>}
      </div>
      <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg w-full">
        Upload
      </button>
      <button onClick={handleUpload}>test</button>
    </main>
  );
}
