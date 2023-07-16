// import React from 'react';

import { Link } from "react-router-dom";

const LeftSide = () => {
    return (
        <div className="h-screen">
            <h1 className="h-10 pl-3 mt-2">Machinary and Parts</h1>
            <div className="h-20 ">
                <h3 className="bg-green-900 p-2"><span className="text-success">Your Personal Messenger</span>
                  <br /> Integrate WhatsApp to automate transaction messaging</h3>
            </div>
            <li className="flex flex-col mt-12 pl-3">
             <Link className="h-8">Home</Link>
             <Link className="h-8">Parties</Link>
             <Link className="h-8">Items</Link>
             <Link className="h-8">Sale</Link>
             <Link className="h-8">Purchase</Link>
             <Link className="h-8">Expenses</Link>
             <Link className="h-8">Cash and Bank</Link>
             <Link className="h-8">My Online Store</Link>
             <Link className="h-8">Reports</Link>
            </li>
        </div>
    );
};

export default LeftSide;