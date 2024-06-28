import React, { useState } from "react";
import { Quote } from "../interfaces/quotes";
import TimePickerValue from "./TimePicker";
import dayjs, { Dayjs } from "dayjs";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";

interface SideBarProps {
	isCreateQuoteModalOpen: boolean;
	setIsCreateQuoteModalOpen: (isCreateQuoteModalOpen: boolean) => void;
}

const AddQuoteModal: React.FC<SideBarProps> = ({
	isCreateQuoteModalOpen,
	setIsCreateQuoteModalOpen,
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
				onClick={() => setIsCreateQuoteModalOpen(false)}
			></div>
			<div className=" w-auto  bg-white opacity-[100%] z-10 rounded-lg ">
				<header className="w-full p-6 pb-[17px] border-b flex justify-between items-start min-h-[79px]">
					<div>
						<h1 className=" font-inter text-[16px] font-semibold leading-[19.36px] text-mainColor mb-1">
							Create New Quotes
						</h1>
						<p className=" font-inter text-[12px] font-normal leading-[12px] text-customGray ">
							Enter quote name and time
						</p>
					</div>

					<div
						className="text-[24px] text-[#9CA3AF] cursor-pointer"
						onClick={() => setIsCreateQuoteModalOpen(false)}
					>
						<TfiClose />
					</div>
				</header>

				<div className="w-full p-6 gap-8 flex flex-col  ">
					<label
						htmlFor="quoteTitle"
						className="text-[#4B5563] font-medium leading-[14.52px] text-[12px] w-full "
					>
						Enter Quote Title
						<input
							type="text"
							name="quoteTitle"
							placeholder="Enter quote title here"
							id="quoteTitle"
							className="w-full h-[44px] px-4 py3 mt-2 placeholder:text-[14px] border rounded border-[#E5E7EB] placeholder:font-normal placeholder:leading-[20px] placeholder:text-customGray"
						/>
					</label>

					<div className="flex gap-5 justify-between w-full">
						<label
							htmlFor="quoteTitle"
							className="text-[#4B5563] font-medium leading-[14.52px] text-[12px] w-full "
						>
							Start Time
							<TimePickerValue
								name="startTime"
								value={startTime}
								onChange={handleTimeChange}
							/>
						</label>
						<label
							htmlFor="quoteTitle"
							className="text-[#4B5563] font-medium leading-[14.52px] text-[12px] w-full "
						>
							End Time
							<TimePickerValue
								name="endTime"
								value={endTime}
								onChange={handleTimeChange}
							/>
						</label>
					</div>
				</div>

				<footer className="w-full px-8 py-6 border-t border-[#E5E7EB]">
					<Link to="/add_new_quote">
						<button className="w-full h-[44px] bg-[#007003] text-[14px] font-normal leading-5 text-center text-white rounded active:bg-white active:text-[#007003] active:border-2 active:border-[#007003]">
							Create New Quote
						</button>
					</Link>

					<button className="w-full h-[44px] bg-white text-[14px] font-normal leading-5 text-center text-[#E11435] rounded active:text-black">
						Cancel
					</button>
				</footer>
			</div>
		</div>
	);
};

export default AddQuoteModal;
