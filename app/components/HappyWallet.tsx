"use client";
import { useAtom } from "jotai";
import { AuthFlow } from "./auth/AuthFlow";
import { openAtom, socialAtom } from "./state";
import { Main } from "./core/main";
import clsx from "clsx";

export function HappyWallet() {
	const [social] = useAtom(socialAtom);
	const [open] = useAtom(openAtom);

	return (
		<div
			className={clsx(
				"glass bg-base-300/75",
				open && social ? "rounded-t-lg  max-w-xs w-screen" : "rounded-lg",
			)}
		>
			{social ? <Main /> : <AuthFlow />}
		</div>
	);
}
