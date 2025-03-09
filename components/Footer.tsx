import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const socialLinks = [
  {
    id: 1,
    href: "https://github.com/SSC-SDE",
    Icon: AiFillGithub,
    label: "GitHub",
  },
  {
    id: 2,
    href: "www.linkedin.com/in/shankhyachatterjee",
    Icon: AiFillLinkedin,
    label: "LinkedIn",
  },
];

export const Footer = () => {
  return (
    <footer className="py-8 max-w-[1200px] mx-auto px-4">
      <div className="mt-12 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="text-gray-200">© 2024. All rights reserved.</p>

        <ul className="flex gap-5 flex-wrap">
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full
                         hover:text-gray-400 transition-colors"
            >
              <Icon size={30} />
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
};
