const Navbar = () => {
  return (
    <div className="h-[30px] flex flex-row items-center justify-between">
      <div>
        <div className="flex flex-row items-center justify-between">
          <div className="cursor-pointer h-[30px] px-3 flex flex-col justify-center hover:bg-gray-100">
            <p className="text-s font-semibold">Mission</p>
          </div>

          <div className="cursor-pointer h-[30px] px-3 flex flex-col justify-center hover:bg-gray-100">
            <p className="text-s font-semibold">Donation</p>
          </div>

          <div className="cursor-pointer h-[30px] px-3 flex flex-col justify-center hover:bg-gray-100">
            <p className="text-s font-semibold">Repurpose</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;