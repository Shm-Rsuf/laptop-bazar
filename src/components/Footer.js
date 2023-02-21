const Footer = () => {
  return (
    <div className="footer py-10 capitalize text-xl">
      <div className="footer-container container mx-auto flex justify-between items-center">
        <p>copyright &copy;{new Date().getFullYear()} laptop bazar.</p>
        <p>powered by shm usuf</p>
      </div>
    </div>
  );
};

export default Footer;
