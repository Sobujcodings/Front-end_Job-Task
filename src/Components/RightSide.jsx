// import React from 'react';

const RightSide = () => {
    return (
        <div className="bg-slate-300 ">
            <form className="p-2 w-full bg-white">
                <input className="py-3 px-14 mr-36" type="search" value="Search Tracsactions" />
                <button className="btn rounded-full mr-2 text-red-500">+ Add Sale</button>
                <button className="btn rounded-full mr-2 text-blue-500">+ Add Purchase</button>
                <button className="btn rounded-full text-blue-500">+ Add More</button>
                {/* |
                <h1>whatapp </h1>
                <h1>Setting </h1> */}
            </form>

            <h1 className="bg-gray-200 text-center py-3 text-blue-500">NAME</h1>


            {/* below NAME */}
            {/* Right side */}
            <div className="flex h-screen bg-white ">
                <div>
                    <div className="w-64 mx-2 p-2 shadow-lg border bg-white mt-2">
                        <h1>Import Parties</h1>
                        <p>Use contacts from your Phone or Gmail to create parties</p>
                    </div>

                    <div className="bg-white shadow-lg border border-1 m-2">
                        <div className="flex my-5 mx-2 ">
                            <input type="search" value='search logo' id="" />
                            <button>+ Add</button>
                        </div>

                        <div className="flex justify-between px-2 h-10">
                            <h1>PARTY</h1>
                            <h1>AMOUNT</h1>
                        </div>

                        <div className="flex justify-between px-2 h-10">
                            <h1>KPS Sanhuala</h1>
                            <h1>2,360.00</h1>
                        </div>
                    </div>

                </div>


                {/* Left side */}
                <div className="w-full border-2 px-2  bg-white">

                    <div className="mt-2 border-2 p-2 shadow-lg">
                        <div className="flex justify-between mb-3">
                            <div>
                                <h1>KPS SANHAULA</h1>
                            </div>

                            <div>
                                <span>msg whatapp watch logo</span>
                            </div>
                        </div>

                        <div className="flex justify-between mb-2">
                            <h1>Phone: 828282882</h1>
                            <h1>Address: Sanhaula</h1>
                        </div>

                        <div className="flex justify-between mb-2">
                            <h1>Email: Add Email ID</h1>
                            <h1>Gstin: Add Gstin</h1>
                        </div>

                        <div className="mb-2">
                            <h1>No Credit Limit Set:<span className="ml-2">Set Credit Limit </span></h1>
                        </div>
                    </div>




                    {/* below Name last part */}
                    <div className="mt-5 bg-white shadow-lg  border-2 px-2 ">


                        <div className="flex justify-between my-5">
                            <div className="">
                                <h1>Transaction</h1>
                            </div>
                            <div>
                                <input type="search" value='search logo' id="" />
                            </div>
                        </div>

                        {/* table */}
                        <div>
                            <div className="overflow-x-auto mt-5 pb-18 ">
                                <table className="table border border-1 mb-5">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>TYPE</th>
                                            <th>NUMBER</th>
                                            <th>DATE</th>
                                            <th>TOTAL</th>
                                            <th>BALANCE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>1</th>
                                            <td>Sale</td>
                                            <td>1</td>
                                            <td>4/7/23</td>
                                            <td>$26,000</td>
                                            <td>$26,000</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr className="hover">
                                            <th>1</th>
                                            <td>Sale</td>
                                            <td>1</td>
                                            <td>4/7/23</td>
                                            <td>$26,000</td>
                                            <td>$26,000</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <th>1</th>
                                            <td>Sale</td>
                                            <td>1</td>
                                            <td>4/7/23</td>
                                            <td>$26,000</td>
                                            <td>$26,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                </div>





            </div>

        </div>
    );
};

export default RightSide;