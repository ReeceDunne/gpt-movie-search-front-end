export default function userProfile({ user }) {
  return (
    <div className="absolute top-4 right-4 bg-gray-800 p-3 rounded-lg shadow-lg flex flex-col items-center w-44">
      {/* Profile Image */}
      <img
        src={user.picture}
        alt="User Profile"
        className="w-12 h-12 rounded-full border-2 border-blue-500 shadow-sm"
      />

      {/* User Info */}
      <div className="mt-2 text-center">
        <h2 className="text-white font-semibold text-sm">{user.name}</h2>
        <p className="text-gray-400 text-xs truncate w-36">{user.email}</p>
      </div>

      {/* Logout Button */}
      <a
        href="/api/auth/logout?federated=true"
        className="mt-3 w-full text-center px-4 py-2 bg-blue-500 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-blue-700 transition-colors"
      >
        Logout
      </a>

      {/* <a
        onClick={() => (window.location.href = "/api/auth/logout?federated")}
        className="mt-3 w-full text-center px-4 py-2 bg-blue-500 text-white font-medium text-sm rounded-lg shadow-md hover:bg-blue-700 transition-colors cursor-pointer"
      >
        Logout
      </a> */}
    </div>
  );
}
