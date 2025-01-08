import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
	{
		title: "Cosyworker",
		description:
			"Cosyworkers work in spaces where they can achieve the best productivity. Find the best and most popular places to work in the cosyworker app.",
		link: "https://cosyworker.com",
		imageUrl: "/csw-logo.png",
		tags: ["React Native", "Node.js", "PostgreSQL", "Docker"],
	},
];

const trainingServices = [
	{
		title: "1:1 Mentorship",
		description:
			"Personalized coaching sessions tailored to your learning pace and goals. Get direct feedback and guidance on your development journey.",
		features: ["Custom curriculum", "Real-world projects", "Code reviews", "Career guidance"],
	},
	{
		title: "Group Training",
		description:
			"Intensive group sessions focused on specific technologies and development practices. Learn collaboratively in an interactive environment.",
		features: ["Structured learning path", "Team exercises", "Live coding", "Q&A sessions"],
	},
];

export default function Home() {
	return (
		<main className="relative min-h-screen bg-white selection:bg-teal-100 dark:bg-black dark:selection:bg-teal-950">
			<div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" />

			<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
				<div className="lg:flex lg:justify-between lg:gap-4">
					<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
						<div>
							<div className="flex items-center justify-between">
								<div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-gradient-to-br from-teal-100 to-indigo-100 p-1 shadow-xl dark:from-teal-900/20 dark:to-indigo-900/20">
									<Image
										src="/avatar.png"
										alt="Profile"
										fill
										className="rounded-xl object-cover"
										priority
									/>
								</div>
								<ThemeToggle />
							</div>

							<div className="mt-12 space-y-6">
								<div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm text-teal-700 ring-1 ring-inset ring-teal-600/20 dark:bg-teal-500/10 dark:text-teal-300 dark:ring-teal-400/20">
									<span className="relative flex h-2 w-2">
										<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
										<span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
									</span>
									Available for working together
								</div>

								<h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-200 sm:text-5xl">
									Kudret YILMAZ
								</h1>
								<h2 className="text-lg font-medium text-slate-800 dark:text-slate-200">
									JavaScript Developer
								</h2>
								<p className="max-w-xs text-slate-600 dark:text-slate-400">
									I have been developing professionally with javascript technologies such as react,
									react native, nodejs for a long time.
								</p>
							</div>

							<nav className="mt-12">
								<ul className="flex flex-row flex-wrap md:flex-col gap-2">
									{[
										{
											icon: <Mail className="h-5 w-5" />,
											href: "mailto:kudretylmzzz@gmail.com",
											label: "Email",
											handle: "kudretylmzzz@gmail.com",
										},
										{
											icon: <Github className="h-5 w-5" />,
											href: "https://github.com/kudretyilmazz",
											label: "GitHub",
											handle: "@kudretyilmazz",
										},
										{
											icon: <Linkedin className="h-5 w-5" />,
											href: "https://www.linkedin.com/in/kudretyilmaz/",
											label: "LinkedIn",
											handle: "kudretyilmaz",
										},
										{
											icon: <Twitter className="h-5 w-5" />,
											href: "https://x.com/kudretylmzzz",
											label: "Twitter",
											handle: "@kudretylmzzz",
										},
									].map(social => (
										<li key={social.label} className="w-10 md:w-full">
											<Link
												href={social.href}
												className="group flex items-center justify-center md:justify-start gap-2 md:gap-4 rounded-lg border border-transparent bg-white p-2 md:p-3 text-xs md:text-sm transition-all hover:border-slate-200 hover:bg-slate-50 dark:bg-white/5 dark:hover:border-slate-800 dark:hover:bg-white/10"
												target="_blank"
											>
												<span className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 dark:border-slate-800 dark:bg-white/5 dark:text-slate-400">
													{social.icon}
												</span>
												<div className="hidden md:block">
													<div className="text-slate-800 dark:text-slate-200">{social.label}</div>
													<div className="text-slate-600 dark:text-slate-400">{social.handle}</div>
												</div>
												<ArrowUpRight className="hidden md:block ml-auto h-4 w-4 md:h-5 md:w-5 text-slate-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 dark:text-slate-500" />
											</Link>
										</li>
									))}
								</ul>
							</nav>
						</div>
					</header>

					<main className="pt-16 lg:w-1/2 lg:py-24">
						<section className="mb-24">
							<h2 className="sticky top-0 z-20 -mx-6 mb-4 bg-white/75 px-6 py-5 text-sm font-bold uppercase tracking-widest text-slate-800 backdrop-blur dark:bg-black/75 dark:text-slate-200">
								Training Services
							</h2>
							<div className="space-y-8">
								{trainingServices.map((service, index) => (
									<div
										key={index}
										className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8 dark:border-slate-800 dark:from-slate-900 dark:to-slate-900"
									>
										<div className="relative z-10">
											<h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
												{service.title}
											</h3>
											<p className="mt-3 text-slate-600 dark:text-slate-400">
												{service.description}
											</p>
											<ul className="mt-6 grid grid-cols-2 gap-3">
												{service.features.map((feature, featureIndex) => (
													<li
														key={featureIndex}
														className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
													>
														<svg
															viewBox="0 0 24 24"
															fill="none"
															className="h-5 w-5 text-teal-500"
															stroke="currentColor"
														>
															<path
																d="M9 12.75L11.25 15 15 9.75"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
														{feature}
													</li>
												))}
											</ul>
										</div>
										<div className="absolute right-0 top-0 -z-10 h-24 w-24 rounded-full bg-gradient-to-b from-teal-100 blur-2xl dark:from-teal-900/30" />
									</div>
								))}

								<div className="mt-12 rounded-2xl bg-slate-900 p-8 dark:bg-slate-800">
									<div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
										<div>
											<h3 className="text-xl font-semibold text-white">
												Ready to level up your skills?
											</h3>
											<p className="mt-2 text-slate-400">
												Get in touch to discuss your learning goals and find the right program for
												you.
											</p>
										</div>
										<Link
											href="mailto:kudretylmzzz@gmail.com?subject=Training%20Inquiry"
											className="group inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-teal-600"
										>
											Contact
											<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
										</Link>
									</div>
								</div>
							</div>
						</section>

						<section className="mb-16">
							<h2 className="sticky top-0 z-20 -mx-6 mb-4 bg-white/75 px-6 py-5 text-sm font-bold uppercase tracking-widest text-slate-800 backdrop-blur dark:bg-black/75 dark:text-slate-200">
								Featured Projects
							</h2>
							<div className="group/list">
								{projects.map((project, index) => (
									<Link
										key={index}
										href={project.link}
										target="_blank"
										className="group/item block"
									>
										<article className="relative mb-12 rounded-2xl bg-slate-50 p-6 transition-all hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-800">
											<div className="absolute -inset-x-4 -inset-y-6 z-0 rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/70 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg dark:lg:group-hover:bg-slate-800/50 dark:lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
											<div className="relative z-10">
												<div className="flex items-center gap-4">
													<div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
														<Image
															src={project.imageUrl}
															alt={project.title}
															fill
															className="object-cover"
														/>
													</div>
													<h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
														{project.title}
													</h3>
													<ArrowUpRight className="ml-auto h-5 w-5 text-slate-400 transition-transform group-hover/item:-translate-y-1 group-hover/item:translate-x-1 dark:text-slate-500" />
												</div>
												<p className="mt-4 text-slate-600 dark:text-slate-400">
													{project.description}
												</p>
												<ul className="mt-4 flex flex-wrap gap-2">
													{project.tags.map(tag => (
														<li
															key={tag}
															className="rounded-full bg-teal-50 px-3 py-1 text-xs text-teal-700 ring-1 ring-inset ring-teal-600/20 dark:bg-teal-500/10 dark:text-teal-300 dark:ring-teal-400/20"
														>
															{tag}
														</li>
													))}
												</ul>
											</div>
										</article>
									</Link>
								))}
							</div>
						</section>
					</main>
				</div>
			</div>
		</main>
	);
}
