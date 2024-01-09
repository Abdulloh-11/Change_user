import React, { useState } from "react";
import ModalApp from "./ModalApp";
export default function UsersForm() {
    const [modal, setModal] = useState(false)
    const [modal1, setModal1] = useState(false)
    const [modal2, setModal2] = useState(false)
    const [modal3, setModal3] = useState(false)
    // const [userList, setUserList] = useState(false)
    // const [editedUser, seteditedUser] = useState(false)
   

    const [users, setUsers] = useState([
        {
            id: 1,
            firstname: "task1"
        },
     
      
    ]);
    const [users1, setUsers1] = useState([
        {
            id: 2,
            firstname: "task1"
        },
     
      
    ]);
    const [users2, setUsers2] = useState([
        {
            id: 3,
            firstname: "task1"
        },
     
      
    ]);
    const [users3, setUsers3] = useState([
        {
            id: 4,
            firstname: "task1"
        },
     
      
    ]);


    const editUser = (index) => {
        // const editedUser = users[index]; 
        setModal(true)
       
    }
    const editUser1 = (index) => {
        // const editedUser = users[index]; 
        setModal1(true)
       
    }
    const editUser2 = (index) => {
        // const editedUser = users[index]; 
        setModal2(true)
       
    }
    const editUser3 = (index) => {
        // const editedUser = users[index]; 
        setModal3(true) 
       
    }

   


    const removeUser = (index) => {
        users.splice(index, 1)
        setUsers([...users])
    }
    const removeUser1 = (index) => {
        users1.splice(index, 1)
        setUsers1([...users1])
    }
    const removeUser2 = (index) => {
        users2.splice(index, 1)
        setUsers2([...users2])
    }
    const removeUser3 = (index) => {
        users3.splice(index, 1)
        setUsers3([...users3])  
    }
    return (
        <div className="container my-5">
            <ModalApp modal={modal} toggle={() => setModal(false)} users={users} setUsers={setUsers} />
            <ModalApp modal={modal1} toggle={() => setModal1(false)} users={users1} setUsers={setUsers1} />
            <ModalApp modal={modal2} toggle={() => setModal2(false)} users={users2} setUsers={setUsers2} />
            <ModalApp modal={modal3} toggle={() => setModal3(false)} users={users3} setUsers={setUsers3} />
            <div className="row">
                <div className=" card col-2 offset-1 mt-5">
                 
                   
                        <div className="card-header">
                            <tr>
                                <th>Open</th>                            
                            </tr>
                        </div>

                        <div className="my-4">
                            {users.map((item, index) => {
                                return (
                                    <tr key={index}>    
                                        
                                        <td>{item.firstname}</td>
                                        
                                    
                                        <td className="d-flex">
                                        <button className="btn btn-info mx-2 " onClick={() => editUser(index, users, setUsers)}>
                                                edit
                                            </button>
                                            <button className="btn btn-danger" onClick={() => removeUser(index)}>
                                                delete
                                            </button>
                                        </td>
                                       
                                    </tr>
                                );

                            })}
                        </div>
                        <div className="card-footer">
                        <button onClick={setModal} className="btn btn-primary">Add users</button>        
                        </div>                                               
                </div>


                <div className="card col-2 offset-1 mt-5">
                 
                   
                        <div className="card-header">
                            <tr>
                                <th>Open</th>                            
                            </tr>
                        </div>
                        <div className="my-4">
                            {users1.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        
                                        <td>{item.firstname}</td>
                                        
                                    
                                        <td>
                                        <button className="btn btn-info mx-2" onClick={() => editUser1(index, users1, setUsers1)}>
                                                edit
                                            </button>
                                            <button className="btn btn-danger" onClick={() => removeUser1(index)}>
                                                delete
                                            </button>
                                        </td>
                                       
                                    </tr>
                                );

                            })}
                        </div>
                        <div className="card-footer">
                        <button onClick={setModal1} className="btn btn-primary">Add users</button>        
                        </div>                                               
                </div>

                

                <div className="card col-2 offset-1 mt-5">
                 
                   
                        <div className="card-header">
                            <tr>
                                <th>Inproge</th>                            
                            </tr>
                        </div>
                        <div className="my-4">
                            {users2.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        
                                        <td>{item.firstname}</td>
                                        
                                    
                                        <td className="d-flex">
                                        <button className="btn btn-info mx-2" onClick={() => editUser2(index, users, setUsers2)}>
                                                edit
                                            </button>
                                            <button className="btn btn-danger" onClick={() => removeUser2(index)}>
                                                delete
                                            </button>
                                        </td>
                                       
                                    </tr>
                                );
                            })}
                        </div>
                        <div className="card-footer">

                        <button onClick={setModal2} className="btn btn-primary">Add users</button>                                                       
                        </div>
                </div>
                <div className="card col-2 offset-1 mt-5">
                 
                   
                        <div className="card-header">
                            <tr>
                                <th>Progress</th>                            
                            </tr>
                        </div>
                        <div className="my-4">
                            {users3.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        
                                        <td>{item.firstname}</td>
                                        
                                    
                                        <td className="d-flex">
                                        <button className="btn btn-info mx-2" onClick={() => editUser3(index, users, setUsers3)}>
                                                edit
                                            </button>
                                            <button className="btn btn-danger" onClick={() => removeUser3(index)}>
                                                delete
                                            </button>
                                        </td> 
                                       
                                    </tr>
                                );
                            })}
                        </div>
                        <div className="card-footer">

                        <button onClick={setModal3} className="btn btn-primary">Add users</button>                                                       
                        </div>
                </div>
            </div>
        </div>
    );
}
