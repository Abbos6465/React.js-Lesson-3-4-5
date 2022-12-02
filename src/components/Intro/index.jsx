import React, { useState, useRef } from "react";
import "./Intro.scss";
import Card from "../../UI";
import { user } from "./data";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Intro = () => {
  const [task, setTask] = useState([]);

  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");

  const addTask = () => {
    const chack={
      title:title.trim().length===0,
      deadline:deadline.trim().length===0
    };

    const newTask = {
      id: uuidv4(),
      title: title,
      deadline: deadline,
    };
    if(chack.title || chack.deadline){
      toast.error("Maydonni to'ldirishda xatolik",{
      position: "top-right",
      autoClose:2000,
      }
      );
    }
    else{
    toast.success("Muvaffaqqiyatli qo'shildi.",{
      position: "top-right",
      autoClose:2000,
    })
    setTask([...task, newTask]);
    }
    setTitle("");
    setDeadline("");
  };

  const deleteTask = (id)=>{
    const newTasks=task.filter((el)=>{
      return el.id!==id;
    }
    )
    setTask(newTasks)
    toast.info("Muvaffaqqiyatli o'chirildi.",{
      position :"top-right",
      autoClose:2000,
    })
  }

  return (
    <>
    <ToastContainer />
      <section className="pt-5">
        <div className="container">
          <div className="card p-3 shadow-lg">
            <h4 className="text-center text-danger">TO DO APP</h4>
            <input
              type="text"
              className="form-control w-50 mx-auto p-2 mb-3"
              placeholder="ENTER TASK NAME"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="date"
              className="form-control w-50 mx-auto p-2 mb-3"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
            <button
              className="btn btn-success w-50 mx-auto p-2"
              onClick={() => addTask()}
            >
              ADD NEW TASK
            </button>
          </div>
          <table className="p-3 shadow-lg table mt-5 table-striped table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>TASK TITLE</th>
                <th>TASK DEADLINE</th>
                <th>TASK DELETE</th>
              </tr>
            </thead>
            <tbody>
              {task.length > 0 ? (
                task.map((e, i) => {
                  return (
                    <tr key={e.id}>
                      <td>{i + 1}</td>
                      <td>{e.title}</td>
                      <td>{e.deadline}</td>
                      <td>
                        <button className="btn btn-danger" onClick={()=>deleteTask(e.id)}>Delete</button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <h4 className="text-center text-danger">NOT FAUND !!!</h4>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default Intro;

//   =====> O'rganishdagi kodlar <========= //
// const [number, setNumber] = useState(0);
// const [text, setText] = useState("React.js devoloper");
// const [toggle, setToggle] = useState(true);
// const [title, setTitle] = useState("");

// const cardControl = useRef();
// const boxControl = useRef();
// const inputRef =useRef();

// const toggleMenu = () =>{
//     console.log(cardControl.current);
//     cardControl.current.classList.toggle('swipe')
// }

// const toggleBox = () =>{
//   boxControl.current.classList.toggle('d-none')
// }

// const inputSend =() =>{
//   console.log(inputRef.current.value);
// }

// return (
//   <>
//     <section>
//       <div className="row">
//         <h2 className="text-center">{number}</h2>
//         <h3 className="text-center">{text}</h3>
//         <h2 className="text-center">{title}</h2>
//         <div className="col-md-12 p-5">
//           <button
//             className="btn btn-primary w-100 mb-3"
//             onClick={() => setNumber(number + 1)}
//           >
//             +
//           </button>
//           <button
//             className="btn btn-info w-100 mb-3"
//             onClick={() => setText("VIU.JS devoloper")}
//           >
//             EDIT
//           </button>

//           <button className="btn btn-warning w-100 mb-3" onClick={()=>toggleMenu()}>TOGGLE</button>
//           <button className="btn btn-success w-100" onClick={()=>toggleBox()}>TOGGLE BOX</button>
//         </div>
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className={`card w-75 shadow mx-auto mt-5 mb-5 p-5 ${toggle ? "" : "swipe"}`} ref={cardControl}>
//             <div className="card">
//               <input type="text" className="form-control p-3 m-3 w-75 mx-auto" ref={inputRef} onChange={()=>setTitle(inputRef.current.value)}/>
//               <button className="btn btn-primary p-3 w-75 mx-auto" onClick={()=> inputRef.current.focus()}>SEND</button>
//             </div>
//             <p className="text m-3">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
//               dolorum sunt mollitia voluptates alias ipsa magni harum distinctio
//               eius nulla quo quas molestiae, suscipit obcaecati assumenda
//               eveniet? Nostrum libero voluptas cumque a ad fuga blanditiis quam,
//               dignissimos iste ratione, aspernatur delectus. Repudiandae
//               reprehenderit expedita vero.
//             </p>
//           </div>
//           <div className="box p-4 shadow w-50 mx-auto mb-5" ref={boxControl}>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus suscipit quos quis omnis? Repellat perferendis nesciunt nihil minus minima facilis facere, sit eius eligendi dolor dolorem nisi dolorum veritatis optio saepe iure atque, deleniti voluptates? At, dicta. Hic deserunt doloribus dignissimos odio illum quisquam nesciunt?
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   </>
// );
