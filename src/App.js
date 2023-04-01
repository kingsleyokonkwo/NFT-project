import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import {
  AdSuggestion,
  Cryptocurrency,
  DailyTask,
  Home,
  Logout,
  AdStatus,
  SuggestedAds,
  BitcoinPage,
  Rewards,
  Settings,
  ProfileDetail,
  NotificationPage,
  Wallet,
  Vote,
  AddProject,
} from "./pages";
import classes from "./App.module.css";

function App() {
  const [activeMenu, setActiveMenu] = useState(true);
  const handleMenu = () => {
    setActiveMenu((prevActiveMenu) => !prevActiveMenu);
  };

  return (
    <div className={classes.app}>
      <BrowserRouter>
        <div className={classes.container}>
          {/* sidebar */}
          <div>
            {activeMenu ? (
              <div className={classes.sidebar}>
                <Sidebar handleMenu={handleMenu} />
              </div>
            ) : (
              <div>{""}</div>
            )}
          </div>
          {/* nav and content */}
          <div
            className={`${
              activeMenu
                ? `${classes.animated_padding_in}`
                : `${classes.animated_padding_out}`
            } ${classes.body}`}
          >
            <div>
              <div className={classes.navbar}>
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
                <Route
                  path="cryptocurrency/bitcoin"
                  element={<BitcoinPage />}
                />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/ad-suggestion" element={<AdSuggestion />} />
                <Route path="/suggest-ads" element={<SuggestedAds />} />
                <Route path="/ad-status" element={<AdStatus />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/Vote/add-project" element={<AddProject />} />
                <Route
                  path="/settings/profile-detail"
                  element={<ProfileDetail />}
                />
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
