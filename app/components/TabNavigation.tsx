import { useAtom } from "jotai";
import { tabAtom } from "./state";
import clsx from "clsx";
import {
	BuildingStorefrontIcon,
	CreditCardIcon,
} from "@heroicons/react/24/outline";

export function TabNavigation() {
	const [tab, setTab] = useAtom(tabAtom);
	return (
		<div className="btm-nav rounded-b-lg btm-nav-xs -bottom-10">
			<button
				type="button"
				className={clsx(tab === "tokens" && "active", "rounded-b-lg")}
				onClick={() => setTab("tokens")}
			>
				<CreditCardIcon className="h-6 w-6" />
			</button>
			<button
				type="button"
				className={clsx(tab === "apps" && "active", "rounded-b-lg")}
				onClick={() => setTab("apps")}
			>
				<BuildingStorefrontIcon className="h-6 w-6" />
			</button>
		</div>
	);
}
