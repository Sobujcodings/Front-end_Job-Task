// import React from 'react';

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Home = () => {
    return (
        <div className="w-screen h-screen">
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="  bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                    </div>


                    {/* Page content here */}
                    <div className="flex w-full bg-slate-100">
                        <div className="w-64 bg-gray-700 text-white hidden lg:block">
                            <LeftSide></LeftSide>
                        </div>

                        <div className="w-full ">
                            <RightSide></RightSide>
                        </div>

                    </div>

                </div>


                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Home;