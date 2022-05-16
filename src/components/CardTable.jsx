const CardTable = (props) => {
    return (
        <div className="rounded-md bg-slate-400 py-5 px-3 w-64 mb-2">
            <h1 className="font-semibold text-xl">{props.tableName}</h1>
            <p className="text-base">Status :</p>
            <h1 className="text-base">{props.tableState}</h1>
        </div>
    )
}
export default CardTable;