export function Footer() {
  return (
    <footer className="bg-black text-white py-8 text-center">
      <div className="mb-4">
        <p>© {new Date().getFullYear()} Design Solutions. All rights reserved.</p>
      </div>
      <div className="flex justify-center gap-6 text-sm">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </footer>
  );
}