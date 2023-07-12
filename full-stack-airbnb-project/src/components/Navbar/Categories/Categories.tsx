import CategoryBox from "@/components/CategoryBox/CategoryBox";
import Container from "@/components/Container/Container";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach } from "react-icons/tb";

export const categories = [
  {
    id: "1",
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach",
  },
  {
    id: "2",
    label: "Windmill",
    icon: GiWindmill,
    description: "This property has windmills",
  },
  {
    id: "3",
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property has windmills",
  },
];

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox key={item.id} label={item.label} icon={item.icon} />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
