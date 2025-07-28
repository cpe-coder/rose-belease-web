"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
	const router = useRouter();

	React.useEffect(() => {
		setTimeout(() => {
			router.push("/landpage");
		}, 2000);
	});

	return (
		<div className="bg-[url('/startup.png')] bg-no-repeat bg-cover bg-bottom h-screen w-full"></div>
	);
}
