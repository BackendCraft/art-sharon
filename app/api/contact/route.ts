import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "data", "messages.json");

// 📌 Manejar POST (Guardar un mensaje)
export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // 📌 Leer los mensajes guardados
    let messages = [];
    try {
      const data = await fs.readFile(FILE_PATH, "utf8");
      messages = JSON.parse(data);
    } catch (error) {
      console.log("No existing messages file, creating a new one.");
    }

    // 📌 Agregar el nuevo mensaje
    const newMessage = { id: Date.now(), name, email, message, date: new Date().toISOString() };
    messages.push(newMessage);

    // 📌 Guardar en el archivo JSON
    await fs.writeFile(FILE_PATH, JSON.stringify(messages, null, 2), "utf8");

    return NextResponse.json({ message: "Message saved successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }
}

// 📌 Manejar GET (Obtener todos los mensajes)
export async function GET() {
  try {
    const data = await fs.readFile(FILE_PATH, "utf8");
    const messages = JSON.parse(data);
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "No messages found" }, { status: 404 });
  }
}
