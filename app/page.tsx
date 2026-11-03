'use client';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import ContactItem from '@/components/ContactItem';
import ContactModal from '@/components/ContactModal';
import { usePhoneBook } from '@/hooks/usePhoneBook';

export default function Home() {
  const {
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
  } = usePhoneBook();

  return (
    <div className="min-h-screen bg-gray-100 pb-12">
      <Header />

      <main className="max-w-2xl mx-auto px-4 mt-8 space-y-6">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onOpenModal={openAddModal}
        />

        <div className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onDelete={handleDeleteContact}
                onEdit={openEditModal}
              />
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              No contacts found matching your search.
            </div>
          )}
        </div>
      </main>

      <ContactModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSaveContact}
        initialData={editingContact}
      />
    </div>
  );
}