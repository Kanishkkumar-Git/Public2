export default function Navbar({ watchLaterCount }) {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <a href="/" className="text-xl font-bold text-red-600">
        YouTube
      </a>

      <input
        type="text"
        placeholder="Search"
        className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      <a href="/watch-later" className="relative text-sm font-medium text-gray-700 hover:text-red-600">
        Watch Later
        <span className="ml-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
          {watchLaterCount}
        </span>
      </a>
    </nav>
  );
}
