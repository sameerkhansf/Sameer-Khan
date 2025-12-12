import Image from "next/image";

const profileData = {
  name: "Sameer Khan",
  pronouns: "he/him",
  bio: "New grad Software Engineer with a B.S. in Computer Science from Sonoma State University. Expertise in full-stack development, AI/ML, and modern web technologies.",
  imageUrl: "/profile.jpg",
  contact: {
    email: "khansam@sonoma.edu",
    website: "sameerkhan.me",
  },
  skills: [
    "C++",
    "Python",
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "AWS",
    "Docker",
    "MongoDB",
    "Git",
  ],
  languages: [
    { name: "English", flag: "US" },
    { name: "Urdu", flag: "PK" },
    { name: "Hindi", flag: "IN" },
  ],
};

const MobileHeader = () => {
  return (
    <div className="md:hidden px-4">
      <div className="p-6 space-y-6">
        {/* Profile */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-18 h-18 rounded-full overflow-hidden">
            <Image
              src={profileData.imageUrl}
              alt="Sameer Khan - Software Engineer"
              width={72}
              height={72}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                {profileData.name}
              </h1>
              <div className="w-6 h-6 bg-[rgb(46,144,250)] rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 20 21"
                  className="w-3 h-3 text-white fill-current"
                >
                  <path d="M 5.454 11.969 L 7.618 14.161 C 7.981 14.517 8.554 14.517 8.927 14.161 L 14.309 8.737 C 14.663 8.381 14.663 7.806 14.309 7.45 L 14.245 7.386 C 13.89 7.03 13.309 7.03 12.954 7.386 L 8.272 12.097 L 6.809 10.618 C 6.454 10.262 5.872 10.262 5.518 10.618 L 5.454 10.682 C 5.1 11.038 5.1 11.613 5.454 11.969 Z" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {profileData.pronouns}
            </p>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-2 text-[15px] text-gray-800 dark:text-gray-100">
            ABOUT
          </h3>
          <p className="leading-relaxed text-[15px] text-gray-800 dark:text-gray-200">
            {profileData.bio}
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2 text-[15px] text-gray-800 dark:text-gray-100">
            CONTACT
          </h3>
          <div className="space-y-2 text-sm">
            <a
              href={`mailto:${profileData.contact.email}`}
              className="flex items-center gap-3 transition-colors text-[15px] text-gray-800 dark:text-gray-200"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-gray-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 5L2 7" />
              </svg>
              {profileData.contact.email}
            </a>
            <a
              href={`https://${profileData.contact.website}`}
              className="flex items-center gap-3 transition-colors text-[15px] text-gray-800 dark:text-gray-200"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-gray-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              {profileData.contact.website}
            </a>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="font-semibold mb-2 text-[15px] text-gray-800 dark:text-gray-100">
            SKILLS
          </h3>
          <div className="flex flex-wrap gap-2">
            {profileData.skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="font-semibold mb-2 text-[15px] text-gray-800 dark:text-gray-100">
            LANGUAGES
          </h3>
          <div className="flex flex-wrap gap-2">
            {profileData.languages.map((language) => (
              <span
                key={language.name}
                className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-resumx-purple hover:text-white hover:border-resumx-purple transition-all duration-200"
              >
                <span className="text-base">
                  {language.flag === "US" && "🇺🇸"}
                  {language.flag === "PK" && "🇵🇰"}
                  {language.flag === "IN" && "🇮🇳"}
                </span>
                {language.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
