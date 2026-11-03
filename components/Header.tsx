import { BookUser } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-center gap-3 py-6 border-b bg-white">
      <BookUser className="w-8 h-8 text-gray-800" />
      <h1 className="text-3xl font-bold text-gray-900">Phone Book App</h1>
    </header>
  );
}