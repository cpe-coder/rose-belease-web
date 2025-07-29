import { belEaseLogo, profile, RoseBelEaseLogo } from "@/constant";
import Image from "next/image";

export default function ProfilePage() {
	return (
		<div className="h-screen w-full flex bg-red-50">
			<aside className="h-full w-64  bg-red-100">
				<div className="flex relative py-4 bg-red-50 rounded-br-full px-4 items-baseline-last">
					<Image
						className="w-20 relative"
						src={RoseBelEaseLogo}
						alt="RoseBelEaseLogo"
					/>
					<Image
						className="absolute top-14 w-20 right-[50px]"
						src={belEaseLogo}
						alt="BelEaseLogo"
					/>
				</div>
				<div className="flex flex-col gap-2 justify-center py-5">
					<div className="flex justify-center w-full">
						<Image
							src={profile}
							className="w-24 border-2 border-white rounded-full"
							alt="profile"
						/>
					</div>
					<div className="w-full text-center">
						<h1 className="text-slate-900 text-md font-medium">
							Trisha Marie Ostria
						</h1>
						<p className="text-slate-500 text-xs">abelgasmarie337@gmail.com</p>
					</div>
				</div>
			</aside>
			<div className="h-full w-full">hello</div>
		</div>
	);
}
