import Project1Large from "../assets/images/modern-art-gallery.png";
import Project2Large from "../assets/images/ultimate-tech-book-club.png";
import Project3Large from "../assets/images/devjobs-web-app.png";

const Projects = () => {
  return (
    <section className="projects w-full max-w-[70rem] px-3">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-[2.5em] lg:text-[5.5em] tracking-[-2.5px]">
          Projects
        </h1>
        <a href="#contact">
          <p className="font-medium text-[#D9D9D9] text-base tracking-[2.29px] border-b-2 border-[#4EE1A0] pb-1 hover:text-[#4EE1A0]">
            Contact me
          </p>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-x-[2rem] gap-y-20">
        <div className="project-1">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-md">
            <img
              src={Project1Large}
              alt="Design Portfolio Image"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="font-bold text-2xl/8 uppercase mt-5">
            Modern Art Gallery
          </h3>
          <span className="flex font-medium text-[#D9D9D9] text-lg/7 gap-[1.125em] mt-2">
            <p>ReactJS</p> <p>TailwindCSS</p>
          </span>
          <span className="flex font-bold gap-4 uppercase text-[#D9D9D9] mt-3">
            <a
              href="https://modernartgallery.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="border-b-2 border-[#4EE1A0] pb-2 hover:text-[#4EE1A0]">
                View project
              </p>
            </a>
            <a
              href="https://github.com/dantheuri/art-gallery-website.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="border-b-2 border-[#4EE1A0] pb-2 hover:text-[#4EE1A0]">
                View code
              </p>
            </a>
          </span>
        </div>
        <div className="project-2">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-md">
            <img
              src={Project2Large}
              alt="Design Portfolio Image"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="font-bold text-2xl/8 uppercase mt-5">
            Ultimate Tech Book Club
          </h3>
          <span className="flex font-medium text-[#D9D9D9] text-lg/7 gap-[1.125em] mt-2">
            <p>ReactJS</p> <p>TailwindCSS</p>
          </span>
          <span className="flex font-bold gap-4 uppercase text-[#D9D9D9] mt-3">
            <a
              href="https://ultimatetechbookclub.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="border-b-2 border-[#4EE1A0] pb-2 hover:text-[#4EE1A0]">
                View project
              </p>
            </a>
            <a
              href="https://github.com/dantheuri/tech-book-club-landing-page.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="border-b-2 border-[#4EE1A0] pb-2 hover:text-[#4EE1A0]">
                View code
              </p>
            </a>
          </span>
        </div>
        <div className="project-2">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-md">
            <img
              src={Project3Large}
              alt="Design Portfolio Image"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="font-bold text-2xl/8 uppercase mt-5">
            Devjobs Web App
          </h3>
          <span className="flex font-medium text-[#D9D9D9] text-lg/7 gap-[1.125em] mt-2">
            <p>ReactJS</p> <p>TailwindCSS</p>
          </span>
          <span className="flex font-bold gap-4 uppercase text-[#D9D9D9] mt-3">
            <a
              href="https://devjobhub.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="border-b-2 border-[#4EE1A0] pb-2 hover:text-[#4EE1A0]">
                View project
              </p>
            </a>
            <a
              href="https://github.com/dantheuri/dev-jobs-webapp.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="border-b-2 border-[#4EE1A0] pb-2 hover:text-[#4EE1A0]">
                View code
              </p>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
