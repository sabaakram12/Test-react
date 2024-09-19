// import React from 'react';
// import './App.css';
// // import Add from './components/Add';
// // import Palindrom from './components/Palindrom'; 
// // import Test from './components/test';

// import { createContext, useState } from 'react';
// import Component1 from './components/Component1';


// export const MyContext = createContext();

// function App() {
//   const [value, setValue] = useState("Initial State");
//   return (
//     <>
//        <MyContext.Provider value={{ value, setValue }}>
//       <div>
//         <h1>Hello from App: {value}</h1>
//         <Component1/>
//       </div>
//     </MyContext.Provider>
// {/* <Test />
//       <Add />
      
//       <Palindrom /> */}
//     </>
//   );
// }

// export default App;












import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import IncomeManagement from './component/IncomeManagement';
import ExpenseSubmission from './component/ExpenseSubmission';
import ReportViewer from './component/ReportViewer';
import CompanyCreation from './component/CompanyCreation';
import AccountList from './component/AccountList';
import { AuthProvider, useAuth } from './context/AuthContext'; 









const App = () => {

return (



    <AuthProvider>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/income" element= {<PrivateRoute> <IncomeManagement /></PrivateRoute>} />
       <Route path="/expenses" element={<PrivateRoute><ExpenseSubmission /></PrivateRoute>} />
             <Route path="/reports" element= {<PrivateRoute><ReportViewer /></PrivateRoute>} />
          <Route path="/create-company" element={<PrivateRoute><CompanyCreation /></PrivateRoute>} />
            <Route path="/accounts" element= {<PrivateRoute> <AccountList /></PrivateRoute>} />
               <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};







const HomePage = () => {
  return <div>Welcome to the Account Management System</div>;
};





const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
};






export default App;
































