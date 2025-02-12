import Copyright from "./copyright/main";
import NavigationLinks from "./navigation-links";
import SocialMediaAccounts from "./social-media-accounts";

const Footer = () => {
  return (
    <>
      <footer className="border-dark-gray/50 border-y-2 border-dashed bg-black/20">
        <div className="mx-auto max-w-7xl overflow-hidden p-6 sm:py-10 lg:px-8">
          <NavigationLinks />
          <SocialMediaAccounts />
          <Copyright />
        </div>
      </footer>
    </>
  );
};

export default Footer;
