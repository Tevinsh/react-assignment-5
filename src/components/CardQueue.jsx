const CardQueue = (props) => {
    return (
        <div key={props.index} className="rounded-md bg-slate-400 flex mb-3 h-12 items-center font-semibold text-2xl">
            <div className="flex-none w-16 text-center">
                <p>{props.index}</p>
            </div>
            <div className="grow">
                <p>{props.name}</p>
            </div>
            <div className="flex-none w-32">
                <h1>{props.queue}</h1>
            </div>
        </div>
    )
}
export default CardQueue;