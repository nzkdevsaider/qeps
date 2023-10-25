import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function POST(request) {
  const jsonData = await request.json();
  const { id, nombre, apellido, username } = jsonData;
  const supabase = createRouteHandlerClient({ cookies });

  const { error } = await supabase.rpc("add_user", {
    id,
    nombre,
    apellido,
    username,
  });

  if (error) {
    // Send an error status to the client
    return NextResponse.json(
      {
        message: "No se pudo añadir a este usuario.",
        error,
      },
      { status: 404 }
    );
  }

  return NextResponse.json({ message: "Usuario añadido con éxito" });
}
