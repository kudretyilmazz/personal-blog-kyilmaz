"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null; // avoid hydration mismatch
	}

	return (
		<button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
			aria-label="Toggle theme"
		>
			{theme === "dark" ? (
				<Sun className="h-5 w-5 transition-all" />
			) : (
				<Moon className="h-5 w-5 transition-all" />
			)}
		</button>
	);
}
