import Container from "@/components/Container/Container";
import EmptyState from "@/components/EmptyState/EmptyState";
import ListingCard from "@/components/Listings/ListingCard/ListingCard";
import getCurrentUser from "@/utils/getCurrentUser/getCurrentUser";
import getListing from "@/utils/getListing/getListing";

export default async function Home() {
  const listings = await getListing();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <div
        className="
      pt-24 
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      xl:grid-cols-5 
      2xl:grid-cols-6 
      gap-8">
        {listings.map((list) => (
          <ListingCard
            key={list.id}
            data={list}
            currentUser={currentUser}
            disabled={false}
          />
        ))}
      </div>
    </Container>
  );
}
