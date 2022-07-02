const SpanImages = (Props) => {
  return (
    <span className={Props.spanClass}>
      <img className={Props.imgClass} src={Props.url} alt={Props.alt} />
    </span>
  );
};

export default SpanImages;

//  <SpanImages
//         spanClass=""
//         imgClass=""
//         url={}
//         alt=""
//       /> 