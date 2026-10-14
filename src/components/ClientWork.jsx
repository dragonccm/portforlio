import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { clientWebsites, archivedClientWebsites } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import ShowcaseCard from './ShowcaseCard';

const archivedCount = archivedClientWebsites.reduce((n, cat) => n + cat.sites.length, 0);
const totalCount = archivedCount + clientWebsites.length;

const stats = [
  { value: `${totalCount}`, label: 'client websites delivered' },
  ...archivedClientWebsites.map((cat) => ({
    value: `${cat.sites.length}`,
    label: cat.category,
  })),
];

const ClientWork = () => {
  const [showArchive, setShowArchive] = useState(false);

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>{totalCount} Websites Delivered</p>
        <h2 className={styles.sectionHeadTextLight}>Client Work.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe sm:text-[18px] text-[16px] max-w-3xl sm:leading-[30px] leading-[26px]">
        Websites I have designed and developed for clients — DeFi investment
        platforms, blockchain finance applications and meme token landing
        pages. Most of them have since been taken offline; the two below are
        still live.
      </motion.p>

      <dl className="mt-8 grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4 max-w-3xl">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex xs:flex-col items-baseline xs:items-start gap-3 xs:gap-1
              rounded-2xl bg-jet border border-jetLight px-5 py-4">
            <dt className="order-2 text-taupe text-[13px] sm:text-[14px] leading-snug font-poppins">
              {stat.label}
            </dt>
            <dd className="order-1 text-timberWolf text-[28px] sm:text-[36px] font-black font-poppins leading-none">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 sm:mt-14 grid gap-6 lg:gap-8 md:grid-cols-2">
        {clientWebsites.map((site, index) => (
          <ShowcaseCard key={site.url} index={index} {...site} linkLabel="Visit site" />
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-jet border border-jetLight font-poppins">
        <button
          type="button"
          onClick={() => setShowArchive(!showArchive)}
          aria-expanded={showArchive}
          aria-controls="client-archive"
          className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left">
          <span>
            <span className="block text-timberWolf text-[15px] sm:text-[16px] font-semibold">
              Earlier client sites ({archivedCount})
            </span>
            <span className="block text-taupe text-[13px] mt-0.5">No longer online</span>
          </span>
          <span className="flex-shrink-0 inline-flex items-center gap-2 text-taupe text-[13px]">
            {showArchive ? 'Hide' : 'Show list'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-4 transition-transform duration-200 ${showArchive ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>

        {showArchive && (
          <div id="client-archive" className="px-5 sm:px-6 pb-6 space-y-5">
            {archivedClientWebsites.map((cat) => (
              <div key={cat.category}>
                <p className="text-taupe text-[12px] uppercase tracking-[2px] font-semibold mb-3">
                  {cat.category} · {cat.sites.length}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {cat.sites.map((site) => (
                    <li
                      key={site.url}
                      title={new URL(site.url).hostname}
                      className="px-3 py-1.5 rounded-full bg-eerieBlack text-silver text-[12px] sm:text-[13px]">
                      {site.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(ClientWork, 'clientwork');
