import { RiSendPlane2Fill } from "react-icons/ri"
export default function Main() {
    return (
        <div className="w-screen h-screen overflow-hidden gap-4 flex p-2 md:p-4">
            <div className="h-full w-full">
                <section className="flex h-full w-full flex-col justify-center items-center">
                    <div className="h-full w-full">
                        <div className="h-full rounded bg-[#686882]/70 shadow-lg backdrop-blur flex flex-col overflow-hidden">
                            <div className="w-full p-3 px-4 relative flex justify-between bg-slate-900">
                                <div className="flex items-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#EC6A5F]"></div>
                                    <div className="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#F4BF50]"></div>
                                    <div className="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#61C454]"></div>
                                    <svg width="24" height="24" fill="none" className="ml-4 flex-none text-slate-400 dark:text-slate-500"><path d="m15 7-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    <svg width="24" height="24" fill="none" className="ml-2 flex-none text-slate-400 dark:text-slate-500"><path d="m10 7 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </div>
                                <div>
                                    <svg width="24" height="24" fill="none" className="text-slate-400 dark:text-slate-500">
                                        <path d="M12.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>

                                <div className="absolute left-1/2 top-2 -translate-x-1/2">
                                    <div><div className="bg-slate-100 rounded-md font-medium text-xs leading-6 py-1 flex items-center justify-center ring-1 ring-inset ring-slate-900/5 mx-auto px-10 dark:bg-slate-800 dark:text-slate-500"><svg viewBox="0 0 20 20" fill="currentColor" className="text-slate-300 w-3.5 h-3.5 mr-1.5 dark:text-slate-500"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>NRAM.ai</div></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="h-full w-full rounded bg-gray-800 shadow"></div>
                </section>
            </div>
            <div className="md:flex hidden w-full h-full md:flex-col overflow-hidden rounded relative bg-[#686882]/70 shadow-lg backdrop-blur">
                <div className="w-full p-3 bg-gray-900 backdrop-blur absolute top-0 left-0 text-slate-100 font-semibold text-center">Chatbot</div>

                <div className="w-full p-2 bg-gray-800 backdrop-blur absolute bottom-0 left-0">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
                            </svg>
                        </div>
                        <input type="text" id="voice-search" className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Send a Message" required />
                        <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <RiSendPlane2Fill className="text-gray-400" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
