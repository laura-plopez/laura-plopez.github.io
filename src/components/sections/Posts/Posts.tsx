import { ArrowUpRight } from '@/components/ui/Icons/Icons';
import Reveal from '@/components/ui/Reveal/Reveal';
import Section from '@/components/ui/Section/Section';
import { CONTACT_LINKS, POSTS } from '@/constants/portfolio';
import { useContent, useLanguage } from '@/hooks/useLanguage';

const SUBSTACK = CONTACT_LINKS.find((link) => link.label === 'Substack')?.href;

function Posts() {
  const { lang } = useLanguage();
  const { posts } = useContent();

  return (
    <Section id="posts">
      <Reveal>
        <ul className="border-t border-line">
          {POSTS.map((post) => (
            <li key={post.href} className="border-b border-line">
              <a href={post.href} target="_blank" rel="noreferrer" className="group block pb-5 pt-[22px]">
                <h3 className="text-[17px] font-semibold leading-[1.35] transition-colors duration-200 group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-1 max-w-[62ch] text-[15px] text-ink-muted">{post.dek}</p>
                <span className="mt-3 flex items-center gap-2 text-[13px] text-ink-muted">
                  <span className="font-semibold text-ink-soft">{post.topic[lang]}</span>
                  <span aria-hidden="true" className="text-ink-faint">·</span>
                  {post.readTime} {posts.readTime}
                  <ArrowUpRight
                    size={12}
                    className="ml-auto transition-[transform,color] duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
        {SUBSTACK && (
          <a
            href={SUBSTACK}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 hover:text-accent"
          >
            {posts.all}
            <ArrowUpRight size={12} />
          </a>
        )}
      </Reveal>
    </Section>
  );
}

export default Posts;
