const Header = () => {
  return (
    <header className="lg:w-[70rem] px-4 sm:px-0">
      <section className="hero">
        <h1 className="font-bold text-2xl lg:text-[2em] tracking-[-.44px]">
          danieltheuri
        </h1>
        <div className="mt-15">
          <div className="text-center">
            <h1 className="font-bold text-[2.5em] lg:text-[5.5em] tracking-[-2.5px]">
              Nice to meet you!
            </h1>
            <h1 className="font-bold text-[2.5em] lg:text-[5.5em] tracking-[-2.5px]">
              I'm{" "}
              <span className="border-b-4 border-[#4EE1A0] pb-1">
                Daniel Theuri.
              </span>
            </h1>
          </div>
          <div className="mt-8 lg:mt-12 max-w-2xl lg:max-w-3xl mx-auto">
            <p className="font-medium text-white text-base lg:text-lg leading-relaxed text-justify">
              Hey! I'm Daniel 👋 — a developer who loves turning ideas into
              slick, responsive web experiences. From frontend to backend, I
              enjoy solving tricky problems 🧩, learning new tools 🛠️, and
              building things people actually enjoy using. Every project’s a
              chance to grow — and have some fun 🎉.
            </p>
            <div className="mt-6 lg:mt-8 text-center">
              <a href="#contact" className="inline-block">
                <p className="border-b-2 border-[#4EE1A0] pb-1 hover:text-[#4EE1A0] transition-colors duration-200">
                  Contact me
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
