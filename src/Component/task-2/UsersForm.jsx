import React, { useState } from "react";
import ModalApp from "./ModalApp";

export default function UsersForm() {
    const [modal, setModal] = useState(false)
    const [editId, setEditId] = useState("")

    const [users, setUsers] = useState([
        {
            id: 1,
            firstname: "Task1",
            type: "open"
        },
        {
            id: 2,
            firstname: "Task2",
            type: "pending"
        },
        {
            id: 3,
            firstname: "Task3",
            type: "inproge"
        },
        {
            id: 4,
            firstname: "Task4",
            type: "progress",
        },
    ]);


    const removeUser = (id) => {
        const newUsers = [...users.filter(item => item.id !== id)]
        setUsers(newUsers)
    }

    return (
        <div className="container my-5">
            <ModalApp modal={modal} toggle={() => setModal(false)} users={users} setUsers={setUsers} />
            <ModalApp modal={editId} toggle={setEditId} users={users} setUsers={setUsers} editId={editId} />
            <div className="row">
                <div className=" card col-2 offset-1 mt-5">
                    <thead className="card-header">
                        <tr>
                            <th>Open</th>
                        </tr>
                    </thead>
                    <tbody className="d-flex my-4 flex-column">
                        {users.filter(item => item.type === "open").map((item, index) => {
                            return (
                                <tr key={index} className="d-flex gap-2">
                                    <td>{item.firstname}</td>
                                    <td className="d-flex">
                                        <button className="btn btn-info mx-2 " onClick={() => setEditId(item.id)}>
                                            edit
                                        </button>
                                        <button className="btn btn-danger" onClick={() => removeUser(item.id)}>
                                            delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <div className="card-footer">
                        <button onClick={() => setModal(p => !p)} className="btn btn-primary">Add users</button>
                    </div>
                </div>

                <div className="card col-2 offset-1 mt-5">
                    <thead className="card-header">
                        <tr>
                            <th>Open</th>
                        </tr>
                    </thead>
                    <tbody className="d-flex my-4 flex-column">
                        {users.filter(item => item.type === "pending").map((item, index) => {
                            return (
                                <tr key={index} className="d-flex gap-2">
                                    <td>{item.firstname}</td>
                                    <td className="d-flex">
                                        <button className="btn btn-info mx-2 " onClick={() => setEditId(item.id)}>
                                            edit
                                        </button>
                                        <button className="btn btn-danger" onClick={() => removeUser(item.id)}>
                                            delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <div className="card-footer">
                        <button onClick={() => setModal(p => !p)} className="btn btn-primary">Add users</button>
                    </div>
                </div>
                <div className="card col-2 offset-1 mt-5">
                    <thead className="card-header">
                        <tr>
                            <th>Inproge</th>
                        </tr>
                    </thead>
                    <tbody className="d-flex my-4 flex-column">
                        {users.filter(item => item.type === "inproge").map((item, index) => {
                            return (
                                <tr key={index} className="d-flex gap-2">
                                    <td>{item.firstname}</td>
                                    <td className="d-flex">
                                        <button className="btn btn-info mx-2 " onClick={() => setEditId(item.id)}>
                                            edit
                                        </button>
                                        <button className="btn btn-danger" onClick={() => removeUser(item.id)}>
                                            delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <div className="card-footer">
                        <button onClick={() => setModal(p => !p)} className="btn btn-primary">Add users</button>
                    </div>
                </div>
                <div className="card col-2 offset-1 mt-5">
                    <thead className="card-header">
                        <tr>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody className="d-flex my-4 flex-column">
                        {users.filter(item => item.type === "progress").map((item, index) => {
                            return (
                                <tr key={index} className="d-flex gap-2">
                                    <td>{item.firstname}</td>
                                    <td className="d-flex">
                                        <button className="btn btn-info mx-2 " onClick={() => setEditId(item.id)}>
                                            edit
                                        </button>
                                        <button className="btn btn-danger" onClick={() => removeUser(item.id)}>
                                            delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <div className="card-footer">
                        <button onClick={() => setModal(p => !p)} className="btn btn-primary">Add users</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
