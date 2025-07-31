const Contact = () => {
  return (
    <section id="contact" className="contact w-full max-w-[70rem] pt-15 pb-20">
      <h1 className="font-bold text-[2.5em] lg:text-[5.5em] tracking-[-2.5px] text-center">
        Contact
      </h1>
      <p className="font-medium text-[#D9D9D9] text-center text-base/6 lg:text-lg/7">
        Want to work together or have a question? Reach out!
      </p>
      <div className="flex justify-center mt-8">
        <a
          href="mailto:daniel.m.theuri@gmail.com"
          className="inline-block border-b-2 border-[#4EE1A0] pb-1 hover:text-[#4EE1A0] transition-colors duration-200 font-medium text-[#D9D9D9] text-base tracking-[2.29px]"
        >
          Email Me
        </a>
      </div>
      {/* <form action="">Name Email Message Send message</form> */}
    </section>
  );
};

export default Contact;
