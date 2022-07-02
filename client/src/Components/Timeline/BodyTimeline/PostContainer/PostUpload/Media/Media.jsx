import SpanImages from "../../../../../../Helper/Components/SpanImages";

const Media = (Props) => {
  return (
    <li className="flex items-center hover:cursor-pointer">
      <SpanImages
        spanClass="pr-[0.2rem]"
        imgClass="h-[1.2rem] w-[1.2rem] max800:h-[1rem] max800:w-[1rem]"
        url={Props.url}
        alt="Media"
      />
      <p className="max800:text-[0.6rem]">{Props.p}</p>
    </li>
  );
};

export default Media;
