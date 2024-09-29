export default function Ticket(props){
    return(
      <div>
        <div className="flex flex-row justify-center items-center gap-2 w-full max-w-[1344px]  ">
  <div className="bg-purple-700 text-white lg:w-72 lg:h-80 h-60 lg:rounded-md rounded-sm flex flex-col justify-center items-start text-start px-4">
    <h1 className="font-bold font-serif mb-3">{props.title}</h1>
    <p>{props.para}</p>
  </div>
</div>

      </div>
    );
}