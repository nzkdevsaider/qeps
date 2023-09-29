import Image from "next/image";

const Logo = ({ icon, width, height, color = "black" }) => {
  return (
    <div className="logo">
      <Image
        src={icon ? "/icon.svg" : "/logo.svg"}
        width={width}
        height={height}
        className={`fill-${color}`}
      />
    </div>
  );
};

export default Logo;
