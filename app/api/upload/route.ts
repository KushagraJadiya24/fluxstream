import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const file: File | null = data.get("video") as unknown as File;

    if (!file) {
      return Response.json({ message: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filePath = path.join(process.cwd(), "uploads", file.name);

    await writeFile(filePath, buffer);

    return Response.json({
      message: "Upload successful!",
      filename: file.name,
    });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Upload failed" }, { status: 500 });
  }
}
