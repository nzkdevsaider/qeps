import Link from "next/link";
import Logo from "../Branding/Logo";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center md:flex-row justify-between bg-black py-10 px-5 md:px-14 text-white">
      <Logo height={190} width={190} />
      <div className="flex md:flex-row flex-col justify-center items-center">
        <Button variant="ghost">Producto</Button>
        <Button variant="ghost">Caracteristicas</Button>
        <Button variant="ghost">Precios</Button>
        <Button variant="ghost">Politica de privacidad</Button>
        <Button variant="ghost">Contacto</Button>
      </div>
    </footer>
  );
};

export default Footer;
