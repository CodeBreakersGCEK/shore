import SpanImages from "../../../../../../Helper/Components/SpanImages";

const Activity = (Props) => {
  return (
    <li className="my-[1rem] px-[0.6rem] py-[0.3rem] flex items-center hover:cursor-pointer hover:bg-[rgba(0,0,0,0.1)]">
      <SpanImages
        spanClass="mr-[0.6rem]"
        imgClass="h-[2rem] w-[2rem] aspect-square"
        alt="Props.name"
        url={Props.url}
      />
      <p className="text-[0.8rem] overflow-hidden h-[1rem] font-[500]">{ Props.name}</p>
    </li>
  );
};

export default Activity;
