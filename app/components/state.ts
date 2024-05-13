import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { truncate } from "../utils/address";

export enum Provider {
	Github = "github",
	Google = "google",
	Twitter = "twitter",
}

export const socialAtom = atomWithStorage<Provider | null>("socialAtom", null);
export const openAtom = atom(true);

export const nameAtom = atom("Reed");
export const addressAtom = atom("0xa167029E74C9BF2f431479B523bcA042B441c3B6");
export const truncatedAddressAtom = atom((get) => {
	const address = get(addressAtom);
	return truncate(address);
});

// Bottom Navigation Tabs
export const tabAtom = atom<"tokens" | "apps">("tokens");

export const screenAtom = atom<"home" | "send" | "receive" | "bridge">("home");
