import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex md:flex-row flex-col justify-center items-center p-16 my-16 gap-24">
        <div className="text-center md:text-left">
          <h1 className="text-6xl font-bold">
            Organiza tu cartera de clientes
          </h1>
          <h2 className="font-light text-3xl">de manera eficiente</h2>
        </div>
        <div>
          <Image src="/assets/un1.svg" width={600} height={600} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-20 my-16 space-y-5">
        <h1 className="text-4xl">Inicia administrando tus matrículas</h1>
        <span>
          Comienza con una organización, crea tus cursos y comienza a
          administrar tus pagos y matriculas, en un solo lugar de manera
          totalmente automatica.
        </span>
        <Button size="lg">Empezar</Button>
      </div>
    </div>
  );
}
