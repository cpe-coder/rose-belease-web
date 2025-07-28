import React from "react";

interface authProp {
	children: React.ReactNode;
}

export default function AuthLayout({ children }: authProp) {
	return <div>{children}</div>;
}
