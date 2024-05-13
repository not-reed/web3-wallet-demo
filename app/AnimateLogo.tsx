"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Sniglet } from "next/font/google";

const sniglet = Sniglet({ weight: "800", subsets: ["latin-ext"] });

const text = "HappyChain".split("");
export function AnimateLogo() {
	return (
		<h1
			className={clsx(
				sniglet.className,
				"text-5xl md:text-8xl text-rose-700 transition scale-110",
			)}
		>
			{text.map((el, i) => (
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 0.25,
						delay: i / 10,
					}}
					key={
						// biome-ignore lint/suspicious/noArrayIndexKey: skipped for typewriter effect
						i
					}
				>
					{el}
				</motion.span>
			))}
		</h1>
	);
}
