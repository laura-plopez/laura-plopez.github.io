import PageHeader from '@/components/ui/PageHeader/PageHeader';
import { useContent } from '@/hooks/useLanguage';
import { animationDelay } from '@/lib/motion';

const ROW =
  'grid animate-rise grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-2 rounded-card bg-white px-6 py-[22px] text-ink sm:grid-cols-[100px_minmax(0,1fr)_auto] sm:gap-6';

function Writing() {
  const { tabs, writing } = useContent();

  return (
    <div className="flex flex-col gap-8">
      <PageHeader title={tabs.writing} lead={writing.lead} />
      <div className="flex flex-col gap-2">
        {writing.posts.map((post, index) => {
          const body = (
            <>
              <span className="font-mono text-xs opacity-75">{post.tag}</span>
              <span className="order-last col-span-2 flex flex-col gap-1.5 sm:order-none sm:col-span-1">
                <span className="text-row font-bold leading-[1.05] tracking-heading text-pretty">{post.title}</span>
                <span className="text-[15px] opacity-80">{post.dek}</span>
              </span>
              <span className="whitespace-nowrap font-mono text-xs opacity-75">
                {post.readTime}
                {post.href && ' ↗'}
              </span>
            </>
          );
          const style = animationDelay(0.06 * index + 0.1);

          return post.href ? (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className={`${ROW} transition-colors duration-200 hover:bg-accent`}
              style={style}
            >
              {body}
            </a>
          ) : (
            <article key={post.title} className={ROW} style={style}>
              {body}
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Writing;
