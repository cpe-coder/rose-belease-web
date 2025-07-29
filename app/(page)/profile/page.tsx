import {
	appointment,
	belEaseLogo,
	house,
	logout,
	message,
	profile,
	RoseBelEaseLogo,
} from "@/constant";
import Image from "next/image";

export default function ProfilePage() {
	return (
		<div className="h-screen w-full flex bg-red-50">
			<aside className="h-full w-64 bg-red-100 flex flex-col justify-between">
				<div>
					<div className="flex relative py-3 bg-red-50 rounded-br-full px-4 items-baseline-last">
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
							<p className="text-slate-500 text-xs">
								abelgasmarie337@gmail.com
							</p>
						</div>
					</div>
					<div className="w-full h-[2px] bg-red-50"></div>
					<div className="flex flex-col space-y-4 px-6 py-4">
						<div className="flex items-center gap-3">
							<Image className="w-5" src={house} alt="house" />
							<h1 className="text-orange-700 text-md">Home</h1>
						</div>
						<div className="flex items-center gap-3">
							<Image className="w-5" src={appointment} alt="appointment" />
							<h1 className="text-orange-700 text-md">Appointment</h1>
						</div>
						<div className="flex items-center gap-3">
							<Image className="w-5" src={message} alt="message" />
							<h1 className="text-orange-700 text-md">Message</h1>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-3 mb-6 py-8 px-6">
					<Image className="w-5" src={logout} alt="logout" />
					<h1 className="text-orange-700 text-md">Logout</h1>
				</div>
			</aside>
			<div className="h-full w-full">hello</div>
		</div>
	);
}
