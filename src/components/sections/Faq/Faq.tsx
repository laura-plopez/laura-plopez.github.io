import ChatBot from '@/components/sections/Faq/ChatBot';
import FaqAccordion from '@/components/sections/Faq/FaqAccordion';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import { useContent } from '@/hooks/useLanguage';

function Faq() {
  const { tabs, faq } = useContent();

  return (
    <div className="flex flex-col gap-8">
      <PageHeader title={tabs.faq} lead={faq.lead} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-2">
        <FaqAccordion items={faq.items} />
        <ChatBot />
      </div>
    </div>
  );
}

export default Faq;
