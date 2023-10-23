import LogoutButton from "@/components/Buttons/LogoutButton";
import { OnboardForm } from "@/components/Forms/OnboardForm";

const page = () => {
  return (
    <div className="flex flex-col w-2/5 h-auto bg-white rounded-sm p-5 space-y-5">
      <h1 className="text-4xl font-bold">
        Rellena los datos necesarios para comenzar
      </h1>
      <OnboardForm />
      <LogoutButton/>
    </div>
  );
};

export default page;
