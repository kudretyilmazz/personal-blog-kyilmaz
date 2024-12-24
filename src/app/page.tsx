import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
	{
		title: "Cosyworker",
		description:
			"Cosyworkers work in spaces where they can achieve the best productivity. Find the best and most popular places to work in the cosyworker app.",
		link: "https://cosyworker.com",
		imageUrl: "/csw-logo.png",
	},
];

export default function Home() {
	return (
		<main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
			<div className="max-w-4xl mx-auto px-4 py-12">
				<nav className="flex justify-end mb-12">
					<ThemeToggle />
				</nav>

				<section className="mb-20">
					<div className="flex flex-col md:flex-row items-start gap-8">
						<div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700">
							<Image
								src="/avatar.png"
								alt="Profile picture"
								fill
								className="object-cover"
								priority
							/>
						</div>
						<div className="space-y-6 flex-1">
							<div className="space-y-2">
								<h1 className="text-5xl font-bold tracking-tight">Kudret YILMAZ</h1>
								<p className="text-xl font-medium text-gray-500 dark:text-gray-400">
									JavaScript Developer
								</p>
							</div>
							<p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl">
								I have been developing professionally with javascript technologies such as react,
								react native, nodejs for a long time. I see software development as both my job and
								my hobby. You can use the links below for more information and contact.
							</p>
						</div>
					</div>
				</section>

				<section className="mb-20">
					<div className="space-y-4">
						<h2 className="text-2xl font-semibold">Connect with me</h2>
						<div className="flex items-center gap-2">
							<Link
								href="mailto:kudretylmzzz@gmail.com"
								className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 -m-2"
								target="_blank"
							>
								<Mail className="w-6 h-6" />
							</Link>

							<p className="text-gray-600 dark:text-gray-300 font-medium">kudretylmzzz@gmail.com</p>
						</div>
						<div className="flex gap-6">
							<Link
								href="https://github.com/kudretyilmazz"
								className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 -m-2"
								target="_blank"
							>
								<Github className="w-6 h-6" />
							</Link>
							<Link
								href="https://www.linkedin.com/in/kudretyilmaz/"
								className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 -m-2"
								target="_blank"
							>
								<Linkedin className="w-6 h-6" />
							</Link>
							<Link
								href="https://x.com/kudretylmzzz"
								className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 -m-2"
								target="_blank"
							>
								<Twitter className="w-6 h-6" />
							</Link>
						</div>
					</div>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
					<div className="grid grid-cols-1 gap-8">
						{projects.map((project, index) => (
							<Link
								key={index}
								href={project.link}
								target="_blank"
								className="group block p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 bg-gray-50 dark:bg-gray-800/50 transition-all duration-200 hover:shadow-lg"
							>
								<div className="flex flex-col md:flex-row gap-6">
									<div className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
										<Image
											src={project.imageUrl}
											alt={project.title}
											fill
											className="object-cover"
										/>
									</div>
									<div className="flex-1">
										<h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
											{project.title}
										</h3>
										<p className="text-gray-600 dark:text-gray-300">{project.description}</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</section>
			</div>
		</main>
	);
}
