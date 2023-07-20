"use client";

import { SafeListing, SafeUser } from "@/types";
import { Reservation } from "@prisma/client";
import { FC, useMemo } from "react";
import Container from "../Container/Container";
import ListingHead from "../ListingHead/ListingHead";
import { categories } from "../Navbar/Categories/Categories";
import ListingInfo from "../ListingInfo/ListingInfo";

interface ListingClientProps {
  reservation?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const ListingClient: FC<ListingClientProps> = ({
  listing,
  currentUser,
  reservation,
}) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
              guestCount={listing.guestCount}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
