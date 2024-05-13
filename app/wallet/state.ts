import { atom } from "jotai";
import { truncate } from "../utils/address";
import type { IProvider } from "@web3auth/base";
import type { OpenloginUserInfo } from "@web3auth/openlogin-adapter";

export const walletLoadedAtom = atom(false);

export const socialAtom = atom<string | null>(null);
export const openAtom = atom(false);

export const nameAtom = atom("");
export const addressAtom = atom("");
export const truncatedAddressAtom = atom((get) => truncate(get(addressAtom)));

// Bottom Navigation Tabs
export const tabAtom = atom<"tokens" | "apps">("tokens");

export const screenAtom = atom<"home" | "send" | "receive" | "bridge">("home");

// web3Auth
export const loggedInAtom = atom(false);
export const web3ProviderAtom = atom<IProvider | null>(null);
export const web3UserAtom = atom<Partial<OpenloginUserInfo> | null>(null);
