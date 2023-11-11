import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const ProjectSelectorPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: projects } = await supabase
    .from("proyectos")
    .select("id, proyecto_info(*)")
    .eq("id_user", user.id);

  console.log(projects);
  return (
    <div className="flex flex-col justify-center gap-5 h-screen items-center">
      <Card className="w-2/4">
        <CardHeader>
          <CardTitle>Selecciona tu proyecto</CardTitle>
        </CardHeader>
        <CardContent>
          {projects.map((project) => (
            <div key={project.id}>
              {project.proyecto_info.map((info) => (
                <>
                  <CardTitle key={info.id}>{info.name}</CardTitle>
                  <CardDescription key={info.id}>
                    {info.description}
                  </CardDescription>
                </>
              ))}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectSelectorPage;
