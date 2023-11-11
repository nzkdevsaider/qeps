"use client";
import Link from "next/link";
import Logo from "../Branding/Logo";
import { Button } from "../ui/button";
import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <navbar className="flex px-10 md:px-52 py-5 justify-between items-center flex-row">
      <Logo black icon height={90} width={90} />
      <div className="space-x-5 hidden md:block">
        <Button variant="ghost">Producto</Button>
        <Button variant="ghost">Caracteristicas</Button>
        <Button variant="ghost">Precios</Button>
      </div>
      <Link href="/login">
        <Button className="hidden md:block">Iniciar Sesión</Button>
      </Link>
      <Button onClick={() => setOpen(!open)} className="md:hidden">
        <IconMenu2 size={30} />
      </Button>
      <div
        className={`${
          open ? "flex" : "hidden"
        } flex-col absolute top-0 right-0 bg-white w-full h-2/5 z-50 animate-in`}
      >
        <div className="flex flex-row items-center justify-between px-10 py-5">
          <Logo black icon height={90} width={90} />
          <Button onClick={() => setOpen(!open)}>
            <IconMenu2 size={30} />
          </Button>
        </div>
        <div className="flex flex-col space-y-3 my-3 px-3">
          <Button variant="outline">Producto</Button>
          <Button variant="outline">Caracteristicas</Button>
          <Button variant="outline">Precios</Button>
          <Button>Iniciar Sesión</Button>
        </div>
      </div>
    </navbar>
  );
};

export default NavBar;
