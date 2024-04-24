import Navbar from './Navbar';
import MenuButton from './MenuButton';

function Header() {
    return (
        <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
            <div className="max-w-[1500px] max-auto px-6">
                <div className="grid-col-3 flex justify-between items-center">
                    <div>
                        <p></p>
                    </div>
                    <div className="flex space-x-6">
                        <Navbar/>
                    </div>

                    <div className="flex space-x-6">
                        <MenuButton />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;