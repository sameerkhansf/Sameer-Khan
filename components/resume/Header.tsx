import Image from "next/image";
import { profileData } from "@/lib/data";
import { BsTwitterX, BsInstagram, BsLinkedin, BsGithub, BsPatchCheckFill, LuMail, LuGlobe } from "@/components/icons";

const SocialIcons: Record<string, React.ReactNode> = {
  "X (Twitter)": <BsTwitterX className="w-5 h-5" />,
  Instagram: <BsInstagram className="w-5 h-5" />,
  LinkedIn: <BsLinkedin className="w-5 h-5" />,
  GitHub: <BsGithub className="w-5 h-5" />,
};

const Sidebar = () => {
  return (
    <aside className="w-80 lg:w-96 h-screen bg-background border-r border-border p-6 lg:p-8 overflow-y-auto flex-shrink-0">
      <div className="h-full flex flex-col">
        <div className="space-y-6 flex-1">
          {/* Profile */}
          <div className="flex flex-col items-start gap-3">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden animate-float">
              <Image
                src={profileData.imageUrl}
                alt={`${profileData.name} - Software Engineer`}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-2xl md:text-3xl text-foreground font-medium">
                  {profileData.name}
                </h2>
                <BsPatchCheckFill
                  className="w-5 h-5 md:w-6 md:h-6 text-blue-500"
                  aria-label="Verified"
                />
              </div>
              <p className="text-muted-foreground text-xs md:text-sm mt-0">
                {profileData.pronouns}
              </p>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="framer-section-heading">ABOUT</h3>
            <p className="leading-relaxed text-[15px] text-foreground">
              {profileData.bio}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="framer-section-heading">CONTACT</h3>
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${profileData.contact.email}`}
                className="flex items-center gap-3 transition-colors text-[15px] text-foreground hover:text-blue-500"
              >
                <LuMail className="w-4 h-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                {profileData.contact.email}
              </a>
              <a
                href={`https://${profileData.contact.website}`}
                className="flex items-center gap-3 transition-colors text-[15px] text-foreground hover:text-blue-500"
              >
                <LuGlobe className="w-4 h-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                {profileData.contact.website}
              </a>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="framer-section-heading">SKILLS</h3>
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
            <h3 className="framer-section-heading">LANGUAGES</h3>
            <div className="flex flex-wrap gap-2">
              {profileData.languages.map((language) => (
                <span
                  key={language.name}
                  className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-card rounded-full border border-border text-foreground hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200"
                >
                  <span className="text-base">{language.flag}</span>
                  {language.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6"></div>

        {/* Social Links */}
        <div className="flex space-x-6 justify-center pb-4">
          {profileData.socialLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              title={link.name}
              aria-label={`Visit my ${link.name} profile`}
            >
              {SocialIcons[link.name]}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
