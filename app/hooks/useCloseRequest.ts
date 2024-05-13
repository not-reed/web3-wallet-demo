import { type RefObject, useEffect, useCallback } from "react";
import { openAtom, screenAtom, tabAtom } from "../wallet/state";
import { useAtom } from "jotai";

export function useCloseRequest(ref: RefObject<HTMLDivElement>) {
	const [open, setOpen] = useAtom(openAtom);
	const [, setTab] = useAtom(tabAtom);
	const [, setScreen] = useAtom(screenAtom);

	const handleCloseRequest = useCallback(
		(event: Event) => {
			if (!open) {
				return;
			}

			if (ref.current && !ref.current.contains(event.target as Node)) {
				setOpen(false);
				setScreen("home");
				setTab("tokens");
			}
		},
		[ref, open, setOpen, setTab, setScreen],
	);

	useEffect(() => {
		document.addEventListener("mousedown", handleCloseRequest);
		document.addEventListener("keydown", handleCloseRequest);

		return () => {
			document.removeEventListener("mousedown", handleCloseRequest);
			document.removeEventListener("keydown", handleCloseRequest);
		};
	}, [handleCloseRequest]);
}
