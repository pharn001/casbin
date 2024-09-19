import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

function AlertDestructive() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3000); // ເວລາ 3ວິ
  };

  return (
    <div>
      <button onClick={handleClick}>ສະແດງ</button>
      {isVisible && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle> ເຂົ້າສູ້ລະບົບ</AlertTitle>
          <AlertDescription>
        ເຂົ້າສູ້ລະບົບແນ່
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}

export default AlertDestructive;
