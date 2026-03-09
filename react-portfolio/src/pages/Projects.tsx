import { useEffect, useState } from "react";
import  data  from "../data/projects.json";
import ProjectCard from "../composants/ProjectCard";

type Project = {
    id:number;
    title: string;
    description: string;
    image: string;
};

const Projects = () => {
    const [projects, setProjects] = useState<Project[]> ([]);

    useEffect(() => {
        // simuler un projet
        setProjects(data);
    }, []);
    return (
        <section>
            <h2>Mes Projets</h2>
            <div className="projet-list">
                {projects.map((project)=>(
                    <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                />
                ))}
            </div>
        </section>
    );
};

export default Projects;