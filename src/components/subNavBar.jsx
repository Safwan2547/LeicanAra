const SubNavBar = () => {
    // Add your social media links here

    const socialMediaLinks = [
        { name: 'Instagram', url: '#' },
        { name: 'Behance', url: '#' },
        // Add more social media links as needed
    ];






    return (
        <div className="menu-item subnav-bar flex absolute bottom-14 justify-center gap-8">
            {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.url} className="subnav-link text-MainBeige buttonC font-satoshi-light hover:scale-110 duration-500 cursor-pointer hover:animate-pulse  text-lg transition-all">{link.name}</a>
            ))}
        </div>
    );
};
