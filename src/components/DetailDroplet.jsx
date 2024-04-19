

const DetailDroplet = (props) => {
  return (
    <div className="flex flex-col">
      <p className="font-medium text-slate-500">{props.label}</p>
      <div className="flex flex-row items-center gap-[4px] border py-[2px] px-4 rounded-md mt-2">
        {props.icon}
        <p className="font-medium">3</p>
      </div>
    </div>
  );
};

export default DetailDroplet;
