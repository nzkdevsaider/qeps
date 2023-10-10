import Logo from "../Branding/Logo";

const SidebarHeader = async () => {
  return (
    <div className="flex flex-row justify-center items-center space-x-5 m-5">
      <div className="bg-primary rounded-xl p-3">
        <Logo icon height={50} width={50} />
      </div>
    </div>
  );
};

export default SidebarHeader;
