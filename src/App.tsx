// frontend/src/App.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [allowed, setAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    const checkPermission = async () => {
      try {
        const response = await axios.get('http://localhost:8000/check-permission/', {
          params: { user: 'alice', resource: 'data1', action: 'read' },
        });
        setAllowed(response.data.allowed);
      } catch (error) {
        console.error("Error checking permission", error);
      }
    };

    checkPermission();
  }, []);

  return (
    <div>
      <h1>Casbin (DRF + React)</h1>
      {allowed === null ? (
        <p>ກຳລັງຕວດສອບ...</p>
      ) : allowed ? (
        <p>ເຂົ້າໄດ້!</p>
      ) : (
        <p>ເຂົ້າບໍໄດ້!</p>
      )}
    </div>
  );
};

export default App;