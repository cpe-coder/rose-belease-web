"use client";

import logo from "@/assets/logo/RoseBelEaseLogo.png";
import SignUpForm from "@/components/form/SignUpForm";
import { Button } from "@/components/ui/button";
import { signUpLogo } from "@/constant";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Signin = () => {
	const router = useRouter();

	return (
		<div className="flex items-center justify-center p-10 bg-[url('/cover.png')] h-screen w-full bg-no-repeat bg-center bg-fixed bg-cover">
			<div className="w-auto flex rounded-xl shadow-2xl shadow-amber-50 border border-amber-50">
				<div className="w-[400px] h- relative items-center justify-center">
					<Image
						src={signUpLogo}
						alt="signInLogo"
						className="rounded-tr-xl relative rounded-br-xl"
					/>
					<div className="absolute flex top-0 h-full w-full border px-12 items-center justify-center">
						<div className="flex space-y-6 backdrop-blur-[2px] flex-col border border-amber-50 rounded-md px-6 py-8">
							<div className="flex flex-col items-start justify-center">
								<Image src={logo} alt="logo" className="w-20" />
								<div className="bg-slate-100  w-20 h-[1px]"></div>
							</div>
							<div className="space-y-32">
								<div>
									<p className="text-[10px] font-thin text-white">Hello!</p>
									<h2 className="text-sm font-medium">
										Glow begins with a click.
									</h2>
									<p className="text-[10px] font-thin">
										Manage bookings, view services, and pamper yourself anytime.
									</p>
								</div>
								<div className="space-y-2">
									<p className="text-[10px] font-thin text-white">
										Already a user? Log in and let&apos;s glam up!
									</p>
									<Button
										onClick={() => router.push("/auth/signin")}
										className="hover:cursor-pointer bg-transparent text-xs h-8  hover:bg-transparent px-6 border border-amber-50 text-white"
									>
										Log in
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-[400px]">
					<SignUpForm />
				</div>
			</div>
		</div>
	);
};

export default Signin;
