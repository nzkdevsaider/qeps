import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-10">
      <div className="flex flex-row justify-center items-center bg-slate-100 py-20 gap-24">
        <div>
          <h1 className="text-4xl font-bold">
            Organiza tu cartera de clientes
          </h1>
          <h2 className="font-light text-3xl">de manera eficiente</h2>
        </div>
        <div>
          <Image src="/assets/un1.svg" width={400} height={400} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-20 space-y-5">
        <h1 className="text-4xl">Inicia a administrar tus matrículas</h1>
        <Button>Empezar</Button>
      </div>
    </div>
  );
}
