// app/page.tsx  — no 'use client' needed, this is a Server Component
export default function HomePage() {
  const fakeVideos = [
    { id: "1", title: "My first video" },
    { id: "2", title: "Test clip" },
  ];

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">FluxStream</h1>
      <div className="grid grid-cols-3 gap-4">
        {fakeVideos.map((v) => (
          <a
            key={v.id}
            href={`/watch/${v.id}`}
            className="border rounded-lg p-4 hover:shadow-md"
          >
            <div className="bg-gray-200 h-32 rounded mb-2" />
            <p className="font-medium">{v.title}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
