import { PlayIcon } from "@heroicons/react/24/outline";

const appCount = Array.from({ length: 4 }, (_, i) => i + 1);

export function AppList() {
	return (
		<ul className="grid grid-cols-2 items-center justify-between w-full gap-4 p-2">
			{appCount.map((i) => (
				<li key={i} className=" flex items-center justify-center">
					<a
						href="https://www.google.com"
						target="_blank"
						rel="noreferrer"
						className="skeleton w-32 h-32 flex items-center justify-center"
					>
						App {i}
						<PlayIcon className="h-6 w-6" />
					</a>
				</li>
			))}
		</ul>
	);
}
