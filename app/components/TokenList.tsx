import { TokenListItem } from "./TokenListItem";

export function TokenList() {
	return (
		<ul className="flex flex-col bg-base-100/50 rounded-box">
			<TokenListItem token="ETH" amount={0.124} />
			<TokenListItem token="USDC" amount={213.75} />
		</ul>
	);
}
