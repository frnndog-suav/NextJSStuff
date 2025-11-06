import Image from "next/image";
import Link from "next/link";

type TAuthor = {
  name: string;
  avatar: string;
};

type TProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: TAuthor;
};

export function PostCard({
  author,
  date,
  description,
  image,
  slug,
  title,
}: TProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="
      w-full 
      max-w-2xl 
      rounded-t-[12px] 
      border-[1px] 
      border-gray-400 
      bg-gray-600 
      overflow-hidden 
      transition-all 
      duration-300 
        hover:border-[1px]
     hover:border-blue-300
      "
    >
      {/* content */}
      <div className="p-2 rounded-md overflow-hidden">
        {/* image container */}
        <div className="relative">
          <div className="absolute top-0 right-0 px-3 py-1 bg-gray-600 backdrop-blur-sm rounded-bl-[10px]">
            <span className="text-gray-300 text-body-xs">{date}</span>
          </div>
          <Image
            src={image}
            alt={title}
            width={288}
            height={144}
            className="w-full h-40 object-cover object-center rounded-[8px]"
          />
        </div>

        {/* post info */}
        <div className="px-2 mt-4 space-y-4">
          <h2 className="text-heading-sm text-gray-100 line-clamp-3">
            {title}
          </h2>

          <p className="text-gray-300 text-body-sm line-clamp-3">
            {description}
          </p>

          {/* post footer */}
          <div className="flex items-center gap-3 border-t border-gray-400 py-4">
            <div
              className="
                relative 
                h-5 
                w-5 
                md:h-6 
                md:w-6 
                overflow-hidden 
                rounded-full border-blue-200 border-[1px]"
            >
              <Image
                src={'/' + author.avatar}              
                alt=""
                fill
                className="object-cover rounded-md"
              />
            </div>

            <span className="text-body-sm text-gray-300">{author.name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
