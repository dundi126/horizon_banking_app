"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../server/appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({ email, password }: signInProps) => {
	console.log("user action signIN");
	try {
		const { account } = await createAdminClient();

		const response = await account.createEmailPasswordSession(email, password);

		return parseStringify(response);
	} catch (error) {
		console.error(error);
	}
};

export const signUp = async (userData: SignUpParams) => {
	const { email, password, firstName, lastName } = userData;

	try {
		const { account } = await createAdminClient();

		const newUserAccount = await account.create(
			ID.unique(),
			email,
			password,
			`${firstName} ${lastName}`
		);
		const session = await account.createEmailPasswordSession(email, password);

		(await cookies()).set("appwrite-session", session.secret, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			secure: true,
		});

		return parseStringify(newUserAccount);
	} catch (error) {
		console.error(error);
	}
};

// ... your initilization functions

export async function getLoggedInUser() {
	try {
		const { account } = await createSessionClient();
		return await account.get();
	} catch (error) {
		console.error(error);
		return null;
	}
}

export const logoutAccount = async (params: type) => {
	try {
		const { account } = await createSessionClient();

		cookies.delete("appwrite-session");

		await account.deleteSession("current");
	} catch (error) {
		console.error(error);
		return null;
	}
};
