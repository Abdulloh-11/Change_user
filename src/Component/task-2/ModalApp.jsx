import React, { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'


export default function ModalApp({ modal, toggle, users, setUsers }) {

    const [firstname, setFirstname] = useState("")
   


    const addUser = (e)  => {
        e.preventDefault();
        let paylod = {
            firstname,   
        }
        setUsers([...users, {...paylod}])
        toggle()
    }

    const changeFisrt = (e) => {
        setFirstname(e.target.value)

    }
 



    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader>
                <h1>Add new User</h1>
            </ModalHeader>
            <ModalBody>
                <div>
                    <form onSubmit={addUser} id="form">
                        <input type="text" placeholder='FirstName' onChange={changeFisrt} className='form-control my-3' required />
                        <select className='btn btn-info' name="" id="">
                            <option value="" hidden>Select Name</option>
                            <option value="">Open</option>
                            <option value="">Pending</option>
                            <option value="">Inproge</option>
                            <option value="">Progress</option>
                        </select>
                       
                        
                    </form>
                </div>
            </ModalBody>
            <ModalFooter>
                <button type='submit' form='form' className='btn btn-prima ry'>Add User</button>
            </ModalFooter>
        </Modal>
    )
}
