import React, { useState } from "react";
import { Quote } from "../interfaces/quotes";
import TimePickerValue from "./TimePicker";
import dayjs, { Dayjs } from "dayjs";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
import { TbAlertSquareRounded } from "react-icons/tb";

interface QuoteDetailProps {
	isQuoteDetailOpen: boolean;
	setIsQuoteDetailOpen: (isQuoteDetailOpen: boolean) => void;
}

const QuoteDetail: React.FC<QuoteDetailProps> = ({isQuoteDetailOpen, setIsQuoteDetailOpen
	
}) => {
	const currentDate = new Date();

	const [startTime, setStartTime] = useState<Dayjs | null>(dayjs());
	const [endTime, setEndTime] = useState<Dayjs | null>(dayjs());

	const handleTimeChange = (name: string, newValue: Dayjs | null) => {
		if (newValue) {
			const formattedTime = newValue.format("HH:mm");
			if (name === "startTime") {
				setStartTime(newValue);
			} else if (name === "endTime") {
				setEndTime(newValue);
			}
			// console.log(`${name} selected time:`, formattedTime);
		}
	};

	return (
		<div className="w-full h-full absolute top-0 left-0 flex justify-center items-center ">
			<div
				className="w-full h-full bg-black opacity-40 absolute"
				// onClick={() => setIsCreateQuoteModalOpen(false)}
			></div>

			<div className=" w-[90%] h-[806px] my-[47px] bg-white opacity-[100%] z-10 rounded-lg overflowY-scroll relative overflow-x-hidden ">
				<header className="w-[90%] px-6 py-[18px] border-b flex justify-between items-start fixed bg-white rounded-t-lg">
					<div className="flex items-center gap-2">
						<h1 className=" font-inter text-[20px] font-medium leading-[24.2px] text-mainColor mb-1">
							Quote Detail
						</h1>
						<p className=" font-inter text-[20px] font-normal leading-[24.2px] text-customGray mb-1">
							#34920_fe2
						</p>
					</div>

					<div className="flex items-center mr-[56px]">
						<div className="flex items-center gap-4 mr-[24px]">
							<button className="px-4 py-2 bg-[#296FD8] rounded-[24px] text-[12px] font-medium leading-[14px] text-white">
								Save Quote
							</button>
							<div
								className="  p-1.5 border border-[#296FD8]  rounded-[8px] cursor-pointer"
								// onClick={() => setIsCreateQuoteModalOpen(false)}
							>
								<BsDownload color="#296FD8" size={14} />
							</div>
						</div>
						<div
							className="  p-1.5 border border-[#E5E7EB]  rounded-[8px] cursor-pointer"
							onClick={() => setIsQuoteDetailOpen(false)}
						>
							<TfiClose color="#AD0013" size={14} className="" />
						</div>
					</div>
				</header>

				<div className="w-[90%] p-8 gap-8 mt-[100px] mx-20 border border-[#E5E7EB]  rounded-[12px] ">
					<div className="w-full flex justify-between items-center">
						<img src="/OnePort logo.png" alt="" className="w-[200px] " />

						<div className="text-right font-normal text-base leading6">
							<p>UAC Building Marina</p>
							<p>Lagos, Nigeria</p>
							<p>100223</p>
						</div>
					</div>

					<div className="px-6 py-10 bg-[#F9FAFB] flex flex-col gap-8  rounded-[16px]">
						<table className="w-full">
							<tbody className="w-full flex flex-col gap-8">
								<tr className="w-full flex">
									<td className="w-[25%]">
										<div className="flex gap-2 flex-col ">
											<p className="font-normal text-[12px] leading-[14.52px] text-customGray">
												Attention (Customer Name)
											</p>
											<p className="font-normal text-[16px] leading-[14.52px] text-[#1F2937]">
												Daniel Alobode
											</p>
										</div>
									</td>
									<td className="w-[25%]">
										<div className="flex gap-2 flex-col">
											<p className="font-normal text-[12px] leading-[14.52px] text-customGray">
												Email Address
											</p>
											<p className="font-normal text-[16px] leading-[14.52px] text-[#007003]">
												ample@mail.com
											</p>
										</div>
									</td>
									<td className="w-[25%]">
										<div className="flex gap-2 flex-col">
											<p className="font-normal text-[12px] leading-[14.52px] text-customGray">
												Commodity
											</p>
											<p className="font-normal text-[16px] leading-[14.52px] text-[#1F2937]">
												Electric goods
											</p>
										</div>
									</td>
									<td className="w-[25%]">
										<div className="flex gap-2 flex-col">
											<p className="font-normal text-[12px] leading-[14.52px] text-customGray">
												Service Type
											</p>
											<p className="font-normal text-[16px] leading-[14.52px] text-[#1F2937]">
												Export Air Freight
											</p>
										</div>
									</td>
								</tr>

								<tr className="w-full flex ">
									<td className="w-1/4">
										<div className="flex gap-2 flex-col w-full">
											<p className="font-normal text-[12px] leading-[14.52px] text-customGray">
												Chargeable weight (KG)
											</p>
											<p className="font-normal text-[16px] leading-[14.52px] text-[#1F2937]">
												55.34KG
											</p>
										</div>
									</td>
									<td className="w-1/4">
										<div className="flex gap-2 w-full flex-col">
											<p className="font-normal text-[12px] leading-[14.52px] text-customGray">
												POL (Port of Loading)
											</p>
											<p className="font-normal text-[16px] leading-[14.52px] text-[#1F2937]">
												Lagos City
											</p>
										</div>
									</td>
									<td className="w-1/4">
										<div className="flex gap-2 w-full flex-col">
											<p className="font-normal text-[12px] leading-[14.52px] text-customGray">
												POD (Port of Destination)
											</p>
											<p className="font-normal text-[16px] leading-[14.52px] text-[#1F2937]">
												Johannesburg
											</p>
										</div>
									</td>
									<td className="w-1/4">
										<div className="flex gap-2 w-full flex-col">
											<p className="font-normal text-[12px] leading-[14.52px] text-[#E11435]">
												Due Date
											</p>
											<p className="font-normal text-[16px] leading-[14.52px] text-[#1F2937]">
												23rd, March 2024
											</p>
										</div>
									</td>
								</tr>
							</tbody>
						</table>

						<div className="h-[1px] bg-[#E5E7EB]"></div>

						<div className="flex items-start justify-between">
							<div className="flex gap-2 flex-col ">
								<p className="font-normal text-[12px] leading-[14.52px] text-customGray">
									Collaection Address
								</p>
								<p className="font-normal text-[16px] leading-[22px] text-[#1F2937] max-w-[487px]">
									INNIO Waukesha Gas Engines 8123 116th Street, Suite 300, SW
									Side of Building, Dock 46-50, Pleasant Prairie, WI 53158
								</p>
							</div>

							<div className="flex gap-2 flex-col ">
								<p className="font-normal text-[12px] leading-[14.52px] text-customGray">
									Delivery Destination
								</p>
								<p className="font-normal text-[16px] leading-[14.52px] text-[#1F2937]">
									TPG PH
								</p>
							</div>
						</div>
					</div>

					<div className="w-full  flex flex-col gap-8">
						<div>
							<p className="font-normal text-[14px] leading-[16.94px] ">
								Quote Breakdown
							</p>
							<h2 className="font-medium text-[20px] leading-[24.2px] mt-2">
								ORIGIN HANDLING CHARGES{" "}
							</h2>
						</div>

						<div>
							<table className="w-full ">
								<thead className="w-full">
									<tr className="w-full flex  gap-6 py-2 border-t border-b border-[#E5E7EB] text-left">
										<th className="w-2/6 h-[48px] font-normal text-[12px] leading-[16px] text-[#9AA1B1] flex items-center border-r border-[#F3F4F6]">
											Basis
										</th>
										<th className="w-1/6 h-[48px] font-normal text-[12px] leading-[16px] text-[#9AA1B1] flex items-center border-r border-[#F3F4F6]">
											Unit of Measure
										</th>
										<th className="w-1/6 h-[48px] font-normal text-[12px] leading-[16px] text-[#9AA1B1] flex items-center border-r border-[#F3F4F6]">
											Unit
										</th>
										<th className="w-1/6 h-[48px] font-normal text-[12px] leading-[16px] text-[#9AA1B1] flex items-center border-r border-[#F3F4F6]">
											Rate (USD)
										</th>
										<th className="w-1/6 h-[48px] font-normal text-[12px] leading-[16px] text-[#9AA1B1] flex items-center border-r border-[#F3F4F6]">
											Amount (USD)
										</th>
									</tr>
								</thead>

								<tbody className="w-full">
									<tr className="w-full flex  gap-6 py-2  border-b border-[#E5E7EB] text-right">
										<td className="w-2/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6]">
											Freight Charges
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] text-center">
											Per Kilogram
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											610.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center justify-end border-r border-[#F3F4F6] pr-5">
											$3.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											$1,830.00
										</td>
									</tr>

									<tr className="w-full flex  gap-6 py-2  border-b border-[#E5E7EB] text-right">
										<td className="w-2/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6]">
											Screening
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] text-center">
											Per Kilogram
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											610.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center justify-end border-r border-[#F3F4F6] pr-5">
											$3.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											$1,830.00
										</td>
									</tr>

									<tr className="w-full flex  gap-6 py-2  border-b border-[#E5E7EB] text-right">
										<td className="w-2/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6]">
											Handling Charges
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] text-center">
											Per Shipment
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											1.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center justify-end border-r border-[#F3F4F6] pr-5">
											$55.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											$55.00
										</td>
									</tr>

									<tr className="w-full flex  gap-6 py-2  border-b border-[#E5E7EB] text-right">
										<td className="w-2/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6]">
											Documentation
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] text-center">
											Per Shipment
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											1.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center justify-end border-r border-[#F3F4F6] pr-5">
											$55.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											$55.00
										</td>
									</tr>

									<tr className="w-full flex  gap-6 py-2  border-b border-[#E5E7EB] text-right">
										<td className="w-2/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6]">
											Transfer Fee
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] text-center">
											Per Shipment
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											1.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center justify-end border-r border-[#F3F4F6] pr-5">
											$175.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											$175.00
										</td>
									</tr>

									<tr className="w-full flex  gap-6 py-2  border-b border-[#E5E7EB] text-right">
										<td className="w-2/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6]">
											Pickup Fee
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] text-center">
											Per Shipment
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											1.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center justify-end border-r border-[#F3F4F6] pr-5">
											$255.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											$255.00
										</td>
									</tr>

									<tr className="w-full flex  gap-6 py-4   border-[#E5E7EB] text-right">
										<td className="w-2/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center  border-[#F3F4F6]"></td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center  border-[#F3F4F6] text-center"></td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center  border-[#F3F4F6] justify-end pr-5"></td>
										<td className="w-1/6 h-[48px] font-medium text-[20px] leading-[16px] text-[#9AA1B1] flex items-center justify-end border-r border-[#F3F4F6] pr-5">
											Sub Total:
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[20px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											$2,472.00
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div className="w-full  flex flex-col gap-8">
						<div>
							<p className="font-normal text-[14px] leading-[16.94px] ">
								Quote Breakdown
							</p>
							<h2 className="font-medium text-[20px] leading-[24.2px] mt-2">
								DESTINATION HANDLING CHARGES{" "}
							</h2>
						</div>

						<div>
							<table className="w-full ">
								<thead className="w-full">
									<tr className="w-full flex  gap-6 py-2 border-t border-b border-[#E5E7EB] text-left">
										<th className="w-2/6 h-[48px] font-normal text-[12px] leading-[16px] text-[#9AA1B1] flex items-center border-r border-[#F3F4F6]">
											Basis
										</th>
										<th className="w-1/6 h-[48px] font-normal text-[12px] leading-[16px] text-[#9AA1B1] flex items-center border-r border-[#F3F4F6]">
											Unit of Measure
										</th>
										<th className="w-1/6 h-[48px] font-normal text-[12px] leading-[16px] text-[#9AA1B1] flex items-center border-r border-[#F3F4F6]">
											Unit
										</th>
										<th className="w-1/6 h-[48px] font-normal text-[12px] leading-[16px] text-[#9AA1B1] flex items-center border-r border-[#F3F4F6]">
											Rate (USD)
										</th>
										<th className="w-1/6 h-[48px] font-normal text-[12px] leading-[16px] text-[#9AA1B1] flex items-center border-r border-[#F3F4F6]">
											Amount (USD)
										</th>
									</tr>
								</thead>

								<tbody className="w-full">
									<tr className="w-full flex  gap-6 py-2  border-b border-[#E5E7EB] text-right">
										<td className="w-2/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6]">
											Estimate duty
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] text-center">
											Per Kilogram
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											610.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center justify-end border-r border-[#F3F4F6] pr-5">
											$3.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											$1,830.00
										</td>
									</tr>

									<tr className="w-full flex  gap-6 py-2  border-b border-[#E5E7EB] text-right">
										<td className="w-2/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6]">
											Custom Clearance/ Valuation
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] text-center">
											Per Kilogram
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											610.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center justify-end border-r border-[#F3F4F6] pr-5">
											₦3.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											₦1,830.00
										</td>
									</tr>

									<tr className="w-full flex  gap-6 py-2  border-b border-[#E5E7EB] text-right">
										<td className="w-2/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6]">
											Stamp Duty
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] text-center">
											Per Consignment
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											1.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center justify-end border-r border-[#F3F4F6] pr-5">
											₦55.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											₦55.00
										</td>
									</tr>

									<tr className="w-full flex  gap-6 py-2  border-b border-[#E5E7EB] text-right">
										<td className="w-2/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6]">
											Welfare
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] text-center">
											Per Consignment
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											1.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center justify-end border-r border-[#F3F4F6] pr-5">
											₦175.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											₦175.00
										</td>
									</tr>

									<tr className="w-full flex  gap-6 py-2  border-b border-[#E5E7EB] text-right">
										<td className="w-2/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6]">
											Handling Charges
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] text-center">
											Per Consignment
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											1.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center justify-end border-r border-[#F3F4F6] pr-5">
											₦175.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											₦175.00
										</td>
									</tr>

									<tr className="w-full flex  gap-6 py-2  border-b border-[#E5E7EB] text-right">
										<td className="w-2/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6]">
											FAAN
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] text-center">
											Per Consignment
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											1.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center justify-end border-r border-[#F3F4F6] pr-5">
											₦255.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											₦255.00
										</td>
									</tr>

									<tr className="w-full flex  gap-6 py-2  border-b border-[#E5E7EB] text-right">
										<td className="w-2/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6]">
											Airline charges
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] text-center">
											Per Consignment
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											1.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center justify-end border-r border-[#F3F4F6] pr-5">
											₦255.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											₦255.00
										</td>
									</tr>

									<tr className="w-full flex  gap-6 py-2  border-b border-[#E5E7EB] text-right">
										<td className="w-2/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6]">
											Transport to PH
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] text-center">
											Per Consignment
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											1.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center justify-end border-r border-[#F3F4F6] pr-5">
											₦255.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											₦255.00
										</td>
									</tr>

									<tr className="w-full flex  gap-6 py-2  border-b border-[#E5E7EB] text-right">
										<td className="w-2/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6]">
											SON
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] text-center">
											Per Consignment
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											1.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center justify-end border-r border-[#F3F4F6] pr-5">
											₦255.00
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											₦255.00
										</td>
									</tr>

									<tr className="w-full flex  gap-6 py-4   border-[#E5E7EB] text-right">
										<td className="w-2/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center  border-[#F3F4F6]"></td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center  border-[#F3F4F6] text-center"></td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center  border-[#F3F4F6] justify-end pr-5"></td>
										<td className="w-2/6 h-[48px] font-medium text-[20px] leading-[16px] text-[#9AA1B1] flex items-center justify-end border-r border-[#F3F4F6] pr-5">
											Total LOS airport to Client Door:
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[20px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											₦877,150.00
										</td>
									</tr>

									<tr className="w-full flex  gap-6 py-4   border-[#E5E7EB] text-right">
										<td className="w-2/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center  border-[#F3F4F6]"></td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center  border-[#F3F4F6] text-center"></td>
										<td className="w-1/6 h-[48px] font-medium text-[12px] leading-[16px] text-mainColor flex items-center  border-[#F3F4F6] justify-end pr-5"></td>
										<td className="w-2/6 h-[48px] font-medium text-[20px] leading-[16px] text-[#9AA1B1] flex items-center justify-end border-r border-[#F3F4F6] pr-5">
											ALL-IN Door to Door (NGN):
										</td>
										<td className="w-1/6 h-[48px] font-medium text-[20px] leading-[16px] text-mainColor flex items-center border-r border-[#F3F4F6] justify-end pr-5">
											₦4,090,750.00
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div className="w-full rounded-[16px] flex gap-2 p-6 bg-green-950 ">
						<TbAlertSquareRounded className="translate-y-180 text-white" size={32}/>

						<div className="flex flex-col gap-8 text-white">
							<p>
								Please note this offer is firm for acceptance within 48hours,
								otherwise above offer will be considered as invalid. Rates
								advised is subject to prevailing market rate at the time of
								invoice. Freight advised is subject to chargeable weight as
								declared by airline. Above tariff is not applicable to
								non-compliant shipments without Form Ms, PAARs.
							</p>

							<p>
								NOTE: Duty and tax not inclusive in the rates advised. They will be advised when you provide the CIF value and H.S. code. 
								We do trust that this offer meets your requirements. Please, contact us if any further explanation is required.
							</p>
						</div>
					</div>

					<div className="w-full  flex flex-col gap-8">
						<div>
							<h2 className="font-medium text-[20px] leading-[24.2px] mt-2">
								ONEPORT365 TERMS AND CONDITIONS{" "}
							</h2>
						</div>

						<div className="border border-[#E5E7EB] px-4 py-2 rounded-[16px] w-full flex flex-col gap-2">

							<div className="flex items-center gap-6 py-0.5">
								<p className="font-medium text-base text-mainColor">1.</p>
								<div className="border-l border-[#E5E7EB] pl-4 font-medium text-base text-mainColor">Above rates are for cargo details as provided by you.</div>

							</div>
							<div className="flex items-center gap-6 py-4">
								<p className="font-medium text-base text-mainColor">2.</p>
								<div className="border-l border-[#E5E7EB] pl-4 font-medium text-base text-mainColor">Above quotes is/are subject to VAT.</div>

							</div>
							<div className="flex items-center gap-6 py-4">
								<p className="font-medium text-base text-mainColor">3.</p>
								<div className="border-l border-[#E5E7EB] pl-4 font-medium text-base text-mainColor">Above quoted rates are on a Door-to-Door basis excludes of Duties at the time of exports.</div>

							</div>
							<div className="flex items-center gap-6 py-4">
								<p className="font-medium text-base text-mainColor">4.</p>
								<div className="border-l border-[#E5E7EB] pl-4 font-medium text-base text-mainColor">Standard Trading Terms and conditions of Oneport365 applies.</div>

							</div>
							<div className="flex items-center gap-6 py-4">
								<p className="font-medium text-base text-mainColor">5.</p>
								<div className="border-l border-[#E5E7EB] pl-4 font-medium text-base text-mainColor">Above rates excludes services like packaging, re-packing, Customs Inspection etc which may be charged additional (if required) with prior customer approval.</div>

							</div>
							<div className="flex items-center gap-6 py-4">
								<p className="font-medium text-base text-mainColor">6.</p>
								<div className="border-l border-[#E5E7EB] pl-4 font-medium text-base text-mainColor">Above rates do not cover insurance charges.</div>

							</div>
							<div className="flex items-center gap-6 py-4">
								<p className="font-medium text-base text-mainColor">7.</p>
								<div className="border-l border-[#E5E7EB] pl-4 font-medium text-base text-mainColor">Above rates do not include any additional services e.g.- specia handling, week-end pick-up/delivery,which has not been agreed and same will be charged as mutually agreed before services are rendered.</div>

							</div>
							<div className="flex items-center gap-6 py-4">
								<p className="font-medium text-base text-mainColor">8.</p>
								<div className="border-l border-[#E5E7EB] pl-4 font-medium text-base text-mainColor">Above rates apply ofr weight/volume (whichever is higher). Rates are based on ratio 1:6.</div>

							</div>
							<div className="flex items-center gap-6 py-4">
								<p className="font-medium text-base text-mainColor">9.</p>
								<div className="border-l border-[#E5E7EB] pl-4 font-medium text-base text-mainColor">quotes are valid for a period of one month and will need prior approval from Oneport365 incase further extension is required.</div>

							</div>
							<div className="flex items-center gap-6 py-4">
								<p className="font-medium text-base text-mainColor">10.</p>
								<div className="border-l border-[#E5E7EB] pl-4 font-medium text-base text-mainColor">Charges are based on shipment details provided by you: if quatity/weight will vary our quotation will change accordingly.</div>

							</div>
							<div className="flex items-center gap-6 py-4">
								<p className="font-medium text-base text-mainColor">11.</p>
								<div className="border-l border-[#E5E7EB] pl-4 font-medium text-base text-mainColor">Pricing team has the right to re-price if the actual cargo details differ from the information indicated in the enquiry.</div>

							</div>
							<div className="flex items-center gap-6 py-4">
								<p className="font-medium text-base text-mainColor">12.</p>
								<div className="border-l border-[#E5E7EB] pl-4 font-medium text-base text-mainColor">Unless otherwise specified, any haulage included within the quotes is based upon standard roadside only and between business hours Monday to Friday.</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// font-family: Inter;
// font-size: 14px;
// font-weight: 400;
// line-height: 16.94px;
// letter-spacing: -0.5px;
// text-align: left;

export default QuoteDetail;
