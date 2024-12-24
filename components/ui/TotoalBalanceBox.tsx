import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";

const TotoalBalanceBox = ({
	accounts = [],
	totalBanks,
	totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
	return (
		<section className="total-balance">
			<div className="total-balance-chart">
				<DoughnutChart accounts={accounts} />
			</div>

			<div className="flexx flex-col gap-6">
				<h2 className="header-2">Bank Account : {totalBanks}</h2>
				<div className="flex flex-col gap-2">
					<p className="total-balance-label">Total Current Balance</p>
				</div>

				<div className="total-balance-amount flex-center gap-2">
					<AnimatedCounter amount={totalCurrentBalance} />
				</div>
			</div>
		</section>
	);
};

export default TotoalBalanceBox;
