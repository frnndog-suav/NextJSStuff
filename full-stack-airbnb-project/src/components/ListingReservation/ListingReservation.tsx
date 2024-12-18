import { FC } from "react";
import { Range } from "react-date-range";
import Button from "../Button/Button";
import Calendar from "../Input/Calendar/Calendar";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disableDates: Date[];
}

const ListingReservation: FC<ListingReservationProps> = ({
  dateRange,
  disableDates,
  onChangeDate,
  onSubmit,
  price,
  totalPrice,
  disabled,
}) => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {price}</div>
        <div className="font-light text-neutral-600">{" night"}</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disableDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disabled} label="Reserve" handleOnClick={onSubmit} />
      </div>
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div className="">Total</div>
        <div className="">$ {totalPrice}</div>
      </div>
    </div>
  );
};

export default ListingReservation;
