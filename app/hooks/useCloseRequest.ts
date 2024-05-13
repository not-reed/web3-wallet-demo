import { type RefObject, useEffect, useCallback } from "react";
import { openAtom, tabAtom } from "../components/state";
import { useAtom } from "jotai";

export function useCloseRequest(ref: RefObject<HTMLDivElement>) {
	const [open, setOpen] = useAtom(openAtom);
	const [, setTab] = useAtom(tabAtom);

	const handleCloseRequest = useCallback(
		(event: Event) => {
			if (!open) {
				return;
			}

			if (ref.current && !ref.current.contains(event.target as Node)) {
				setOpen(false);
				setTab("tokens");
			}
		},
		[ref, open, setOpen, setTab],
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
