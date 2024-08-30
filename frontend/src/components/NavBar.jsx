
import { assets } from '../assets/assets';
import { useAuth } from '../context/authContext/index';
import { doSignInWithGoogle, doSignOut } from '../firebase/auth';

const NavBar = () => {
  const { userLoggedIn, currentUser } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      await doSignInWithGoogle();
    } catch (error) {
      console.error('Google login failed:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await doSignOut();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav>
      <div className="logo">
        <img src={assets.logo} alt="Logo" />
        <h1>MyNeta</h1>
      </div>

      <div>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <div>
        {userLoggedIn ? (
          <div>
            <p>Welcome, {currentUser.displayName || currentUser.email}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button onClick={handleGoogleLogin}>Sign in </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;