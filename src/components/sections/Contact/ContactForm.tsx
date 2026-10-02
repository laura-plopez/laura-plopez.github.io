import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import PillButton from '@/components/ui/PillButton/PillButton';
import ToggleChip from '@/components/ui/ToggleChip/ToggleChip';
import { PROFILE } from '@/constants/portfolio';
import { useContent } from '@/hooks/useLanguage';
import type { ContactTopic } from '@/types/portfolio';

const TOPICS: ContactTopic[] = ['job', 'collab', 'hello'];

const INPUT =
  'rounded-image border-[1.5px] border-transparent bg-surface px-3.5 py-3 text-base text-ink outline-none placeholder:text-ink-muted focus:border-main';

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[11px] uppercase tracking-[.08em] text-ink-muted">{label}</span>
      {children}
    </label>
  );
}

function ContactForm() {
  const { contact } = useContent();
  const [topic, setTopic] = useState<ContactTopic>('job');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const subject = `${contact.topics[topic]} · ${name}`;

    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    setSent(true);
  };

  return (
    <div className="self-start rounded-panel bg-white p-7">
      {sent ? (
        <div className="flex flex-col gap-2 py-6">
          <span className="text-5xl font-bold tracking-[-0.04em]">{contact.sentTitle}</span>
          <span className="text-[17px] text-ink-soft">{contact.sentBody}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
          <Field label={contact.form.name}>
            <input name="name" required autoComplete="name" className={INPUT} />
          </Field>
          <div role="group" aria-label={contact.form.topic} className="flex flex-wrap gap-1.5">
            {TOPICS.map((option) => (
              <ToggleChip key={option} active={topic === option} onClick={() => setTopic(option)} className="text-sm">
                {contact.topics[option]}
              </ToggleChip>
            ))}
          </div>
          <Field label={contact.form.message}>
            <textarea name="message" rows={4} required className={`${INPUT} resize-y`} />
          </Field>
          <PillButton type="submit">{contact.form.send} →</PillButton>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
