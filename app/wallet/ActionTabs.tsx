import {
	ArrowLeftStartOnRectangleIcon,
	CloudArrowDownIcon,
	CurrencyDollarIcon,
	PaperAirplaneIcon,
	QrCodeIcon,
} from "@heroicons/react/24/outline";
import {
	addressAtom,
	loggedInAtom,
	nameAtom,
	openAtom,
	screenAtom,
	socialAtom,
	tabAtom,
} from "./state";
import { useSetAtom } from "jotai";
import { useCallback } from "react";
import { web3auth } from "./web3Auth";

export function ActionTabs() {
	const setScreen = useSetAtom(screenAtom);
	const setTab = useSetAtom(tabAtom);
	const setSocial = useSetAtom(socialAtom);
	const setOpen = useSetAtom(openAtom);
	const setLoggedIn = useSetAtom(loggedInAtom);
	const setAddress = useSetAtom(addressAtom);
	const setName = useSetAtom(nameAtom);

	const logout = useCallback(async () => {
		await web3auth.logout();
		setScreen("home");
		setTab("tokens");
		setSocial(null);
		setOpen(false);

		setLoggedIn(false);
		setAddress("");
		setName("");
	}, [setScreen, setTab, setSocial, setOpen, setLoggedIn, setAddress, setName]);

	return (
		<div className="flex items-center justify-center">
			<ul className="menu menu-horizontal bg-base-200 rounded-box">
				<li
					className="tooltip flex tooltip-secondary"
					data-tip="Buy/Sell (Coming Soon)"
				>
					<div className="bg-slate-700 cursor-not-allowed">
						<CurrencyDollarIcon className="h-5 w-5" />
					</div>
				</li>

				<li className="tooltip flex tooltip-secondary" data-tip="Send">
					<button type="button" onClick={() => setScreen("send")}>
						<PaperAirplaneIcon className="h-5 w-5" />
					</button>
				</li>

				<li className="tooltip flex tooltip-secondary" data-tip="Receive">
					<button type="button" onClick={() => setScreen("receive")}>
						<QrCodeIcon className="h-5 w-5" />
					</button>
				</li>

				<li
					className="tooltip flex tooltip-secondary"
					data-tip="Import Tokens  (Coming Soon)"
				>
					<div className="bg-slate-700 cursor-not-allowed">
						<CloudArrowDownIcon className="h-5 w-5" />
					</div>
				</li>

				<li className="tooltip flex tooltip-secondary" data-tip="Log Out">
					<button type="button" onClick={() => logout()}>
						<ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
					</button>
				</li>
			</ul>
		</div>
	);
}
