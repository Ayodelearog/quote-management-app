import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

interface TimepickerProps {
	name: string;
	value: Dayjs | null;
	onChange: (name: string, newValue: Dayjs | null) => void;
}

export default function TimePickerValue({
	name,
	value,
	onChange,
}: TimepickerProps) {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={["TimePicker", "TimePicker"]}>
				<TimePicker
					label=""
					value={value}
					onChange={(newValue) => onChange(name, newValue)}
					name={name}
				/>
			</DemoContainer>
		</LocalizationProvider>
	);
}
