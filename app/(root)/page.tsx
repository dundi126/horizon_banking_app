import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/ui/RightSidebar";
import TotoalBalanceBox from "@/components/ui/TotoalBalanceBox";
import React from "react";

const Home = () => {
	const loggedIn = {
		firstName: "Andray",
		lastName: "Gomez",
		email: "andray.gomez@gmail.com",
	};

	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn?.firstName || "Guest"}
						subtext="Access and mangae your account and transactions efficently"
					/>

					<TotoalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={11250.34}
					/>
				</header>
			</div>
			<RightSidebar
				user={loggedIn}
				transactions={[]}
				banks={[{ currentBalance: 1241.47 }, { currentBalance: 4214.03 }]}
			/>
		</section>
	);
};

export default Home;
