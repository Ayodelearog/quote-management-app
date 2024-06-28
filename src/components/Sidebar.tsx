import React from "react";
import { Quote } from "../interfaces/quotes";

interface SideBarProps {
	isSidebarOpen: boolean;
	setSidebarOpen: (isOpen: boolean) => void;
	selectedDateQuotes: Quote[] | null;
	setSelectedDateQuotes: (quote: Quote[] | null) => void;
	isCreateQuoteModalOpen: boolean;
	setIsCreateQuoteModalOpen: (isCreateQuoteModalOpen: boolean) => void;
}

const SideBar: React.FC<SideBarProps> = ({
	isSidebarOpen,
	setSidebarOpen,
	selectedDateQuotes,
	setSelectedDateQuotes,
	isCreateQuoteModalOpen,
	setIsCreateQuoteModalOpen,
}) => {
	const currentDate = new Date();

	const currentDay = currentDate.getDate();
	const currentMonth = currentDate.getMonth() + 1;
	const currentYear = currentDate.getFullYear();

	// console.log(selectedDateQuotes);

	return (
		<aside
			className={`absolute top-0 right-0 h-[100%] w-[19rem] bg-[#1F2937] shadow-custom  transform transition-transform duration-800 ease-in-out p-4 ${
				isSidebarOpen ? "translate-x-0  " : "translate-x-full shadow-none"
			}`}
		>
			<div className="flex items-center justify-between mb-4">
				<p className=" font-inter text-[13px] font-bold leading-[20px] text-blue ">
					TODAY{" "}
					<span className="font-inter text-[13px] font-normal leading-[20px] ml-2">{`${currentDay}/${currentMonth}/${currentYear}`}</span>{" "}
				</p>
				<p className=" font-inter text-[13px] font-bold leading-[20px] text-[#FFFFFFB2] ">
					55° /{" "}
					<span className="font-inter text-[13px] font-normal leading-[20px] ">
						40°
					</span>{" "}
					<span className="text-white">🔆</span>
				</p>
			</div>

			{selectedDateQuotes !== null && selectedDateQuotes?.length > 0 ? (
				<div className="w-full h-full">
					<div className="w-full h-auto flex flex-col gap-4">
						{selectedDateQuotes?.map((quote, index) => (
							<div
								key={quote._id}
								className="w-full p-1 flex items-center cursor-pointer border border-[#1F2937] transition duration-400 ease-in-out rounded-[4px] hover:bg-[#D0F5FF]"
							>
								<div className="bg-[#374151] h-[46px] min-w-[5px] rounded-[2px] mr-2"></div>

								<div className="w-full py-1 flex flex-col gap-2 items-start">
									<div className=" w-full flex items-center justify-between">
										{quote.sections.length > 0 && (
											<p className="text-blue text-[12px] font-normal leading-[14.52px]">
												$
												{quote.sections[0].section_data
													.reduce((sum, data) => sum + data.amount, 0)
													.toFixed(2)}
											</p>
										)}

										<span className="px-0.5 bg-[#374151] rounded-[2px] text-[#D0F5FF] text-[12px] font-normal leading-[14.52px]">
											9:30AM
										</span>
									</div>
									<p className="text-blue text-[12px] font-normal leading-[14.52px]">
										{quote.quote_title}
									</p>
								</div>
							</div>
						))}
					</div>

					<button
						className="w-full rounded-[8px] py-3 px-4 bg-white text-[#1F2937] text-[11px] font-medium leading-[16px] shadow-custom mt-4
"
						onClick={() => setIsCreateQuoteModalOpen(true)}
					>
						+ Add new quote
					</button>
				</div>
			) : (
				<div className="w-full h-full flex flex-col justify-center">
					<p className="text-white font-normal text-base text-center">
						No quotes yet
					</p>
					<button
						className="w-full rounded-[8px] py-3 px-4 bg-white text-[#1F2937] text-[11px] font-medium leading-[16px] shadow-custom mt-4
"
						onClick={() => setIsCreateQuoteModalOpen(true)}
					>
						+ Add new quote
					</button>
				</div>
			)}
		</aside>
	);
};

// font-family: Inter;
// font-size: 13px;
// font-weight: 700;
// line-height: 20px;
// text-align: left;

export default SideBar;
