"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authFormSchema } from "@/lib/utils";

const AuthForm = ({ type }: { type: string }) => {
	const [user, setUser] = useState();

	const form = useForm<z.infer<typeof authFormSchema>>({
		resolver: zodResolver(authFormSchema),
		defaultValues: {
			email: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof authFormSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

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
						{user ? "Link Account" : type === "sign-in" ? "sign-in" : "sign-up"}
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
					<AuthForm
						control={form.control}
						name={"email"}
						label={"Email"}
						placeholder={"Enter email"}
					/>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<div className="form-item">
										<FormLabel className="form-label">Email</FormLabel>
										<div className="flex flex-col w-full">
											<FormControl>
												<Input
													placeholder="Enter email"
													className="input-class"
													{...field}
												/>
											</FormControl>
											<FormMessage className="form-message mt-2" />
										</div>
									</div>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<div className="form-item">
										<FormLabel className="form-label">Password</FormLabel>
										<div className="flex flex-col w-full">
											<FormControl>
												<Input
													placeholder="Enter password"
													className="input-class"
													{...field}
												/>
											</FormControl>
											<FormMessage className="form-message mt-2" />
										</div>
									</div>
								)}
							/>
							<Button type="submit">Submit</Button>
						</form>
					</Form>
				</>
			)}
		</section>
	);
};

export default AuthForm;
