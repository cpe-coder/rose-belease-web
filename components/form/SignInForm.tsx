"use client";

import Google from "@/assets/icon/google.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FormSchema = z.object({
	email: z.string().min(1, "Email is required").email("Invalid email"),
	password: z
		.string()
		.min(1, "Password is required")
		.min(8, "Password must have than 8 characters"),
});

const SignInForm = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const router = useRouter();
	const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

	const onSubmit = (values: z.infer<typeof FormSchema>) => {
		try {
			console.log(values);
		} catch (error) {
			console.error("Error during sign in:", error);
		}
	};

	const handleClick = () => {
		setIsPasswordVisible((prev) => !prev);
	};

	return (
		<div className="flex h-full w-full items-center justify-center mx-auto p-8">
			<div className="flex flex-col items-center justify-center ">
				<div className="flex flex-col items-center gap-1 pb-6 ">
					<h1 className="font-bold text-slate-600 text-xl text-wrap">
						Sign in to your Account
					</h1>
					<p className="text-slate-500 font-medium text-xs text-wrap">
						Enter your email and password to log in
					</p>
				</div>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="w-full max-w-xs sm:max-w-sm md:w-[350px] px-2 sm:px-0"
					>
						<div className="space-y-1">
							<Label htmlFor="email" className=" text-slate-600 text-xs">
								Email address or Phone number
							</Label>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												className="rounded-md text-slate-600 bg-transparent border border-slate-400 hover:ring-0 active:ring-0 focus:ring-0 w-full active:outline-none focus:outline-none text-sm sm:text-base"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Label htmlFor="password" className="text-slate-600 text-xs">
								Password
							</Label>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												className="rounded-md text-slate-600 bg-transparent w-full active:ring-0 focus:ring-0 hover:ring-0 active:outline-none  border-slate-400 border focus:outline-none text-sm sm:text-base"
												type={isPasswordVisible ? "text" : "password"}
												{...field}
												passwordComponents={
													<Button
														type="button"
														onClick={handleClick}
														className="bg-transparent border-0 hover:bg-transparent focus:bg-transparent justify-end hover:cursor-pointer"
													>
														{isPasswordVisible ? (
															<EyeOff className="text-slate-500" />
														) : (
															<Eye className="text-slate-500" />
														)}
													</Button>
												}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="flex justify-between gap-2 pt-6">
							<div className="flex items-center gap-1">
								<div>
									<Input
										type="checkbox"
										id="remember-me"
										className="w-4 h-4 p-0 m-0 bg-transparent active:bg-none focus:bg-none"
									/>
								</div>
								<div>
									<Label className="text-slate-700" htmlFor="remember-me">
										<span className="text-xs">Remember me</span>
									</Label>
								</div>
							</div>
							<div>
								<Link href={"/forgot-password"}>
									<p className="text-indigo-600 text-xs hover:text-indigo-900">
										Forgot password?
									</p>
								</Link>
							</div>
						</div>
						<div className="flex py-6 items-center justify-center w-full">
							<Button
								onClick={() => router.push("/profile")}
								className="flex px-28 py-1 items-center rounded-sm self-cen bg-slate-900 hover:bg-slate-800 text-white"
								type="submit"
							>
								Log in
							</Button>
						</div>
					</form>
				</Form>
				<div className=" w-full flex flex-row items-center justify-between gap-1">
					<div className="flex w-full items-center gap-3 justify-center">
						<div className="w-24 bg-slate-500 h-[1px]"></div>
						<p className="text-slate-500 text-center text-xs">or</p>
						<div className="w-24 bg-slate-500 h-[1px]"></div>
					</div>
				</div>
				<div className="w-full flex items-center justify-center pt-6">
					<Button
						className="px-12 hover:cursor-pointer py-1 gap-2 bg-white border items-center justify-center border-slate-300 hover:bg-slate-100 hover:transition-all hover:duration-200 duration-200 transition-all rounded-sm"
						type="button"
					>
						<Image src={Google} alt="Google" className="w-3" />
						<span className="text-xs text-slate-600">Sign in with Google</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SignInForm;
