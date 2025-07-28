"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Landpage = () => {
	const router = useRouter();
	return (
		<div className="flex items-center justify-center h-screen w-full bg-[url('/cover.png')] bg-cover bg-no-repeat bg-fixed bg-center">
			<div className="flex flex-col text-center gap-10">
				<div className="flex flex-col justify-center items-center">
					<h1 className="text-slate-900 text-4xl font-bold">
						Hi, Welcome to Rose BelEase
					</h1>
					<p className="text-slate-800 text-2xl text-center font-medium text-wrap max-w-[450px]">
						Your self-care, your way. Book, manage, and glow-all in one app.
					</p>
				</div>
				<div className="flex gap-14">
					<Button
						onClick={() => router.push("/auth/signup")}
						className="w-[250px] border bg-transparent hover:bg-amber-100 hover:cursor-pointer border-slate-900"
					>
						Create Account
					</Button>
					<Button
						onClick={() => router.push("/auth/signin")}
						className="bg-slate-900 w-[250px] hover:bg-slate-700 hover:cursor-pointer text-white"
					>
						Log in
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Landpage;
