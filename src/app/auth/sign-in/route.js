import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function POST(request) {
  const formData = await request.json();
  const email = String(formData.email);
  const password = String(formData.password);
  const supabase = createRouteHandlerClient({ cookies });

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    // Send an error status to the client
    return NextResponse.json(
      { message: "No se pudo autenticar este usuario." },
      { status: 404 }
    );
  }

  // Redirect to /dashboard after successful login
  return NextResponse.json({ message: "Inicio de sesión exitoso" });
}
