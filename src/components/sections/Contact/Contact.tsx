import ContactForm from '@/components/sections/Contact/ContactForm';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import { CONTACT_LINKS, PROFILE } from '@/constants/portfolio';
import { useContent } from '@/hooks/useLanguage';

function Contact() {
  const { tabs, contact } = useContent();
  const links = CONTACT_LINKS.filter((link) => link.href);
  const [emailUser, emailDomain] = PROFILE.email.split('@');

  return (
    <div className="flex flex-col gap-10">
      <PageHeader title={tabs.contact} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-[clamp(32px,5vw,56px)]">
        <div className="flex flex-col gap-6">
          <p className="text-subtitle font-semibold leading-[1.15] text-pretty">{contact.lead}</p>
          <a
            href={`mailto:${PROFILE.email}`}
            className="block break-words rounded-card bg-main p-6 text-[clamp(22px,2.2vw,30px)] font-bold tracking-snug text-white transition-colors duration-200 hover:bg-accent hover:text-ink"
          >
            {emailUser}@<wbr />{emailDomain} ↗
          </a>
          <div className="flex flex-wrap gap-2">
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
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
