import { Tag } from "@/components/tag";

type Props = {
  title: string;
  cover: string;
  category: string;
  description: string;
  tags: string[];
};

export function PortfolioCard({
  title,
  cover,
  category,
  description,
  tags,
}: Props) {
  return (
    <div
      key={title}
      className="border border-[#1c2333] transition-[border-color,box-shadow] duration-250 hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(59,130,246,0.08)] rounded-2xl bg-[#0f1420] overflow-hidden flex flex-col"
    >
      <div
        className="h-50 bg-cover bg-top flex items-center justify-center border-b border-[#1c2333]"
        style={{ backgroundImage: `url(${cover})` }}
      />
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2.5">
          <h3 className="font-heading font-semibold text-base flex-1">
            {title}
          </h3>
          <Tag>{category}</Tag>
        </div>
        <p className="text-[0.83rem] text-[#6b7280] leading-[1.65] flex-1">
          {description}
        </p>
        <div className="mt-4 flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        {/* <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="text-[0.82rem] text-primary-light font-medium transition-opacity hover:opacity-[0.7]"
                  >GitHub ↗</a
                >
                <a
                  href="#"
                  className="text-[0.82rem] text-[#6b7280] hover:text(-text) font-medium transition-colors"
                  >Demo ↗</a
                >
              </div> */}
      </div>
    </div>
  );
}
