import Image from "next/image";

const customerStories = [
  {
    author: {
      name: "Beto",
      role: "CEO da Empresa XYZ",
      avatar: "/avatar1.jpg",
    },
    content:
      "Aliquam accumsan neque sit amet sem porta, eu elementum tortor finibus. Fusce tristique ipsum ac neque sollicitudin vestibulum. Nullam sem enim, rutrum a tincidunt ut, sagittis id turpis.",
  },
  {
    author: {
      name: "Diego",
      role: "Especialista em Marketing na Empresa ABC",
      avatar: "/avatar2.jpg",
    },
    content:
      "Curabitur imperdiet, diam sed mattis posuere, orci justo commodo orci, id tincidunt leo mauris ut nibh. Mauris sagittis magna nec dui efficitur viverra. Nam ut laoreet velit. Duis convallis orci augue, vitae imperdiet erat pellentesque ac. Donec porta purus vitae massa aliquet finibus. Donec placerat congue arcu, in pellentesque sapien malesuada at.",
  },
];

export function CustomerStorySection() {
  return (
    <section className="container py-8 md:py-10">
      <div className="flex flex-col items-center gap-12">
        <h2 className={`text-heading-xl text-gray-100 font-inter`}>
          Quem utiliza, aprova
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {customerStories.map((customer) => {
            return (
              <div
                key={customer.author.name}
                className="flex flex-col gap-6 rounded-lg bg-gray-500 p-6 md:p-12"
              >
                <p className="text-balance text-gray-200">{customer.content}</p>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      fill
                      className="object-cover"
                      src={customer.author.avatar}
                      alt={"Imagem de perfil do usuário"}
                    />
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-gray-200 text-sm">
                      {customer.author.name}
                    </strong>
                    <span className="text-xs text-gray-300">
                      {customer.author.role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
