import React, { useState } from "react";
import { getDatesInMonth } from "../utils/getDatesInMonth";
import useGetQuotes from "../hooks/useGetQuotes";
import { Quote, Section, SectionData } from "../interfaces/quotes";

const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

interface SideBarProps {
    isSidebarOpen: boolean;
    setSidebarOpen: (isOpen: boolean) => void;
    selectedDateQuotes: Quote[] | null;
    setSelectedDateQuotes: (quote: Quote[] | null) => void;
}

const QuoteCalendar: React.FC<SideBarProps> = ({ isSidebarOpen, setSidebarOpen, selectedDateQuotes, setSelectedDateQuotes }) => {
	const { quotes, isLoading, isError } = useGetQuotes();

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    

	// console.log(quotes);

	const now = new Date();

	const dates = getDatesInMonth(now.getFullYear(), now.getMonth());
	const firstDayIndex = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
	const gridCells = Array(firstDayIndex).fill(null).concat(dates);

	const getQuotesForDate = (date: Date) => {
		if (!quotes) return [];
		return quotes.filter(
			(quote: Quote) =>
				new Date(quote.quote_date).toDateString() === date.toDateString()
		);
	};

    const handleCellClick = (date: Date) => {
        
      
        setSelectedDate(date);

        
        const quotesForDate = getQuotesForDate(date);

        // console.log(quotesForDate)
        setSelectedDateQuotes(quotesForDate.length > 0 ? quotesForDate : null);

        // console.log(selectedDateQuotes)
        if (isSidebarOpen) {
            
            
            setSidebarOpen(false);
            
        } else {

            setSidebarOpen(true);
        }
      };

    

	if (isLoading) return <p>Loading quotes...</p>;
	if (isError) return <p>Error loading quotes.</p>;

	const rows = Math.ceil(gridCells.length / 7);

	return (
		<div className="quote-calendar border rounded-t-lg overflow-hidden mx-6">
			<table className="table-auto border-collapse w-full ">
				<thead>
					<tr>
						{daysOfWeek.map((day) => (
							<th
								scope="col"
								key={day}
								className="text-left  p-2 border border-gray-300 font-inter text-base font-medium leading-[19.36px] text-customGray"
							>
								{day}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{Array.from({ length: rows }).map((_, rowIndex) => (
						<tr key={rowIndex}>
							{Array.from({ length: 7 }).map((_, colIndex) => {
								const cellIndex = rowIndex * 7 + colIndex;
								const date = gridCells[cellIndex];
                               

								if (!date) {
									return (
										<td
											key={colIndex}
											className="p-4 border border-gray-300 bg-transparent h-[120px] min-w-[194px]"
										></td>
									);
								}

								const quotesForDate = getQuotesForDate(date);

								const isToday =
									date.getDate() === now.getDate() &&
									date.getMonth() === now.getMonth() &&
									date.getFullYear() === now.getFullYear();

                                

                                  

								return (
									<td
										key={colIndex}
										className={`p-4 border border-gray-300 h-[120px] cursor-pointer ${selectedDate?.toDateString() === date.toDateString() ? 'bg-mainColor' : 'bg-white'}`}
                                        onClick={() => handleCellClick(date)}
									>
										<div className="flex flex-col justify-start gap-[30px] h-full w-full pointer">
											<div className={` font-inter text-base font-medium leading-[19.36px] text-customGray  ${isToday ? 'bg-[#005BC2] p-1 rounded-[8px] w-fit text-white ' : ""} ${selectedDate?.toDateString() === date.toDateString() ? 'text-white' : ''}  `}>
												
													{date.getDate()}
											</div>
											{quotesForDate.length > 0 && (
												<div className=" flex flex-col gap-2 items-start  text-center text-sm ">
													<p className={`font-inter text-[12px] font-medium leading-[14.52px] text-[#374151] ${selectedDate?.toDateString() === date.toDateString() ? 'text-white' : ''}  `}>
														{quotesForDate.length} Quotes
													</p>
													<p className={`bg-green-100 py-1 px-2 rounded font-inter text-[12px] font-medium leading-[14.52px] text-[#374151]  ${selectedDate?.toDateString() === date.toDateString() ? 'bg-white' : ''}   `}>
														Total: $
														{quotesForDate
															.reduce(
																(sum: number, quote: { sections: Section[] }) =>
																	sum +
																	quote.sections.reduce(
																		(sectionSum, section) =>
																			sectionSum +
																			section.section_data.reduce(
																				(dataSum: any, data: SectionData) =>
																					dataSum + data.amount,
																				0
																			),
																		0
																	),
																0
															)
															.toFixed(2)}
													</p>
												</div>
											)}
										</div>
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default QuoteCalendar;
