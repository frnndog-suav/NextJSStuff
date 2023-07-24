interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disableDates: Date[];
}

const ListingReservation = () => {
  return <div></div>;
};

export default ListingReservation;
