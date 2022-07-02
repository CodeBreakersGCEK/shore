import SpanImages from "../../../../../../Helper/Components/SpanImages";

const Suggestion = (Props) => {
  return (
    <li className="flex items-center pl-[0.5rem] py-[0.2rem] my-[0.4rem] hover:cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
      <SpanImages
        spanClass="pr-[0.2rem]"
        imgClass="h-[2rem] w-[2rem] object-cover rounded-[50%]"
        alt={Props.FriendName}
        url={Props.url}
      />
      <p className="text-[0.8rem] h-[1rem] font-[500]">{Props.FriendName}</p>
    </li>
  );
};

export default Suggestion;
