import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedInIcon";

const Footer = () => {
  return (
    <footer className="skills flex flex-col lg:flex-row gap-4 items-center lg:justify-between border-t-2 border-white lg:w-[70rem] py-10">
      <h1 className="font-bold text-[2em] tracking-[-.44px]">dantheuri</h1>
      <div className="flex gap-8">
        <a href="https://github.com/dantheuri">
          <GithubIcon className="size-6 hover:text-[#4EE1A0] cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/daniel-theuri">
          <LinkedinIcon className="size-6 hover:text-[#4EE1A0] cursor-pointer" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
