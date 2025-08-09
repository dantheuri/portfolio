const Resume = () => {
	return (
		<section className="resume w-full max-w-[70rem] px-3">
			<div className="flex items-center justify-between">
				<h1 className="font-bold text-[2.5em] lg:text-[5.5em] tracking-[-2.5px]">
					Resume
				</h1>
				<a href="#contact">
					<p className="font-medium text-[#D9D9D9] text-base tracking-[2.29px] border-b-2 border-[#4EE1A0] pb-1 hover:text-[#4EE1A0]">
						Contact me
					</p>
				</a>
			</div>

			<div className="mt-20 space-y-12">
				{/* Contact Information */}
				<div className="text-center lg:text-left">
					<h2 className="font-bold text-2xl text-[#4EE1A0] mb-4">
						Contact Information
					</h2>
					<div className="text-[#D9D9D9] space-y-1 text-sm lg:text-base">
						<p>📧 daniel.m.theuri@gmail.com</p>
						<p>📱 +254 769 666 212</p>
						<p>
							🔗{" "}
							<a
								href="https://github.com/dantheuri"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#4EE1A0] hover:underline"
							>
								github.com/dantheuri
							</a>
						</p>
						<p>
							💼{" "}
							<a
								href="https://www.linkedin.com/in/daniel-theuri"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#4EE1A0] hover:underline"
							>
								linkedin.com/in/daniel-theuri
							</a>
						</p>
					</div>
				</div>

				{/* Education Section */}
				<div>
					<h2 className="font-bold text-2xl text-[#4EE1A0] mb-6">Education</h2>
					<div className="border-l-4 border-[#4EE1A0] pl-6">
						<div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
							<h3 className="font-bold text-xl">
								Bachelor of Science in Applied Computer Technology
							</h3>
							<span className="text-[#D9D9D9] text-sm lg:text-base">
								Nairobi, Kenya
							</span>
						</div>
						<p className="text-[#4EE1A0] font-medium mb-2">
							United States International University - Africa
						</p>
						<p className="text-[#D9D9D9] text-sm lg:text-base">
							Concentration: Software Engineering
						</p>
					</div>
				</div>

				{/* Experience Section */}
				<div>
					<h2 className="font-bold text-2xl text-[#4EE1A0] mb-6">
						Work Experience
					</h2>
					<div className="space-y-8">
						<div className="border-l-4 border-[#4EE1A0] pl-6">
							<div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
								<h3 className="font-bold text-xl">
									Junior Fullstack Software Engineer
								</h3>
								<span className="text-[#D9D9D9] text-sm lg:text-base">
									Oct 2024 - Jun 2025
								</span>
							</div>
							<p className="text-[#4EE1A0] font-medium mb-2">
								Siman Center S Corps • Minneapolis, Minnesota (Remote)
							</p>
							<ul className="text-[#D9D9D9] space-y-2 text-sm lg:text-base">
								<li>
									• Led the redesign and development of the company website,
									enhancing its visual appeal and functionality
								</li>
								<li>
									• Managed the day-to-day operations of P-Smart, a web-based
									system that enabled companies and individuals across Kenya to
									bid for fuel through an auction-like platform and connect with
									truck drivers for fuel transportation.
								</li>
								<li>
									• Identified and addressed areas for improvement in the
									P-Smart System by actively seeking ways to enhance its
									functionality
								</li>
							</ul>
						</div>

						<div className="border-l-4 border-[#4EE1A0] pl-6">
							<div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
								<h3 className="font-bold text-xl">IT Intern</h3>
								<span className="text-[#D9D9D9] text-sm lg:text-base">
									Jan 2024 - Oct 2024
								</span>
							</div>
							<p className="text-[#4EE1A0] font-medium mb-2">
								Liquid Hack Group • Nairobi, Kenya
							</p>
							<ul className="text-[#D9D9D9] space-y-2 text-sm lg:text-base">
								<li>
									• Implemented web designs by skillfully translating design
									concepts into functional and visually appealing web interfaces
								</li>
								<li>
									• Used HTML, CSS, and JavaScript to ensure cross-browser
									compatibility and mobile responsiveness
								</li>
								<li>
									• Collaborated with design teams to create seamless user
									experiences
								</li>
							</ul>
						</div>

						<div className="border-l-4 border-[#4EE1A0] pl-6">
							<div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
								<h3 className="font-bold text-xl">IT Intern</h3>
								<span className="text-[#D9D9D9] text-sm lg:text-base">
									Sep 2023 - Dec 2023
								</span>
							</div>
							<p className="text-[#4EE1A0] font-medium mb-2">
								Petroleum Outlets Associations of Kenya • Nairobi, Kenya
							</p>
							<ul className="text-[#D9D9D9] space-y-2 text-sm lg:text-base">
								<li>
									• Led the redesign and development of the company website,
									enhancing its visual appeal and functionality
								</li>
								<li>
									• Managed the day-to-day operations of P-Smart system,
									handling user sign-ups, fuel orders, and bid management
								</li>
								<li>
									• Identified and addressed areas for improvement in the
									P-Smart System by actively seeking ways to enhance its
									functionality
								</li>
							</ul>
						</div>

						<div className="border-l-4 border-[#4EE1A0] pl-6">
							<div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
								<h3 className="font-bold text-xl">
									System Administrator Intern
								</h3>
								<span className="text-[#D9D9D9] text-sm lg:text-base">
									Aug 2022 - Sep 2022
								</span>
							</div>
							<p className="text-[#4EE1A0] font-medium mb-2">
								CURE International • Kijabe, Kenya
							</p>
							<ul className="text-[#D9D9D9] space-y-2 text-sm lg:text-base">
								<li>
									• Provided timely and effective technical support to staff,
									resolving 90% of computer related issues within a 24-hour
									timeframe
								</li>
								<li>
									• Proficiently utilized Odoo software for effective project
									management and streamlined business operations
								</li>
								<li>
									• Demonstrated expertise in configuring printers, email
									systems, and establishing VPN connections for staff
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Technical Skills Section */}
				<div>
					<h2 className="font-bold text-2xl text-[#4EE1A0] mb-6">
						Technical Skills
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div>
							<h3 className="font-bold text-lg mb-3">Programming Languages</h3>
							<ul className="text-[#D9D9D9] space-y-1 text-sm">
								<li>• HTML/CSS & JavaScript</li>
								<li>• Linux</li>
								<li>• Git/GitHub/GitHub Actions</li>
							</ul>
						</div>
						<div>
							<h3 className="font-bold text-lg mb-3">Frameworks & Libraries</h3>
							<ul className="text-[#D9D9D9] space-y-1 text-sm">
								<li>• ReactJS</li>
								<li>• NodeJS (ExpressJS)</li>
								<li>• Bootstrap/Tailwind</li>
								<li>• Ant Design</li>
							</ul>
						</div>
						<div>
							<h3 className="font-bold text-lg mb-3">Databases & Platforms</h3>
							<ul className="text-[#D9D9D9] space-y-1 text-sm">
								<li>• MySQL</li>
								<li>• MongoDB</li>
								<li>• Firebase Platform</li>
								<li>• NoSQL & SQL Databases</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Projects Section */}
				<div>
					<h2 className="font-bold text-2xl text-[#4EE1A0] mb-6">Projects</h2>
					<div className="space-y-6">
						<div className="border-l-4 border-[#4EE1A0] pl-6">
							<h3 className="font-bold text-lg mb-2">
								Clinic Management System
							</h3>
							<p className="text-[#D9D9D9] text-sm lg:text-base">
								A web application employing Handlebars templating engine,
								Bootstrap, and Node.js, designed to empower small clinics in
								efficiently managing patient information. Receptionists can log
								patient details, while doctors can comprehensively record and
								access patient session notes, fostering streamlined healthcare
								workflows.
							</p>
						</div>
						<div className="border-l-4 border-[#4EE1A0] pl-6">
							<h3 className="font-bold text-lg mb-2">
								Employee Management System
							</h3>
							<p className="text-[#D9D9D9] text-sm lg:text-base">
								Created a web application built using Node.js, Bootstrap, and
								React.js, which serves as a valuable tool for empowering
								employers in small-scale organizations to streamline the
								management of employee information, roles, and statuses.
							</p>
						</div>
						<div className="border-l-4 border-[#4EE1A0] pl-6">
							<h3 className="font-bold text-lg mb-2">Job Portal</h3>
							<p className="text-[#D9D9D9] text-sm lg:text-base">
								Developed a web application which provides universities with a
								dedicated platform where employers can post tailored job
								opportunities designed to specifically benefit university
								students, fostering a seamless bridge between academia and the
								professional world.
							</p>
						</div>
					</div>
				</div>

				{/* References Section */}
				<div>
					<h2 className="font-bold text-2xl text-[#4EE1A0] mb-6">References</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="border-l-4 border-[#4EE1A0] pl-6">
							<h3 className="font-bold text-lg">Professor Austin Sifuna</h3>
							<p className="text-[#4EE1A0] font-medium text-sm">Lecturer</p>
							<p className="text-[#D9D9D9] text-sm">
								United States International University - Africa
							</p>
							<p className="text-[#D9D9D9] text-sm">asifuna@usiu.ac.ke</p>
						</div>
						<div className="border-l-4 border-[#4EE1A0] pl-6">
							<h3 className="font-bold text-lg">Yuri Zambarakji</h3>
							<p className="text-[#4EE1A0] font-medium text-sm">Manager</p>
							<p className="text-[#D9D9D9] text-sm">Siman Center S Corps</p>
							<p className="text-[#D9D9D9] text-sm">yurizambarakji@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resume;
