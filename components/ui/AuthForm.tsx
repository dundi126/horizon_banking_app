"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { authFormSchema } from "@/lib/utils";
import CustomInput from "./CustomInput";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";

const AuthForm = ({ type }: { type: string }) => {
	const [user, setUser] = useState();
	const [isLoading, setISLoading] = useState(false);
	const router = useRouter();

	const form = useForm<z.infer<typeof authFormSchema>>({
		resolver: zodResolver(authFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async (data: z.infer<typeof authFormSchema>) => {
		setISLoading(true);

		try {
			if (type === "sign-up") {
				const newUser = await signUp(data);
				setUser(newUser);
			}
			if (type === "sign-in") {
				// const response = await signIn({
				// 	email: data.email,
				// 	password: data.password,
				// });
				// if (response) router.push("/");
			}
		} catch (error) {
			console.log(error);
		} finally {
			setISLoading(false);
		}
	};

	return (
		<section className="auth-form">
			<header className="flex flex-col gap-5 md:gap-8">
				<Link href="/" className="cursor-pointer flex items-center gap-1">
					<Image
						src="/icons/logo.svg"
						width={34}
						height={34}
						alt="Horizon Logo"
						className="size-[24px] max-xl:size-14"
					/>
					<h1 className="sidebar-logo">Horizon</h1>
				</Link>

				<div className="flex flex-col gap-1 md:gap-3">
					<h1 className="text-24 lg:text-36 font-semibold text-gray-900">
						{user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
					</h1>
					<p className="text-16 font-normal text-gray-600">
						{user
							? "Link your account to get started"
							: "Please enter your details"}
					</p>
				</div>
			</header>

			{user ? (
				<div>{/*Link to page*/}</div>
			) : (
				<>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
							{type === "sign-up" && (
								<>
									<div className="flex gap-4">
										<CustomInput
											control={form.control}
											name="firstname"
											label="First Name"
											placeholder="Enter first name"
										/>
										<CustomInput
											control={form.control}
											name="lastname"
											label="Last Name"
											placeholder="Enter last name"
										/>
									</div>
									<CustomInput
										control={form.control}
										name="address1"
										label="Address"
										placeholder="Enter address"
									/>
									<CustomInput
										control={form.control}
										name="city"
										label="City"
										placeholder="Enter city"
									/>
									<div className="flex gap-4">
										<CustomInput
											control={form.control}
											name="state"
											label="State"
											placeholder="Example : Michigan"
										/>
										<CustomInput
											control={form.control}
											name="postalCode"
											label="Postal Code"
											placeholder="Example : 69231"
										/>
									</div>
									<div className="flex gap-4">
										<CustomInput
											control={form.control}
											name="dateOfBirth"
											label="Date Of Birth"
											placeholder="yyyy-mm-dd"
										/>
										<CustomInput
											control={form.control}
											name="ssn"
											label="SSN"
											placeholder="Example : 1220 2920"
										/>
									</div>
								</>
							)}
							<CustomInput
								control={form.control}
								name="email"
								label="Email"
								placeholder="Enter email"
							/>
							<CustomInput
								control={form.control}
								name="password"
								label="Password"
								placeholder="Enter password"
							/>
							<div className="flex flex-col gap-4">
								<Button className="form-btn" type="submit" disabled={isLoading}>
									{isLoading ? (
										<>
											<Loader2 size={20} className="animate-spin" /> &nbsp;
											Loading...
										</>
									) : type === "sign-in" ? (
										"Sign In"
									) : (
										"Sign Up"
									)}
								</Button>
							</div>
						</form>
					</Form>
					<footer className="flex justify-center gap-1">
						<p className="text-14 font-normal text-gray-600">
							{type === "sign-in"
								? "Don't have an account?"
								: "Already have an account?"}
						</p>
						<Link
							href={type === "sign-in" ? "/sign-up" : "/sign-in"}
							className="form-link">
							{type === "sign-in" ? "sign-up" : "sign-in"}
						</Link>
					</footer>
				</>
			)}
		</section>
	);
};

export default AuthForm;
