import "./App.css";
import { useAuth, useOnRedirectTo } from "@frontegg/react";
import { AdminPortal } from "@frontegg/react";

function App() {
  const { user, isAuthenticated, routes } = useAuth();
  const onRedirectTo = useOnRedirectTo();

  const logout = () => {
    onRedirectTo(routes.logoutUrl);
  };

  const login = () => {
    onRedirectTo(routes.loginUrl);
  };
  const signup = () => {
    onRedirectTo(routes.signUpUrl);
  };

  const handleClick = () => {
    AdminPortal.show();
  };
  return (
    <div className="App">
      {isAuthenticated ? (
        // <div>
        //   <div>
        //     <img src={user?.profilePictureUrl} alt={user?.name} />
        //   </div>
        //   <div>
        //     <span>Logged in as: {user?.name}</span>
        //   </div>
        //   <div>
        //     <button onClick={() => alert(user.accessToken)}>
        //       What is my access token?
        //     </button>
        //   </div>
        //   <div>
        //     <button onClick={() => logout()}>Click to logout</button>
        //   </div>
        //   <div>
        //     <button onClick={handleClick}>Settings</button>
        //   </div>
        // </div>
        <div className="App authenticated-container">
        <header className="header">
          <img src="logo192.png" alt="Logo" className="logo" />
          <button className="logout-button" onClick={() => logout()}>Logout</button>
        </header>
        <div className="user-info">
          <img src={user.profilePictureUrl} alt={user.ame} className="profile-picture" />
          <span className="user-name">Logged in as: {user.name}</span>
        </div>
        <div className="actions">
          <button className="action-button" onClick={() => alert(user.accessToken)}>What is my access token?</button>
          <button className="action-button" onClick={handleClick}>Settings</button>
        </div>
      </div>
      ) : (
        // <div>
        //   <button onClick={() => login()}>Click me to login</button>
        // </div>
        <div className="App login-container">
        <div className="login-box">
          <img src="logo192.png" alt="Logo" className="logo" />
          <button className="login-button" onClick={() => login()}>Click me to login</button>
          <button className="signup-button" onClick={() => signup()}>Click me to Sign Up</button>
        </div>
      </div>
      )}
    </div>
  );
}

export default App;
