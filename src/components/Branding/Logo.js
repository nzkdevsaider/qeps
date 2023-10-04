import Image from "next/image";

const Logo = ({ icon, width, height }) => {
  return (
    <div className="logo flex flex-row gap-4 items-center">
      <Image
        src={icon ? "/icon.svg" : "/logo.svg"}
        alt="Logo"
        width={width}
        height={height}
      />
    </div>
  );
};

export default Logo;
