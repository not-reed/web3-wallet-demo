import { useAtom, useSetAtom } from "jotai";
import {
	loggedInAtom,
	openAtom,
	socialAtom,
	web3ProviderAtom,
	addressAtom,
	nameAtom,
} from "../state";
import { useRef } from "react";
import { useCloseRequest } from "@/app/hooks/useCloseRequest";
import { WALLET_ADAPTERS } from "@web3auth/base";
import { web3auth } from "../web3Auth";
import { createWalletClient, custom } from "viem";
import { mainnet } from "viem/chains";

enum LoginProvider {
	Google = "google",
	Github = "github",
	Twitter = "twitter",
	Discord = "discord",
	Apple = "apple",
}

export function AuthFlow() {
	const wrapperRef = useRef<HTMLDivElement>(null);
	useCloseRequest(wrapperRef);

	const [open, setOpen] = useAtom(openAtom);
	const setSocial = useSetAtom(socialAtom);
	const setProvider = useSetAtom(web3ProviderAtom);
	const setLoggedIn = useSetAtom(loggedInAtom);
	const setAddress = useSetAtom(addressAtom);
	const setName = useSetAtom(nameAtom);

	const login = async (providerName: LoginProvider) => {
		const web3authProvider = await web3auth.connectTo(
			WALLET_ADAPTERS.OPENLOGIN,
			{
				loginProvider: providerName,
			},
		);
		setProvider(web3authProvider);
		if (web3auth.connected && web3auth.provider) {
			const user = await web3auth.getUserInfo();

			const client = createWalletClient({
				chain: mainnet,
				transport: custom(web3auth.provider),
			});

			const [address] = await client.getAddresses();

			setLoggedIn(true);
			setAddress(address);
			if (user.name) {
				setName(user.name);
			}
			if (user.typeOfLogin) {
				setSocial(user.typeOfLogin);
			}
		}
	};

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

	return (
		<div className="" ref={wrapperRef}>
			<ul className="rounded-lg flex flex-col gap-0">
				<li>
					<button
						type="button"
						className=" hover:glass p-2 rounded-lg"
						onClick={() => login(LoginProvider.Google)}
					>
						Sign In With Google
					</button>
				</li>
				<li>
					<button
						type="button"
						className=" hover:glass p-2 rounded-lg"
						onClick={() => login(LoginProvider.Github)}
					>
						Sign In With Github
					</button>
				</li>
				<li>
					<button
						type="button"
						className=" hover:glass p-2 rounded-lg"
						onClick={() => login(LoginProvider.Twitter)}
					>
						Sign In With Twitter
					</button>
				</li>
				<li>
					<button
						type="button"
						className=" hover:glass p-2 rounded-lg"
						onClick={() => login(LoginProvider.Discord)}
					>
						Sign In With Discord
					</button>
				</li>
				<li>
					<button
						type="button"
						className=" hover:glass p-2 rounded-lg"
						onClick={() => login(LoginProvider.Apple)}
					>
						Sign In With Apple
					</button>
				</li>
			</ul>
		</div>
	);
}
