import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function POST(request) {
  const jsonData = await request.json();
  const { id_user, name, description } = jsonData;
  const supabase = createRouteHandlerClient({ cookies });

  const { error } = await supabase.rpc("add_project", {
    _description: description,
    _id_user: id_user,
    _name: name,
  });

  if (error) {
    // Send an error status to the client
    return NextResponse.json(
      {
        message: "No se pudo añadir este proyecto.",
        error,
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Proyecto añadido con éxito" });
}
