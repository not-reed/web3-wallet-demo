"use client";
import { useAtom, useSetAtom } from "jotai";
import { AuthFlow } from "./auth/AuthFlow";
import {
	addressAtom,
	loggedInAtom,
	nameAtom,
	openAtom,
	socialAtom,
	walletLoadedAtom,
	web3ProviderAtom,
} from "./state";
import { Main } from "./core/main";
import clsx from "clsx";
import { useEffect } from "react";
import { openloginAdapter, web3auth } from "./web3Auth";
import { createWalletClient, custom } from "viem";
import { mainnet } from "viem/chains";

let first = true;
export function HappyWallet() {
	const [social, setSocial] = useAtom(socialAtom);
	const [open] = useAtom(openAtom);

	const setProvider = useSetAtom(web3ProviderAtom);
	const [loggedIn, setLoggedIn] = useAtom(loggedInAtom);
	const [isLoaded, setIsLoaded] = useAtom(walletLoadedAtom);
	const setAddress = useSetAtom(addressAtom);
	const setName = useSetAtom(nameAtom);

	// biome-ignore lint/correctness/useExhaustiveDependencies: Init code
	useEffect(() => {
		const init = async () => {
			if (isLoaded) {
				return;
			}
			if (!first) {
				return;
			}
			first = false;

			try {
				web3auth.configureAdapter(openloginAdapter);

				await web3auth.init();
				setProvider(web3auth.provider);

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
			} catch (error) {
				console.warn(error);
			} finally {
				setIsLoaded(true);
			}
		};

		init();
	}, []);

	if (!isLoaded) {
		return;
	}

	return (
		<div
			className={clsx(
				"glass bg-base-300/75",
				open && social ? "rounded-t-lg  max-w-xs w-screen" : "rounded-lg",
			)}
		>
			{loggedIn ? <Main /> : <AuthFlow />}
		</div>
	);
}
