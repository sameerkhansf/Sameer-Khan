import Image from "next/image";
import { profileData } from "@/lib/data";
import { BsPatchCheckFill, LuMail, LuGlobe } from "@/components/icons";

const MobileHeader = () => {
  return (
    <div className="md:hidden px-4">
      <div className="p-6 space-y-6">
        {/* Profile */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-18 h-18 rounded-full overflow-hidden">
            <Image
              src={profileData.imageUrl}
              alt={`${profileData.name} - Software Engineer`}
              width={72}
              height={72}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                {profileData.name}
              </h2>
              <BsPatchCheckFill
                className="w-6 h-6 text-blue-500"
                aria-label="Verified"
              />
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
              <LuMail className="w-4 h-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
              {profileData.contact.email}
            </a>
            <a
              href={`https://${profileData.contact.website}`}
              className="flex items-center gap-3 transition-colors text-[15px] text-gray-800 dark:text-gray-200"
            >
              <LuGlobe className="w-4 h-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
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
                <span className="text-base">{language.flag}</span>
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
