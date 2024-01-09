import React, {useEffect, useState} from 'react'
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'


export default function ModalApp({modal, toggle, users, setUsers, editId}) {
    const [firstname, setFirstname] = useState("")
    const [type, setType] = useState("open")

    useEffect(() => {
        if (!!editId) {
            const user = users.find(item => item.id === editId)
            if (user) {
                setFirstname(user.firstname)
                setType(user.type)
            }
        }
    }, [editId]);

    const addUser = (e) => {
        e.preventDefault();
        if (!!editId) {
            if (!!users.find(item => item.id === editId)) {
                users.find(item => item.id === editId).firstname = firstname
                users.find(item => item.id === editId).type = type
                const newUsers = [...users]
                setUsers(newUsers)
                toggle("")
                setFirstname("")
                setType("")
            }
        } else {
            let paylod = {
                id: users.length + 1,
                firstname: firstname,
                type: type
            }
            setUsers([...users, {...paylod}])
            toggle()
            setFirstname("")
            setType("")
        }
    }


    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader>
                <h1>Add new User</h1>
            </ModalHeader>
            <ModalBody>
                <div>
                    <form onSubmit={addUser} id="form">
                        <input
                            type="text"
                            placeholder='Firstname'
                            onChange={e => setFirstname(e.target.value)}
                            className='form-control my-3'
                            value={firstname}
                            required
                        />
                        <select className='btn btn-info' value={type} onChange={e => setType(e.target.value)}>
                            <option value="open">Open</option>
                            <option value="pending">Pending</option>
                            <option value="inproge">Inproge</option>
                            <option value="progress">Progress</option>
                        </select>
                    </form>
                </div>
            </ModalBody>
            <ModalFooter>
                <button type='submit' form='form'
                        className='btn btn-prima ry'>{!!editId ? "Edit User" : "Add User"}</button>
            </ModalFooter>
        </Modal>
    )
}
