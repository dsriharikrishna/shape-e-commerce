import Link from "next/link";
import type { FooterLink } from "./footerData";

type FooterLinkGroupProps = {
  title: string;
  links: FooterLink[];
};

export default function FooterLinkGroup({
  title,
  links,
}: FooterLinkGroupProps) {
  return (
    <div className="footer-widget rbt-link-hover">
      <h5 className="ft-title">{title}</h5>
      <ul className="ft-link">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
