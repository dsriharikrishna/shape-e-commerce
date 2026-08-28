import { socialIcons } from "./footerData";

type SocialLinksProps = {
  className?: string;
};

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <ul className={`rbt-social-icon-list ${className}`.trim()}>
      {socialIcons.map((icon) => (
        <li key={icon}>
          <a href="#">
            <i className={`fa-brands fa-${icon}`} />
          </a>
        </li>
      ))}
    </ul>
  );
}
