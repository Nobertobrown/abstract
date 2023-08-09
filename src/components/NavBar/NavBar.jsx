import "boxicons/css/boxicons.min.css";

export default function NavBar() {
    return (
        <nav className="bg-gray-950 text-white px-24 flex items-center justify-between">
            <div className="flex h-20 items-center">
                <i className="bx bxs-balloon text-3xl"></i>
                <a title="Go to homepage" href="#">
                    <span className="text-2xl font-medium">Abstract</span>
                </a>
                <a
                    title="home"
                    className="text-2xl hover:underline font-normal
                    ml-3 pl-3 border-l-2 border-solid border-white"
                    href="#"
                >
                    Help Center
                </a>
            </div>
            <div>
                <button className="bg-gray-950 border border-white text-2xl h-9 box-content
             text-white py-1.5 px-8 rounded ml-4">
                Submit a request
            </button>
            <button className="bg-regal-blue text-2xl h-9 box-content
             text-white py-1.5 px-8 rounded ml-4 hover:bg-white hover:text-gray-950">
                Sign in
            </button>
            </div>
        </nav>
    );
}
