import {
	ArrowUturnLeftIcon,
	ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import { LoginDetails } from "../LoginDetails";
import { useAtom } from "jotai";
import { addressAtom, screenAtom } from "../state";
import { useCopyToClipboard } from "@/app/hooks/useCopyToClipboard";
import QRCode from "react-qr-code";

export function ReceiveScreen() {
	const [, setScreen] = useAtom(screenAtom);
	const [address] = useAtom(addressAtom);
	const copy = useCopyToClipboard();

	return (
		<div className="flex flex-col gap-4">
			<div>
				<button
					type="button"
					onClick={() => setScreen("home")}
					className="flex items-center gap-2"
				>
					<ArrowUturnLeftIcon className="h-6 w-6" /> Back
				</button>
			</div>

			<div className="flex flex-col items-center gap-2 bg-base-200 rounded-lg p-2">
				<div>Receive Assets On HappyChain</div>
				<QRCode size={256} level="H" value={address} viewBox={"0 0 256 256"} />
				<div className="text-xs scale-90 py-2">{address}</div>
			</div>
			<button
				type="button"
				onClick={() => copy(address)}
				className="flex gap-2 btn w-full"
			>
				Copy Address
				<ClipboardDocumentIcon className="h-6 w-6" />
			</button>
		</div>
	);
}
