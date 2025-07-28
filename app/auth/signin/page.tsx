import signInLogo from "@/assets/images/hand.png";
import SignInForm from "@/components/form/SignInForm";
import Image from "next/image";

const Signin = () => {
	return (
		<div className="flex items-center justify-center p-10 bg-[url('/cover.png')] h-screen w-full bg-no-repeat bg-center bg-fixed bg-cover">
			<div className="w-auto flex rounded-md shadow shadow-amber-100">
				<div className="w-[400px]">
					<SignInForm />
				</div>
				<div className="w-[400px]">
					<Image src={signInLogo} alt="signInLogo" />
				</div>
			</div>
		</div>
	);
};

export default Signin;
