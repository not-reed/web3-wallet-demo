import { useAtom } from "jotai";
import { ActionTabs } from "../ActionTabs";
import { AppList } from "../AppList";
import { HappyView } from "../HappyView";
import { LoginDetails } from "../LoginDetails";
import { TabNavigation } from "../TabNavigation";
import { TokenList } from "../TokenList";
import { tabAtom } from "../state";

export function HomeScreen() {
	const [tab] = useAtom(tabAtom);
	return (
		<>
			<HappyView />

			<ActionTabs />

			{tab === "tokens" && <TokenList />}
			{tab === "apps" && <AppList />}
		</>
	);
}
