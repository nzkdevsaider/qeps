const Logo = ({ icon, black, width, height }) => {
  const isBlack = black && "invert";
  return icon ? (
    <img
      src="/icon.svg"
      className={`${isBlack}`}
      alt="Icon"
      width={width}
      height={height}
    />
  ) : (
    <img
      src="/logo.svg"
      className={`${isBlack}`}
      alt="Logo"
      width={width}
      height={height}
    />
  );
};

export default Logo;
