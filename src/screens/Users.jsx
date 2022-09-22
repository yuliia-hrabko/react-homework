import React from "react";
import { Link } from "react-router-dom";

const Users = ({users}) => {

    return (
        <div className="container px-4 py-5 ">
           <div className="row  row-cols-md-3 g-4 p-5">
           {users?.map((user) => {
                return (
                    <div className="col col-sm-4 h-100 " key={user.id}>
                        <div className="card shadow border-success p-3" >
                            <h1 className="fs-3 fw-bold ">{user.name}</h1>
                            <ul className="ps-1 text-success" style={{listStyle: 'none'}}>
                                <li ><span className="text-muted fs-6 fst-italic">username:</span>{user.username}</li>
                                <li><span className="text-muted fs-6 fst-italic">email:</span> {user.email}</li>
                                <li><span className="text-muted fs-6 fst-italic">address:</span>
                                    <ul>
                                        <li><span className="text-muted fs-6 fst-italic">street:</span> {user.address.street}</li>
                                        <li><span className="text-muted fs-6 fst-italic">suite:</span> {user.address.suite}</li>
                                        <li><span className="text-muted fs-6 fst-italic">city:</span> {user.address.city}</li>
                                        <li><span className="text-muted fs-6 fst-italic">zipcode:</span> {user.address.zipcode}</li>
                                    </ul>
                                </li>
                                <li><span className="text-muted fs-6 fst-italic">phone:</span> {user.phone}</li>
                                <li><span className="text-muted fs-6 fst-italic">website:</span> {user.website}</li>
                                <li><span className="text-muted fs-6 fst-italic">company:</span> 
                                    <ul>
                                        <li><span className="text-muted fs-6 fst-italic">name:</span> {user.company.name}</li>
                                        <li><span className="text-muted fs-6 fst-italic">catch phrase:</span> {user.company.catchPhrase}</li>
                                        <li><span className="text-muted fs-6 fst-italic">bs:</span> {user.company.bs}</li>
                                    </ul>
                                </li>
                            </ul>
                            <Link to={`/users/${user.id}`}>
                                <button>Посмотреть посты</button>
                            </Link>
                        </div>
                    </div>
                )
            })}
           </div>
        </div>
    )
}

export default Users;