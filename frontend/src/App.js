// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Register from './layouts/auth/Register.jsx';
// import Login from './layouts/auth/Login.jsx';
// import Dashboard from './layouts/dashboard/Dashboard.jsx';
// import Employees from './layouts/employees/Employees.jsx'
// import Projects from './layouts/projects/Projects.jsx'
// import Tasks from './layouts/tasks/Tasks.jsx'
// import Timesheets from './layouts/timesheets/Timesheets.jsx'
// import Attendance from './layouts/attendance/Attendance.jsx'
// import ProtectedRoute from './components/ProtectedRoute.jsx';
// function App() {
//   return (
//     <>

//       <Router>
//         <Routes>
//           <Route path='/' element={<Login />} />
//           <Route path='/register' element={<Register />} />
//           <Route path='/admin/dashboard' element={<Dashboard />} />
//           <Route path='/admin/employees' element={<Employees />} />
//           <Route path='/admin/projects' element={<Projects />} />
//           <Route path='/admin/tasks' element={<Tasks />} />
//           <Route path='/admin/timesheets' element={<Timesheets />} />
//           <Route path='/admin/attendance' element={<Attendance />} />
//            <Route path='/admin/dashboard'element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
//         </Routes>
//       </Router>
//     </>
//   )
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './layouts/auth/Register.jsx';
import Login from './layouts/auth/Login.jsx';
import Dashboard from './layouts/dashboard/Dashboard.jsx';
import Employees from './layouts/employees/Employees.jsx';
import Projects from './layouts/projects/Projects.jsx';
import Tasks from './layouts/tasks/Tasks.jsx';
import Timesheets from './layouts/timesheets/Timesheets.jsx';
import Attendance from './layouts/attendance/Attendance.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/employees"
          element={
            <ProtectedRoute>
              <Employees />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/projects"
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/timesheets"
          element={
            <ProtectedRoute>
              <Timesheets />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/attendance"
          element={
            <ProtectedRoute>
              <Attendance />
            </ProtectedRoute>
          }
        />

        {/* Redirect any unknown route to login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
