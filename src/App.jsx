import MainNavBar from "./main/MainNavBar";
import AdminNavBar from "./admin/AdminNavBar";
import CustomerNavBar from "./customer/CustomerNavBar";
import ManagerNavBar from "./manager/ManagerNavBar";
import { AuthProvider, useAuth } from "./contextapi/AuthContext";

function AppContent() {
  const { isAdminLoggedIn, isCustomerLoggedIn, isManagerLoggedIn } = useAuth();

  return (
    <div>
      {isAdminLoggedIn ? (
        <AdminNavBar />
      ) : isCustomerLoggedIn ? (
        <CustomerNavBar />
      ) : isManagerLoggedIn ? (
        <ManagerNavBar />
      ) : (
        <MainNavBar />
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
