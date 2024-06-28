import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import QuoteDetail from "../components/QuoteDetail";

function AddNewQuote() {
	const currentDate = new Date();

	const currentDay = currentDate.getDate();
	const currentMonth = currentDate.getMonth() + 1;
	const currentYear = currentDate.getFullYear();
	const [isQuoteDetailOpen, setIsQuoteDetailOpen] = useState<boolean>(false);

	const getOrdinalSuffix = (day: number) => {
		if (day > 3 && day < 21) return "th";
		switch (day % 10) {
			case 1:
				return "st";
			case 2:
				return "nd";
			case 3:
				return "rd";
			default:
				return "th";
		}
	};

	// Function to format the date
	const formatDate = (date: Date) => {
		const options: Intl.DateTimeFormatOptions = {
			weekday: "short",
			month: "short",
			year: "numeric",
		};
		const day = date.getDate();
		const ordinalSuffix = getOrdinalSuffix(day);
		const formattedDate = date.toLocaleDateString("en-US", options);

		// Split the formatted date to inject the day and ordinal suffix
		const [weekday, month, year] = formattedDate.split(" ");
		const result = ` ${year} ${weekday} ${day}${ordinalSuffix}, ${month}`;

		return result;
	};

	const formattedDate = formatDate(currentDate);
	// console.log(formattedDate);

	return (
		<div className="w-full min-h-screen overflow-hidden relative">
			<header className="w-full px-[64px] py-[36px] flex justify-between items-start min-h-[79px] bg-[#FAFAFA]">
				<div>
					<Link
						to="/"
						className=" font-inter text-[12px] font-[400] leading-[16px] text-[#6B7280] flex items-center"
					>
						<span>
							<FaChevronLeft />
						</span>
						Back to quotes
					</Link>
					<h1 className=" font-inter text-[24px] font-semibold leading-[29.05px] text-mainColor tracking-[-0.03em]">
						"Quote Title Here"{" "}
						<span className="text-[#9CA3AF]">
							[{currentDay}/{currentMonth}/{currentYear}]
						</span>
					</h1>
				</div>

				<div className="flex gap-2">
					<button className="rounded border border-[#F3F4F6] px-[14px] py-[10px] font-normal text-[14px] leading-5 text-[#6B7280] bg-white">
						Save as draft
					</button>

					<button className="rounded border border-[#F3F4F6] px-[14px] py-[10px] font-normal text-[14px] leading-5 text-[#005C00] bg-[#37B24833] flex items-center" onClick={()=> setIsQuoteDetailOpen(true)}>
						<span className="text-[#005C00] mr-2">
							<IoEyeOutline size={16} />
						</span>
						Preview
					</button>
				</div>
			</header>

			<div className="w-full py-[40px] px-[64px] flex gap-8">
				<div className="w-full h-full bg-[#F9FAFB] ">
					<div className="w-full px-4 py-2  flex items-center">
						<p className="mr-[10px]">Change Quote Time</p>
						<div className="rounded-[32px] border border-[#DBE3DC] px-3 py-2.5">
							{formattedDate}
						</div>
					</div>

					<div className="w-full ">
						<div className="w-full border bg-white">
							<input
								type="text"
								className="h-[47px] p-4 border border-[#139C33]"
								placeholder="Enter Section Label"
							/>
						</div>
					</div>

					<div className="w-full">
						<table>
							<thead>
								<tr className="flex gap-8 p-4 w-full">
									<th className="min-w-[206px] text-left ">Basis</th>

									<th className="min-w-[134px] text-left">
										<p>Unit of measure</p>
									</th>
									<th className="min-w-[96px] text-left">Unit</th>
									<th className="min-w-[96px] text-left">
										Rate <span>USD</span>
									</th>

									<th className="min-w-[277px] text-left ">
										Amount <span>USD</span>
									</th>
								</tr>
							</thead>

							<tbody>
								<tr className="w-full h-[48px] rounded px-4 ">
									<td className="w-[206px]">
										<input
											type="text"
											placeholder="Enter Basis"
											// className="w-[206px]"
										/>
									</td>
									<td className="min-w-[134px]">
										<select name="" id="" className="w-full">
											<option value="Per Kilogram">Per Kilogram</option>
										</select>
									</td>
									<td className="min-w-[96px]">
										<input type="text" placeholder="Enter unit" />
									</td>
									<td className="min-w-[96px]">
										<input type="text" placeholder="Enter rate" />
									</td>
									<td>
										<input type="text" placeholder="Amount" />
									</td>
									<td>Delete</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			{
				isQuoteDetailOpen && 
				<QuoteDetail isQuoteDetailOpen={isQuoteDetailOpen} setIsQuoteDetailOpen={setIsQuoteDetailOpen} />}
		</div>
	);
}



export default AddNewQuote;
