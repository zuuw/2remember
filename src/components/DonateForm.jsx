export default function DonateForm() {
  return (
    <form className="w-full max-w-md p-6 rounded-2xl bg-amber-50 shadow">
      <label className="block mb-4">
        <span className="text-gray-700 font-semibold">Full Name</span>
        <input
          type="text"
          // Added text-gray-700 and placeholder:text-gray-700
          className="mt-1 w-full p-2 border rounded text-gray-700 placeholder:text-gray-700"
          placeholder="Enter your name"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700 font-semibold">Email</span>
        <input
          type="email"
          // Added text-gray-700 and placeholder:text-gray-700
          className="mt-1 w-full p-2 border rounded text-gray-700 placeholder:text-gray-700"
          placeholder="Enter your email"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700 font-semibold">Donation Amount ($CAD)</span>
        <input
          type="number"
          // Added text-gray-700 and placeholder:text-gray-700
          className="mt-1 w-full p-2 border rounded text-gray-700 placeholder:text-gray-700"
          min="1"
          placeholder="0"
          required
        />
      </label>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        Donate Now
      </button>
    </form>
  );
}