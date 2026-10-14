import { motion } from 'framer-motion';
import { github } from '../assets';
import { fadeIn } from '../utils/motion';

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M9 7h8v8" />
  </svg>
);

// Screenshot in a browser frame, then the details. Used by Projects and
// Client Work. Each card animates on its own so tall sections on phones
// never stay hidden.
const ShowcaseCard = ({ index, name, category, description, tags, image, url, repo, linkLabel }) => {
  const domain = new URL(url).hostname;

  return (
    <motion.article
      variants={fadeIn('up', 'spring', (index % 3) * 0.15, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="group flex flex-col bg-jet rounded-2xl overflow-hidden
        border border-jetLight hover:border-jetGray transition-colors duration-300">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block" tabIndex={-1}>
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-eerieBlack">
          <span className="w-2.5 h-2.5 rounded-full bg-jetGray" />
          <span className="w-2.5 h-2.5 rounded-full bg-jetGray" />
          <span className="w-2.5 h-2.5 rounded-full bg-jetGray" />
          <span className="ml-3 flex-1 truncate rounded-md bg-jetLight px-3 py-0.5 text-[12px] text-taupe font-poppins">
            {domain}
          </span>
        </div>
        <div className="aspect-[16/10] overflow-hidden bg-eerieBlack">
          <img
            src={image}
            alt={`${name} screenshot`}
            loading="lazy"
            className="w-full h-full object-cover object-top
              transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </a>

      <div className="flex flex-col flex-1 p-5 sm:p-6 font-poppins">
        <p className="text-taupe text-[12px] uppercase tracking-[2px] font-semibold">{category}</p>
        <h3 className="mt-2 text-timberWolf font-bold text-[20px] sm:text-[22px] leading-tight">
          {name}
        </h3>
        <p className="mt-3 flex-1 text-french text-[14px] leading-[22px]">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="px-2.5 py-1 rounded-full bg-eerieBlack text-silver text-[12px] leading-none">
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 h-11 px-5
              rounded-[10px] bg-timberWolf text-eerieBlack text-[14px] font-semibold
              hover:bg-white transition-colors duration-200">
            {linkLabel}
            <ArrowIcon />
          </a>
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 h-11 px-5
                rounded-[10px] border border-jetGray text-timberWolf text-[14px] font-semibold
                hover:border-taupe hover:bg-jetLight transition-colors duration-200">
              <img src={github} alt="" className="w-5 h-5 object-contain" />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ShowcaseCard;
