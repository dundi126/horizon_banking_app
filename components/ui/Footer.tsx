import { logoutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
	const router = useRouter();

	return <div>Footer</div>;

	// const handelLogOut = async () => {
	// 	const loggedOut = await logoutAccount();

	// 	if (loggedOut) router.push("/app/(auth)/sign-in");
	// };
	// return (
	// 	<footer className="footer">
	// 		<div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
	// 			<p className="text-xl font-bold text-gray-700">{user.firstName[0]}</p>
	// 		</div>

	// 		<div
	// 			className={type === "mobile" ? "footer_email-mobile" : "footer_email"}>
	// 			<h1 className="text-14 truncate font-normal text-gray-600">
	// 				{/* {user.name} */}
	// 				Dundi Vignesh
	// 			</h1>
	// 			<p className="text-14 truncate font-normal text-gray-600">
	// 				{/* {user.email} */}dundi@gmail.com
	// 			</p>
	// 		</div>

	// 		<div className="footer_image" onClick={handelLogOut}>
	// 			<Image src="icons/logout.svg" fill alt="logout" />
	// 		</div>
	// 	</footer>
	// );
};

export default Footer;
