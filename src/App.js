import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar, Sidebar } from "./components";
import { AdSuggestion, Cryptocurrency, DailyTask, Home, Logout, AdStatus, SuggestedAds, BitcoinPage, Rewards, Settings, ProfileDetail, NotificationPage, Wallet, Vote, AddProject } from "./pages";
import "./App.css"

function App() {

  const [activeMenu, setActiveMenu] = useState(true)
  const handleMenu = () => {
    setActiveMenu((prevActiveMenu)=> !prevActiveMenu)

    
  }

  return (
    <div className="app">
      <BrowserRouter>
        <div className="container">
          {/* sidebar */}
          <div>
            {activeMenu ? (
              <div className="sidebar">
                <Sidebar handleMenu={handleMenu}/>
              </div>
            ) : (
              <div>
                {""}
              </div>
            )}
          </div>
          {/* nav and content */}
          <div className={`${activeMenu ? 'animated_padding_in' : 'animated_padding_out'} body`}>
            <div>
              <div className="navbar">
                  <Navbar />
              </div>

            </div>

            <div>
              <Routes>
                {/* pages */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/rewards" element={<Rewards />} />
                <Route path="/daily-tasks" element={<DailyTask />} />
                <Route path="/cryptocurrency" element={<Cryptocurrency />} />
                <Route path="cryptocurrency/bitcoin" element={<BitcoinPage />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/ad-suggestion" element={<AdSuggestion />} />
                <Route path="/suggest-ads" element={<SuggestedAds />} />
                <Route path="/ad-status" element={< AdStatus />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/Vote/add-project" element={<AddProject />} />
                <Route path="/settings/profile-detail" element={<ProfileDetail />} />
                <Route path="/notifications" element={<NotificationPage />} />
                <Route path="/vote" element={<Vote />} />
                <Route path="/logout" element={<Logout />} />
                
                
              </Routes>
            </div>
          </div>

        </div>


      </BrowserRouter>
    </div>
  );
}

export default App;
