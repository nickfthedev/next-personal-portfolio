import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export const pageInfo = {
  pageName: "Personal Portfolio of Max Mustermann",
  pageOwner: "Max Mustermann",
  currentYear: new Date().getFullYear().toString(),
  githubProfile: "https://www.github.com/nextjs",
};

interface projectInterface {
  id: number;
  name: string;
  year: string;
  status: string;
  logo: string;
  description: string;
}

const projects: projectInterface[] = [
  {
    id: 1,
    name: "Windows 95",
    year: "1995",
    status: "LIVE",
    logo: "", // Put logo in public folder and use filename here (without public)
    description: "Yes, that was me (not)",
  },
  {
    id: 2,
    name: "Windows 98",
    year: "1998",
    status: "STILL LIVE",
    logo: "",
    description: "Guilty",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl tracking-tighter font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-600 via-blue-300">
          {pageInfo.pageOwner}
        </h1>
        <p className="text-xl tracking-wider text-gray-400 font-semibold ">
          Personal Portfolio
        </p>
        <Link href={pageInfo.githubProfile} target="_blank">
          <button className="mt-8 inline-flex items-center px-6 py-3 bg-gray-200 text-black text-sm rounded-lg hover:bg-gray-300">
            <FaGithub size={24} className="mr-2" />
            Visit my Github
          </button>
        </Link>
      </div>
      <div className="w-full mx-auto flex flex-wrap justify-center mt-10 gap-2 max-w-4xl">
        <div>
          <h2 className="text-xl font-semibold tracking-tighter text-gray-600">
            Current Projects
          </h2>
        </div>
        {projects.map((project) => (
          <div key={project.id} className="w-full">
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 flex flex-row items-center text-left">
              <div className="flex items-center justify-center w-24 h-24 rounded-full shadow-md">
                {project.logo ? (
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gray-400"></div>
                )}
              </div>
              <div className="mx-5">
                <div>
                  <h2 className="text-lg font-bold">{project.name}</h2>
                  <p className="text-gray-600">
                    Started in: {project.year} - Status:{" "}
                    <span
                      className={`${
                        project.status === "LIVE"
                          ? "text-green-500 font-semibold"
                          : "text-gray-500 font-semibold"
                      }`}
                    >
                      {project.status}
                    </span>
                  </p>
                </div>
                <p className="text-gray-700 mt-2">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
