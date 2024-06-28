import React, { useState } from "react";
import QuoteCalendar from "../components/QuoteCalendar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import SideBar from "../components/Sidebar";
import { Quote } from "../interfaces/quotes";
import AddQuoteModal from "../components/AddQuoteModal";
import QuoteDetail from "../components/QuoteDetail";


const HomePage: React.FC = () => {
	const currentDate = new Date();

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const currentMonth = months[currentDate.getMonth()];
	const currentYear = currentDate.getFullYear();

	const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
	const [isCreateQuoteModalOpen, setIsCreateQuoteModalOpen] =
		useState<boolean>(false);
	const [selectedDateQuotes, setSelectedDateQuotes] = useState<Quote[] | null>(
		null
	);

	return (
		<>
			<div className=" w-full h-screen font-inter overflow-hidden relative">
				<header className="w-full p-6 flex justify-between items-start min-h-[79px]">
					<div>
						<h1 className=" font-inter text-[24px] font-semibold leading-[29.05px] text-mainColor tracking-[-0.03em]">
							All Existing Quotes
						</h1>
						<p className=" font-inter text-[12px] font-[400] leading-[16px] text-customGray ">
							View all created quotes
						</p>
					</div>

					<div className="flex gap-2">
						<p className="font-inter text-[24px] font-medium leading-[29.05px] text-[#374151]">
							{currentMonth}
							<span className="text-[#00861E] ml-2">{currentYear}</span>{" "}
						</p>
						<div className="flex items-center justify-between">
							<FaChevronLeft size={16} />
							<FaChevronRight size={16} />
						</div>
					</div>
				</header>

				<main className="relative h-[93%] ">
					<QuoteCalendar
						isSidebarOpen={isSidebarOpen}
						setSidebarOpen={setSidebarOpen}
						selectedDateQuotes={selectedDateQuotes}
						setSelectedDateQuotes={setSelectedDateQuotes}
					/>
					<SideBar
						isSidebarOpen={isSidebarOpen}
						setSidebarOpen={setSidebarOpen}
						selectedDateQuotes={selectedDateQuotes}
						setSelectedDateQuotes={setSelectedDateQuotes}
						isCreateQuoteModalOpen={isCreateQuoteModalOpen}
						setIsCreateQuoteModalOpen={setIsCreateQuoteModalOpen}
					/>
				</main>

				{isCreateQuoteModalOpen && (
					<AddQuoteModal
						isCreateQuoteModalOpen={isCreateQuoteModalOpen}
						setIsCreateQuoteModalOpen={setIsCreateQuoteModalOpen}
					/>
				)}

				{/* <QuoteDetail isCreateQuoteModalOpen={isCreateQuoteModalOpen}
						setIsCreateQuoteModalOpen={setIsCreateQuoteModalOpen} /> */}
			</div>

		
		</>
	);
};

export default HomePage;
