import "./ProjectSection.css";

const ProjectSection = () => {
  return (
    <section id="projects" className="projects">
      <header>
        <h2 className="heading" id="proj-heading">
          Projects
        </h2>
      </header>
      <main>
        <article className="proj-cont">
        { Array(3).fill(0).map((elem)=>( <a href="http://github.com" className="proj">
            <img
              src="placehold.it/1000x1000"
              alt="Project Thumbnail"
              className="proj-img"
            />
            <h3 className="proj-heading orange">Project Name</h3>
            <p className="proj-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              praesentium aliquid odit veniam placeat accusamus dicta nemo ullam
              sapiente eaque iure voluptatem beatae autem possimus, minus
              voluptate ducimus! Labore, quae.
            </p>
          </a>))}
        </article>
      </main>
    </section>
  );
};

export default ProjectSection;
