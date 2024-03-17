import logo from "../images/logo.png";

const Navbar = ({ web3Handler, account, explorerURL }) => {
  return (
    <nav className="navbar fixed-top mx-3">
      {account ? (
        <a
          href={`${explorerURL}/address/${account}`}
          target="_blank"
          rel="noopener noreferrer"
          className="button nav-button btn-sm mx-4"
        >
          {account.slice(0, 5) + "..." + account.slice(38, 42)}
        </a>
      ) : (
        <button onClick={web3Handler} className="button nav-button btn-sm mx-4">
          Connect Wallet
        </button>
      )}
    </nav>
  );
};

export default Navbar;
