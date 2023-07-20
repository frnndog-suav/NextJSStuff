import EmptyState from "@/components/EmptyState/EmptyState";
import ListingClient from "@/components/ListingClient/ListingClient";
import getCurrentUser from "@/utils/getCurrentUser/getCurrentUser";
import getListingId from "@/utils/getListingById/getListingById";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingId(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return <ListingClient listing={listing} currentUser={currentUser} />;
};

export default ListingPage;
