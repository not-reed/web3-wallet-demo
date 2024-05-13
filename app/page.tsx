import { AnimateLogo } from "./AnimateLogo";
import { HappyWallet } from "./components/HappyWallet";

export default function Home() {
	return (
		<main className="w-screen h-dvh flex items-center justify-center">
			<AnimateLogo />

			<div className="absolute top-2 right-2 flex justify-center items-center">
				<HappyWallet />
			</div>
		</main>
	);
}
