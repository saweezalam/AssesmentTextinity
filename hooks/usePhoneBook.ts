import { useState } from 'react';
import { Contact } from '@/types/contact';
import { ContactFormData } from '@/validations/contactSchema';
import { initialContacts } from '../constants/initialContacts';

export function usePhoneBook() {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  const filteredContacts = contacts.filter((contact) => {
    const query = searchTerm.toLowerCase().trim();
    const firstName = (contact.firstName || '').toLowerCase();
    const lastName = (contact.lastName || '').toLowerCase();
    const phoneNumber = (contact.phoneNumber || '').toLowerCase();

    return (
      lastName.includes(query) ||
      firstName.includes(query) ||
      phoneNumber.includes(query)
    );
  });

  const handleSaveContact = (data: ContactFormData) => {
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
  };

  const handleDeleteContact = (id: string) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const openAddModal = () => {
    setEditingContact(null);
    setIsModalOpen(true);
  };

  const openEditModal = (contact: Contact) => {
    setEditingContact(contact);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingContact(null);
  };

  return {
    contacts,
    searchTerm,
    setSearchTerm,
    isModalOpen,
    editingContact,
    filteredContacts,
    handleSaveContact,
    handleDeleteContact,
    openAddModal,
    openEditModal,
    closeModal,
  };
}