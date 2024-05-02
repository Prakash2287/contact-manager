import { useState, useEffect, useMemo } from "react";

function useContactData() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/all-contacts`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch contacts");
        }
        const data = await response.json();
        setContacts(data.allRecords);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, []);
  const memoizedContacts = useMemo(() => contacts, [contacts]);
  return { contacts: memoizedContacts, isLoading, error };
}

export default useContactData;
