import { useState } from 'react';
import { Contact } from '@/types/contact';
import { ContactFormData } from '@/validations/contactSchema';
import { initialContacts } from '@/constants/initialContacts';

const normalizePhoneNumber = (phone: string) => phone.replace(/[^\d]/g, '');

export function usePhoneBook() {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [duplicateError, setDuplicateError] = useState<string | null>(null);

  const filteredContacts = contacts.filter((contact) => {
    const query = searchTerm.toLowerCase().trim();
    if (!query) return true;

    const lastName = (contact.lastName || '').toLowerCase();
    const firstName = (contact.firstName || '').toLowerCase();
    const phoneNumber = (contact.phoneNumber || '').toLowerCase();

    return (
      lastName.includes(query) ||
      firstName.includes(query) ||
      phoneNumber.includes(query)
    );
  });

  const handleSaveContact = (data: ContactFormData): boolean => {
    const normalizedNewPhone = normalizePhoneNumber(data.phoneNumber);

    const phoneExists = contacts.some((contact) => {
      if (editingContact && contact.id === editingContact.id) {
        return false;
      }
      return normalizePhoneNumber(contact.phoneNumber) === normalizedNewPhone;
    });

    if (phoneExists) {
      setDuplicateError('This phone number already exists in your phone book.');
      return false;
    }

    setDuplicateError(null);

    if (editingContact) {
      setContacts((prev) =>
        prev.map((item) => (item.id === editingContact.id ? { ...item, ...data } : item))
      );
    } else {
      const newContact: Contact = {
        id: Date.now().toString(),
        ...data,
      };
      setContacts((prev) => [newContact, ...prev]);
    }
    
    closeModal();
    return true;
  };

  const handleDeleteContact = (id: string) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const openAddModal = () => {
    setEditingContact(null);
    setDuplicateError(null);
    setIsModalOpen(true);
  };

  const openEditModal = (contact: Contact) => {
    setEditingContact(contact);
    setDuplicateError(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingContact(null);
    setDuplicateError(null);
  };

  return {
    contacts,
    searchTerm,
    setSearchTerm,
    isModalOpen,
    editingContact,
    duplicateError,
    filteredContacts,
    handleSaveContact,
    handleDeleteContact,
    openAddModal,
    openEditModal,
    closeModal,
  };
}