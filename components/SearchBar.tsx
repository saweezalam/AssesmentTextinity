'use client';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onOpenModal: () => void;
}

export default function SearchBar({ searchTerm, onSearchChange, onOpenModal }: SearchBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="relative w-full sm:w-96">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
          <Search className="w-4 h-4" />
        </span>
        <input
          type="text"
          placeholder="Search by last name or phone..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white placeholder-gray-400"
        />
      </div>
      <button
        onClick={onOpenModal}
        className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium whitespace-nowrap"
      >
        + Add Contact
      </button>
    </div>
  );
}