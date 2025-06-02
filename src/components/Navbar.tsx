export function Navbar() {
  return (
    <nav className="p-4 shadow-md bg-blue-500 sticky top-0 z-10 text-white sticky">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Fictitious Co</div>
        <ul className="flex gap-4 text-sm font-semibold">
          <li><a href="#carousel">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}