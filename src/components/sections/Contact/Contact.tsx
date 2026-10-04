import PageHeader from '@/components/ui/PageHeader/PageHeader';
import { CONTACT_LINKS, CV, PROFILE } from '@/constants/portfolio';
import { useContent, useLanguage } from '@/hooks/useLanguage';

function Contact() {
  const { lang } = useLanguage();
  const { tabs, contact } = useContent();
  const links = CONTACT_LINKS.filter((link) => link.href);
  const [emailUser, emailDomain] = PROFILE.email.split('@');

  return (
    <div className="flex flex-col gap-10">
      <PageHeader title={tabs.contact} />
      <div className="flex max-w-[640px] flex-col gap-6">
        <p className="text-subtitle font-semibold leading-[1.15] text-pretty">{contact.lead}</p>
        <a
          href={`mailto:${PROFILE.email}`}
          className="block break-words rounded-card bg-main p-6 text-[clamp(22px,2.2vw,30px)] font-bold tracking-snug text-white transition-colors duration-200 hover:bg-accent hover:text-ink"
        >
          {emailUser}@<wbr />{emailDomain} ↗
        </a>
        <div className="flex flex-wrap gap-2">
          <a
            href={CV[lang]}
            download
            className="rounded-full bg-ink px-[18px] py-2.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-accent hover:text-ink"
          >
            {contact.cv} ↓
          </a>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-[18px] py-2.5 text-base font-semibold text-ink transition-colors duration-200 hover:bg-ink hover:text-white"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4 rounded-card bg-white p-5 wide:flex-row wide:gap-6">
          <img src="/qr-portfolio.svg" alt={contact.qr.alt} className="size-48 shrink-0 wide:size-32" />
          <div className="flex flex-col gap-1.5 text-center wide:text-left">
            <span className="font-mono text-xs uppercase tracking-[.08em] text-ink-muted">
              <span className="wide:hidden">{contact.qr.shareLabel}</span>
              <span className="hidden wide:inline">{contact.qr.label}</span>
            </span>
            <span className="text-[15px] leading-[1.45] text-ink-subtle text-pretty">
              <span className="wide:hidden">{contact.qr.shareBody}</span>
              <span className="hidden wide:inline">{contact.qr.body}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
