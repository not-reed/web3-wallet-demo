import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { screenAtom } from "../state";
import { useSetAtom } from "jotai";
import { isAddress } from "viem";
import { useMemo, useState } from "react";
import clsx from "clsx";

export function SendScreen() {
	const setScreen = useSetAtom(screenAtom);

	const [to, setTo] = useState("");
	const [amount, setAmount] = useState("");
	const [token, setToken] = useState("HAPPY");

	const isValidAddress = useMemo(() => isAddress(to), [to]);

	return (
		<div className="flex flex-col gap-4 px-2">
			<div>
				<button
					type="button"
					onClick={() => setScreen("home")}
					className="flex items-center gap-2"
				>
					<ArrowUturnLeftIcon className="h-6 w-6" /> Back
				</button>
			</div>

			<div>
				To:
				<input
					type="text"
					value={to}
					onChange={(e) => setTo(e.target.value)}
					placeholder="0x..."
					className={clsx(
						"input input-bordered w-full max-w-xs",
						to && !isValidAddress && "input-error",
						to && isValidAddress && "input-success",
					)}
				/>
			</div>
			<div className="flex input gap-2">
				<select
					className="w-28 bg-base-100"
					value={token}
					onChange={(e) => setToken(e.target.value)}
				>
					<option>HAPPY</option>
					<option>ETH</option>
					<option>USDC</option>
				</select>

				<input
					type="number"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					placeholder="0.0"
					className={clsx(
						"border-l pl-2 w-full max-w-xs",
						amount && isValidAddress && "input-success",
					)}
				/>
			</div>
			<button
				type="button"
				className="btn"
				disabled={!isValidAddress || !amount}
			>
				Send
			</button>
		</div>
	);
}
