import { Web3AuthNoModal } from "@web3auth/no-modal";
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";

const chainConfig = {
	chainNamespace: CHAIN_NAMESPACES.EIP155,
	chainId: "0x1", // Please use 0x1 for Mainnet
	rpcTarget: "https://rpc.ankr.com/eth",
	displayName: "Ethereum Mainnet",
	blockExplorerUrl: "https://etherscan.io/",
	ticker: "ETH",
	tickerName: "Ethereum",
	logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
	config: { chainConfig },
});

export const web3auth = new Web3AuthNoModal({
	clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID as string,
	web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
	privateKeyProvider,
	uiConfig: {
		mode: "dark",
		useLogoLoader: true,
		logoLight: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
		logoDark: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
		defaultLanguage: "en",
		theme: {
			primary: "#768729",
		},
	},
});

export const openloginAdapter = new OpenloginAdapter();
