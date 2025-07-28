import signInLogo from "@/assets/images/hand.png";
import SignInForm from "@/components/form/SignInForm";
import Image from "next/image";

const Signin = () => {
	return (
		<div className="flex items-center justify-center p-10 bg-[url('/cover.png')] h-screen w-full bg-no-repeat bg-center bg-fixed bg-cover">
			<div className="w-auto flex rounded-xl shadow-2xl shadow-amber-50 border border-amber-50">
				<div className="w-[400px]">
					<SignInForm />
				</div>
				<div className="w-[400px]">
					<Image
						src={signInLogo}
						alt="signInLogo"
						className="rounded-tr-xl rounded-br-xl"
					/>
				</div>
			</div>
		</div>
	);
};

export default Signin;
