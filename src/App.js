import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackState from "./components/FeedbackState";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import Post from "./components/Post";
import {FeedbackProvider} from "./context/FeedbackContext"

function App() {
  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={
            <div>
              <FeedbackForm />
              <FeedbackState />
              <FeedbackList />

            </div>
          }>

          </Route>

          <Route path='/about' element={<AboutPage />} />
          <Route path="/post/*" element={<Post />} />
        </Routes>
      </div>
    </Router>
    </FeedbackProvider>


  );
}

export default App;
