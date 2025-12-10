// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="w-full text-black text-sm py-2 text-center fixed bottom-0">
      &copy; {new Date().getFullYear()} 2Remember. All rights reserved.
    </footer>
  );
}
