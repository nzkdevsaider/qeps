import { Button } from "@/components/ui/button";
import { IconCloud } from "@tabler/icons-react";
import { IconCurrency } from "@tabler/icons-react";
import { IconShield } from "@tabler/icons-react";
import { IconAddressBook } from "@tabler/icons-react";
import Image from "next/image";

const items = [
  {
    icon: IconAddressBook,
    title: "Seguimiento de clientes",
    description:
      "Dale un seguimiento al historial de tus clientes y obtén una retroalimentación inmediata.",
  },
  {
    icon: IconShield,
    title: "Fácil y seguro",
    description:
      "Tus datos están seguros con nosotros, además de que podrás acceder a ellos desde cualquier dispositivo.",
  },
  {
    icon: IconCloud,
    title: "Accesible desde la nube",
    description:
      "Podrás acceder a tu cuenta desde cualquier dispositivo con acceso a internet.",
  },
  {
    icon: IconCurrency,
    title: "Administra tus pagos",
    description:
      "Administra tus pagos y facturas de manera fácil y rápida, además de que podrás generar reportes de tus ventas.",
  },
];

export default async function Home() {
  return (
    <div className="grid grid-cols-1 gap-5 my-20">
      {/* Hero */}
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-10 py-10">
          <h1 className="text-5xl font-bold text-center">
            El{" "}
            <div className="relative inline-block">
              <span>CRM ideal</span>
              <div className="pl-5">
                <Image src="./assets/underline.svg" width={190} height={190} />
              </div>
            </div>{" "}
            para administrar tu cartera de clientes.
          </h1>
          <p className="text-xl text-center">
            Conoce a tus clientes, crea campañas de marketing y aumenta tus
            ventas.
          </p>
          <Image src="./assets/un_line.svg" width={800} height={800} />
        </div>
      </div>
      <div className="container" id="features">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:mx-14">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col justify-center gap-5">
              <item.icon
                className="text-white bg-black rounded-md p-3"
                size={70}
              />
              <h1 className="text-4xl font-bold">{item.title}</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
