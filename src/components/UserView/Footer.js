import Link from "next/link";
import Logo from "../Branding/Logo";

const categories = [
  {
    name: "Categoría 1",
    content: [
      {
        name: "Enlace 1",
        url: "#",
      },
      {
        name: "Enlace 2",
        url: "#",
      },
      {
        name: "Enlace 3",
        url: "#",
      },
    ],
  },
  {
    name: "Categoría 2",
    content: [
      {
        name: "Enlace 1",
        url: "#",
      },
      {
        name: "Enlace 2",
        url: "#",
      },
      {
        name: "Enlace 3",
        url: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row bg-red-600 text-white p-10 px-16 gap-10 mt-auto">
      <div className="flex flex-col justify-center items-center space-y-5 md:pr-44">
        <Logo width={200} height={50} />
        <span className="text-white">Sistema de Matricula y Pagos</span>
      </div>
      <div className="flex flex-row justify-center gap-10">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col">
            <h1 className="text-2xl">{category.name}</h1>
            {category.content.map((link, index) => (
              <span key={index}>
                <Link href={link.url}>{link.name}</Link>
              </span>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
