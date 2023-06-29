import logo from './logo.svg';
import './App.css';
import SideBar from './components/sidebar';
import MockTestPage from './pages/MockTestPage';
import CoursePage from "./pages/CoursePage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogsPage from './pages/BlogsPage';
import Subjects from './components/subjects/Subjects';
import UserPage from './pages/UserPage';
function App() {
  return (
    <Router>
      <div className='relative flex w-full justify-between bg-slate-200 h-screen overflow-y-scroll'>
        <SideBar />
        <div className='w-[70%] ml-[30rem]'>
          <Routes>
            <Route exact path='/mocktest' element={<MockTestPage />} />
            <Route exact path='/mocktest/:id' element={<MockTestPage />} />
            <Route exact path='/mocktest/:id/:subject_id' element={<MockTestPage />} />
            <Route exact path='/course' element={<CoursePage />} />
            <Route exact path='/blogs' element={<BlogsPage />} />
            <Route exact path='/subject' element={<Subjects />} />
            <Route exact path='/users' element={<UserPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
