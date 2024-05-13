import { useAtomValue } from "jotai";
import { ActionTabs } from "../ActionTabs";
import { AppList } from "../AppList";
import { HappyView } from "../HappyView";
import { TokenList } from "../TokenList";
import { tabAtom } from "../state";

export function HomeScreen() {
	const tab = useAtomValue(tabAtom);
	return (
		<>
			<HappyView />

			<ActionTabs />

			{tab === "tokens" && <TokenList />}
			{tab === "apps" && <AppList />}
		</>
	);
}
