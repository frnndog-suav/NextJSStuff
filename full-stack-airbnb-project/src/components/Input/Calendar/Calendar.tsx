"use client";

import { FC } from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";

import 'react-date-range/dist/styles'
import 'react-date-range/dist/theme/default.css'

interface CalendarProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}

const Calendar: FC<CalendarProps> = ({ onChange, value, disabledDates }) => {
  return <DateRange
  
    
  />
};

export default Calendar;
