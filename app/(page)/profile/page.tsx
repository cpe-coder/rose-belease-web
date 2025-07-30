import Footer from "@/components/footer";
import { Input } from "@/components/ui/input";
import {
	appointment,
	belEaseLogo,
	house,
	logout,
	message,
	profile,
	RoseBelEaseLogo,
} from "@/constant";
import { Bell, Search, Settings } from "lucide-react";
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
			<div className="h-screen w-full flex flex-col">
				<div className="flex-1 w-full p-8 gap-8">
					<div className="grid grid-cols-1 col-span-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
						<div className="flex flex-col gap-2">
							<div className="flex w-full items-center justify-between">
								<div>
									<p className="text-xs text-slate-400 font-medium">
										Hi Trisha!
									</p>
									<h1 className="text-slate-900 font-medium text-2xl">
										Welcome Back!
									</h1>
								</div>
								<div className="flex items-center gap-2">
									<Input
										className="bg-white shadow-sm shadow-red-100 text-slate-700 font-medium"
										additionalComponents={<Search color="gray" size={20} />}
										placeholder="Search"
									/>
									<Bell color="#FFC300" size={25} />
									<Settings color="black" size={25} />
								</div>
							</div>
							<div className="flex gap-8 p-6 items-center justify-center max-w-[1280px] bg-red-100 rounded-xl">
								<div>
									<Image
										className="w-52 border-2 border-white rounded-full"
										src={profile}
										alt="profile"
									/>
								</div>
								<div className="h-24 w-[3px] rounded-md bg-red-300"></div>
								<div className="text-slate-900">
									<h1 className="text-2xl font-medium">Juan Dela Cruz</h1>
									<h2 className="text-base font-medium">delacruz@gmail.com</h2>
									<h2 className="text-base font-medium">+63 912 345 6789</h2>
									<p className="font-medium text-sm bg-[#D9D9D9] p-1 rounded-xs">
										Membership Since: August 2023
									</p>
								</div>
							</div>
						</div>
						<div className="bg-red-100 rounded-xl p-8 shadow-md shadow-slate-400">
							<h1 className="text-slate-900 font-medium text-2xl">
								Notifications
							</h1>
							<div></div>
						</div>

						<div></div>
					</div>
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</div>
	);
}
