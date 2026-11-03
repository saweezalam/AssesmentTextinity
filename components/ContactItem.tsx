import { Phone, Trash2, Edit2 } from 'lucide-react';
import { Contact } from '@/types/contact';

interface ContactItemProps {
  contact: Contact;
  onDelete: (id: string) => void;
  onEdit: (contact: Contact) => void;
}

export default function ContactItem({ contact, onDelete, onEdit }: ContactItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white hover:bg-gray-50 border-b border-gray-200 last:border-b-0 transition-colors">
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-gray-900">
          {contact.firstName} {contact.lastName}
        </h3>
        <p className="flex items-center gap-2 text-sm text-gray-500">
          <Phone className="w-3.5 h-3.5" />
          {contact.phoneNumber}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onEdit(contact)}
          className="p-2 text-gray-600 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
          title="Edit"
        >
          <Edit2 className="w-4 h-4" />
        </button>
        <button
          onClick={() => onDelete(contact.id)}
          className="p-2.5 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
          title="Delete"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}