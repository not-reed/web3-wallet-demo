import { useAtom } from "jotai";
import { Provider, openAtom, socialAtom } from "../state";
import { useRef } from "react";
import { useCloseRequest } from "@/app/hooks/useCloseRequest";

export function AuthFlow() {
	const [social, setSocial] = useAtom(socialAtom);
	const [open, setOpen] = useAtom(openAtom);
	const wrapperRef = useRef<HTMLDivElement>(null);
	useCloseRequest(wrapperRef);

	if (!open) {
		return (
			<button
				type="button"
				className="p-2 hover:glass"
				onClick={() => setOpen(true)}
			>
				Log Into HappyChain
			</button>
		);
	}

	function signInWith(provider: Provider) {
		setSocial(provider);
		setOpen(false);
	}

	return (
		<div className="" ref={wrapperRef}>
			<ul className="rounded-lg flex flex-col gap-0">
				<li>
					<button
						type="button"
						className=" hover:glass p-2 rounded-lg"
						onClick={() => signInWith(Provider.Google)}
					>
						Sign In With Google
					</button>
				</li>
				<li>
					<button
						type="button"
						className=" hover:glass p-2 rounded-lg"
						onClick={() => signInWith(Provider.Github)}
					>
						Sign In With Github
					</button>
				</li>
				<li>
					<button
						type="button"
						className=" hover:glass p-2 rounded-lg"
						onClick={() => signInWith(Provider.Twitter)}
					>
						Sign In With Twitter
					</button>
				</li>
			</ul>
		</div>
	);
}
