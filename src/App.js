import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageOne from "./adminPages/HomePageOne";
import ErrorPage from "./adminPages/ErrorPage";
import SignInPage from "./adminPages/SignInPage";
import SignUpPage from "./adminPages/SignUpPage";
import AccessDeniedPage from "./adminPages/AccessDeniedPage";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import ManageDocuments from "./adminPages/ManageDocuments";
import ManageEmployees from "./adminPages/ManageEmployees";
import AddClientPage from "./adminPages/AddClientPage";
import AddPackagePage from "./adminPages/AddPackagePage";
import EditPackagePage from "./adminPages/EditPackagePage";
import EditClientPage from "./adminPages/EditClientPage";
import ManageFacilities from "./adminPages/ManageFacilities";
import CreateInvoicePage from "./adminPages/CreateInvoicePage";
import ManageAttendance from "./adminPages/ManageAttendance";
import ChatPage from "./adminPages/ChatPage";
import ClientPackagesPage from "./clientPages/ClientPackagesPage";
import ProtectedRoute from "./components/ProtectedRoute";
import MyPackagesPage from "./clientPages/MyPackagesPage";
import PaymentHistoryPage from "./clientPages/PaymentHistoryPage";
import EditProfilePage from "./clientPages/EditProfilePage";

function App() {


  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>

        {/* Public Routes */}
        <Route path='/' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/access-denied' element={<AccessDeniedPage />} />

        {/* Admin Protected Routes */}
        <Route path='/dashboard' element={<ProtectedRoute element={HomePageOne} allowedRole="admin" />} />
        <Route path='/employees' element={<ProtectedRoute element={ManageEmployees} allowedRole="admin" />} />
        <Route path='/documents' element={<ProtectedRoute element={ManageDocuments} allowedRole="admin" />} />
        <Route path='/add-client' element={<ProtectedRoute element={AddClientPage} allowedRole="admin" />} />
        <Route path='/add-package' element={<ProtectedRoute element={AddPackagePage} allowedRole="admin" />} />
        <Route path='/edit-package' element={<ProtectedRoute element={EditPackagePage} allowedRole="admin" />} />
        <Route path='/edit-client' element={<ProtectedRoute element={EditClientPage} allowedRole="admin" />} />
        <Route path='/facilities' element={<ProtectedRoute element={ManageFacilities} allowedRole="admin" />} />
        <Route path='/create-invoice' element={<ProtectedRoute element={CreateInvoicePage} allowedRole="admin" />} />
        <Route path='/attendance' element={<ProtectedRoute element={ManageAttendance} allowedRole="admin" />} />
        <Route path='/settings' element={<ProtectedRoute element={EditProfilePage} allowedRole="admin" />} />
        <Route path='/chat' element={<ProtectedRoute element={ChatPage} allowedRole="admin" />} />

        {/* Client Protected Routes */}
        <Route path='/all-packages' element={<ProtectedRoute element={ClientPackagesPage} allowedRole="team" />} />
        <Route path='/my-packages' element={<ProtectedRoute element={MyPackagesPage} allowedRole="team" />} />
        <Route path='/payment-history' element={<ProtectedRoute element={PaymentHistoryPage} allowedRole="team" />} />
        <Route path='/edit-profile' element={<ProtectedRoute element={EditProfilePage} allowedRole="team" />} />

        {/* Fallback */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
