const Stats = (props) => {
  return (
    <div className="flex items-center mx-[0.2rem] text-[0.7rem] p-[0.1rem] hover:cursor-pointer">
      <img className="mx-[0.1rem] h-[0.8rem] w-[0.8rem]" src={ props.url} />
      <span>{props.value}</span>
    </div>
  );
};

export default Stats;
