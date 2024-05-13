import { useAtom, useAtomValue } from "jotai";
import { openAtom, socialAtom, screenAtom, nameAtom } from "../state";
import { useRef } from "react";
import { useCloseRequest } from "@/app/hooks/useCloseRequest";
import { HomeScreen } from "../screens/home";
import { ReceiveScreen } from "../screens/receiving";
import { SendScreen } from "../screens/sending";
import { LoginDetails } from "../LoginDetails";
import { TabNavigation } from "../TabNavigation";

export function Main() {
	const [open, setOpen] = useAtom(openAtom);
	const social = useAtomValue(socialAtom);
	const name = useAtomValue(nameAtom);
	const screen = useAtomValue(screenAtom);

	const wrapperRef = useRef<HTMLDivElement>(null);
	useCloseRequest(wrapperRef);

	if (!open) {
		return (
			<button
				type="button"
				className="p-2 hover:glass flex gap-2"
				onClick={() => setOpen(true)}
			>
				<span className="border-2 border-black rounded-full w-6 h-6 flex items-center justify-center font-black">
					{social?.[0].toLocaleUpperCase()}
				</span>
				<span>{name}</span>
			</button>
		);
	}

	return (
		<div className="px-2 py-4 flex flex-col gap-4" ref={wrapperRef}>
			<LoginDetails />
			{screen === "home" && <HomeScreen />}
			{screen === "send" && <SendScreen />}
			{screen === "receive" && <ReceiveScreen />}
			<TabNavigation />
		</div>
	);
}
