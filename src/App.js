import './App.css';
import { useState } from 'react';
import CardTable from './components/CardTable';
import Header from './components/Header';
import Alerts from './components/Alerts';
import QueueList from './components/QueueList';
import Footer from './components/Footer';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function App() {
  document.title = "Simulasi Antrian";
  const [name , setName] = useState('');
  const [currentQueue, setCurrentQueue] = useState(0);
  const [queue, setQueue] = useState([]);
  const [meja1, setMeja1] = useState({onDuty:false,client:null})
  const [meja2, setMeja2] = useState({onDuty:false,client:null})
  const [meja3, setMeja3] = useState({onDuty:false,client:null})
  const [meja4, setMeja4] = useState({onDuty:false,client:null})

  const handleChange = (event) => {
    setName(event.target.value);
  }

  const handleDuty = (event) => {
    if(queue.length !== 0){
      let e = event.target.value;
      let client = queue[0];
      setQueue(queue.filter((item,index)=> index!==0))
      switch(e){
        case 'meja1':
          setMeja1({onDuty:true,client:client.queue})
          break;
        case 'meja2':
          setMeja2({onDuty:true,client:client.queue})
          break;
        case 'meja3':
          setMeja3({onDuty:true,client:client.queue})
          break;
        case 'meja4':
          setMeja4({onDuty:true,client:client.queue})
          break;
        default:
          return null;
      }
      MySwal.fire({
        title: <p>{client.queue} dipersilahkan ke {e}</p>,
        text: "Terimakasih!",
        icon: "success",
        button: "Ok",
      })
    }
    
  }

  const handleFinish = (event) => {
    let e = event.target.value;
    switch(e){
      case 'meja1':
        setMeja1({onDuty:false,client:null})
        break;
      case 'meja2':
        setMeja2({onDuty:false,client:null})
        break;
      case 'meja3':
        setMeja3({onDuty:false,client:null})
        break;
      case 'meja4':
        setMeja4({onDuty:false,client:null})
        break;
      default:
        return null;
    }
    console.log(queue.length);
    if (queue[0]){
      MySwal.fire({
        title: <p>{e} Telah selesai dimohon antrian {queue[0].queue} untuk bersiap</p>,
        text: "Terimakasih!",
        icon: "success",
        button: "Ok",
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let queueNumber = 'A'+currentQueue.toLocaleString("en-US", {
      minimumIntegerDigits: 3,
      useGrouping: false,
  });
    setQueue([...queue, {name: name, queue: queueNumber}]);
    setName('');
    setCurrentQueue(currentQueue+1);
  }
  return (
    <>
    <Header />
    <div className='mx-28'>
      <Alerts />
      <div className='flex justify-between'>
        <div>
          <CardTable tableName="Meja 1" tableState={ meja1.onDuty===false && meja1.client===null?"not on duty": meja1.client }/>
            <button disabled={meja1.onDuty} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l w-32" onClick={handleDuty} value="meja1">Kerjakan</button>
            <button disabled={meja1.client===null} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r w-32" onClick={handleFinish} value="meja1">Selesaikan</button>
        </div>
        <div>
          <CardTable tableName="Meja 2" tableState={ meja2.onDuty===false && meja2.client===null?"not on duty": meja2.client }/>
          <button disabled={meja2.onDuty} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l w-32" onClick={handleDuty} value="meja2">Kerjakan</button>
          <button disabled={meja2.client===null} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r w-32" onClick={handleFinish} value="meja2">Selesaikan</button>
        </div>
        <div>
          <CardTable tableName="Meja 3" tableState={ meja3.onDuty===false && meja3.client===null?"not on duty": meja3.client }/>
          <button disabled={meja3.onDuty} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l w-32" onClick={handleDuty} value="meja3">Kerjakan</button>
          <button disabled={meja3.client===null} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r w-32" onClick={handleFinish} value="meja3">Selesaikan</button>
        </div>
        <div>
          <CardTable tableName="Meja 4" tableState={ meja4.onDuty===false && meja4.client===null?"not on duty": meja4.client }/>
          <button disabled={meja4.onDuty} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l w-32" onClick={handleDuty} value="meja4">Kerjakan</button>
          <button disabled={meja4.client===null} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r w-32" onClick={handleFinish} value="meja4">Selesaikan</button>
        </div>
      </div>

      <div className='rounded-md my-4 px-3 py-2 bg-slate-400'>
        <p>Masukkan Antrian:</p>
        <form onSubmit={handleSubmit}>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" placeholder='Nama' type="text" value={name} onChange={handleChange} />
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-2' type='submit'>Submit</button>
        </form>
      </div>
      <QueueList list={queue} />
      <Footer />
    </div>
    </>
  );
}

export default App;
