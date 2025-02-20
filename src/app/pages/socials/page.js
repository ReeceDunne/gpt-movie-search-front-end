export default function Socials() {
  const GITHUB_USER = process.env.NEXT_PUBLIC_GITHUB_USER;
  const LINKEDIN_USER = process.env.NEXT_PUBLIC_LINKEDIN_USER;

  return (
    <div className="flex justify-center items-center space-x-6 pb-6">
      <a
        href={`https://github.com/${GITHUB_USER}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="github-mark-white.png"
          alt="GitHub"
          className="w-8 h-auto transition-transform transform hover:scale-110"
        />
      </a>

      <a
        href={`https://www.linkedin.com/in/${LINKEDIN_USER}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="linkedin.png"
          alt="LinkedIn"
          className="w-8 h-auto transition-transform transform hover:scale-110"
        />
      </a>
    </div>
  );
}
