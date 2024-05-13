import { useAtom, useAtomValue } from "jotai";
import {
	addressAtom,
	nameAtom,
	socialAtom,
	truncatedAddressAtom,
} from "./state";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";

export function LoginDetails() {
	const truncatedAddress = useAtomValue(truncatedAddressAtom);
	const address = useAtomValue(addressAtom);
	const name = useAtomValue(nameAtom);
	const social = useAtomValue(socialAtom);
	const copy = useCopyToClipboard();

	return (
		<div className="text-lg flex items-center gap-2 px-2">
			<span className="border-2 border-black rounded-full w-6 h-6 flex items-center justify-center font-black">
				{social?.[0].toLocaleUpperCase()}
			</span>
			<span>{name}</span>
			<span>{truncatedAddress}</span>
			<span>
				<button
					type="button"
					className="flex items-center justify-center"
					onClick={() => copy(address)}
				>
					<ClipboardDocumentIcon className="h-6 w-6" />
				</button>
			</span>
		</div>
	);
}
