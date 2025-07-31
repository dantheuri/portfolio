const Skills = () => {
  return (
    <section className="skills border-y-2 lg:border-y-0 lg:border-t-2 border-white lg:w-[70rem] text-center lg:text-left">
      <ul className="grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-3 gap-12 my-18"> 
        <li className="flex flex-col gap-[0.875em]">
          <h2 className="text-[2em] lg:text-5xl/14 font-bold tracking-[-1.5px]">HTML</h2>
          <p className="font-medium text-[#D9D9D9] text-base lg:text-lg">2 Years Experience</p>
        </li>
        <li className="flex flex-col gap-[0.875em]">
          <h2 className="text-[2em] lg:text-5xl/14 font-bold tracking-[-1.5px]">CSS</h2>
          <p className="font-medium text-[#D9D9D9] text-base lg:text-lg">2 Years Experience</p>
        </li>
        <li className="flex flex-col gap-[0.875em]">
          <h2 className="text-[2em] lg:text-5xl/14 font-bold tracking-[-1.5px]">
            JavaScript
          </h2>
          <p className="font-medium text-[#D9D9D9] text-base lg:text-lg">2 Years Experience</p>
        </li>
        <li className="flex flex-col gap-[0.875em]">
          <h2 className="text-[2em] lg:text-5xl/14 font-bold tracking-[-1.5px]">
            Accessibility
          </h2>
          <p className="font-medium text-[#D9D9D9] text-base lg:text-lg">1 Years Experience</p>
        </li>
        <li className="flex flex-col gap-[0.875em]">
          <h2 className="text-[2em] lg:text-5xl/14 font-bold tracking-[-1.5px]">React</h2>
          <p className="font-medium text-[#D9D9D9] text-base lg:text-lg">2 Years Experience</p>
        </li>
        <li className="flex flex-col gap-[0.875em]">
          <h2 className="text-[2em] lg:text-5xl/14 font-bold tracking-[-1.5px]">Tailwind</h2>
          <p className="font-medium text-[#D9D9D9] text-lg">2 Years Experience</p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
