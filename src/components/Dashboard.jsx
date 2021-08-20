import { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";

const Dashboard = () => {
  const [error, setError] = useState(false);
  function handleLogout() {}
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
};
export default Dashboard;
