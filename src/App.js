import logo from './logo.svg';
import './App.css';

function App() {
  const age = 24;
  const name = "Galih"
  const time = new Date().getDate();
  const isOpen = false;
  const bottom = 'Celana';
  const tahunSekarang = new Date().getFullYear();
  const tahunLahir = 1997;

  const renderToko = () => {
    return !isOpen ? "toko buka" : "toko tutup"
  }
  const renderWarteg = () => {
    if ( !isOpen  ){
      return "Toko Buka"
    } else if ( !!isOpen){
      return "Toko Tutup"
    } else {
      return "undefined"
    }
  }

  const gender = (param) => {
    const who = param.toLowerCase();
    if (who === 'celana'  ){
      return "Laki-laki coy"
    }  else {
      return "Perempuan Coy"
    }
  }

  const checkUsia = (age1,age2) => {
    return age1-age2;
  }

  const students = [
    {
      id: 1,
      name: "budi",
    },
    {
      id: 2,
      name: "rahmat",
    },
    {
      id: 3,
      name: "indah",
    },
  ];

  return (
    <div className="App">
      {
        students.map(function(item){
          return (
            <div>
              <p>nomor absen {item.id}</p>
              <p>{item.name}</p>
            </div>
          )
        })
      }
      <p>Hello usia saya {age}</p>
      <p>panjang nama saya adalah {name.length}</p>
      <p>hari ini tanggal {time}</p>
      <p>{!!isOpen ?  "toko buka" :  "toko tutup"}</p>
      <p>{renderToko()}</p>
      <p>{renderWarteg()}</p>
      <p>{gender(bottom)}</p>
      <p>usia saya adalah {checkUsia(tahunSekarang,tahunLahir)}</p>
      
    </div>
  );
}

export default App;
