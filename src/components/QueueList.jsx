import CardQueue from "./CardQueue";

const QueueList = (props) => {
    return (
        <>
            {
                !props.list[0] && 
                <p className="text-center">Tidak Ada Antrian</p>
            }
            <div>
            {
                props.list[0] && <h1 className="mb-2">Antrian Berikutnya</h1>
            }
                <div>
                {
                    props.list.map((list,index)=>{
                        return (
                            <div key={index}>
                                <CardQueue index={index+1} name={list.name} queue={list.queue}/>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}

export default QueueList;