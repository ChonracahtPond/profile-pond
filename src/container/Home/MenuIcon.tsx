export default function MenuIcon() {
    return (
        <>
            {/* <head>

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            </head> */}

            <div className="responsive-wrapper header-outer  p-4 rounded-lg mb-4 max-w-full shadow-md lg:w-[100%] my-10">
                <div className=" flex flex-wrap justify-between h-full">
                    <div className="flex-1 bg-gradient-to-r from-indigo-400 to-indigo-700 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                        <i className="fas fa-hand-holding-usd text-white text-4xl"></i>
                        <p className="text-white">ผลงาน</p>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-blue-400 to-blue-700 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                        <i className="fas fa-exchange-alt text-white text-4xl"></i>
                        <p className="text-white">Status</p>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-sky-400 to-sky-700 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                        <i className="fas fa-qrcode text-white text-4xl"></i>
                        <p className="text-white">About & Contact</p>
                    </div>
                </div>
            </div>
        </>
    )
}