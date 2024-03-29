export default function MenuPages() {
    return (
        <>

            <div className=" w-full  bg-[#3F4CC0]">
                <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">

                    <div className="text-center mt-7">
                        {/* <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
                                STEPS
                            </p> */}
                        <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
                            Skill <span className="text-indigo-200">Works?</span>
                        </h3>

                    </div>

                    <div className="mt-20">
                        <ul className="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">

                            <li className=" bg-gray-100 p-5 pb-10 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="flex-shrink-0  top-0 -mt-16">
                                        <div
                                            className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                            1
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg leading-6 font-semibold text-gray-900">Headline</h4>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className=" bg-gray-100 p-5 pb-10 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="flex-shrink-0  top-0 -mt-16">
                                        <div
                                            className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                            2
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg leading-6 font-semibold text-gray-900">Headline</h4>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className=" bg-gray-100 p-5 pb-10 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="flex-shrink-0  top-0 -mt-16">
                                        <div
                                            className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                            3
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg leading-6 font-semibold text-gray-900">Headline</h4>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}