import React from "react";

const App = () => {
  return (
    <div class="main-app-wrapper">
      <h1 class="main-app-wrapper__title">DNDM</h1>
      <button
      // onClick={() => {
      //   electron.notificationApi.sendNotification("My custom notification");
      // }}
      >
        Player Tools
      </button>
      <button>DM Tools </button>
    </div>
  );
};

export default App;
