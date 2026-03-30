import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { clientWebsites } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const WebsiteCard = ({ name, url, index }) => (
  <motion.a
    variants={fadeIn('up', 'spring', index * 0.02, 0.4)}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3 bg-jet hover:bg-jetLight
      rounded-[10px] px-4 py-3 border border-jetGray hover:border-taupe
      transition-all duration-200 cursor-pointer">
    <span className="text-dim text-[11px] font-poppins w-5 flex-shrink-0 text-right">
      {String(index + 1).padStart(2, '0')}
    </span>
    <span className="text-silver group-hover:text-timberWolf text-[13px] font-poppins flex-1 truncate">
      {name}
    </span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-3.5 h-3.5 text-dim group-hover:text-taupe flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  </motion.a>
);

const ClientWork = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>62 Websites Delivered</p>
        <h2 className={styles.sectionHeadTextLight}>Client Work.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        A collection of websites I have designed and developed for clients —
        spanning DeFi investment platforms, blockchain finance applications, and
        meme token landing pages.
      </motion.p>

      <div className="mt-10 flex gap-3 flex-wrap">
        {clientWebsites.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-5 py-2 rounded-full text-[14px] font-poppins font-semibold
              transition-all duration-200 ${
                activeTab === i
                  ? 'bg-timberWolf text-eerieBlack'
                  : 'bg-transparent text-taupe border border-jetGray hover:border-taupe'
              }`}>
            {cat.category}
            <span className="ml-2 text-[12px] opacity-60">({cat.sites.length})</span>
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.05 }}
        className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {clientWebsites[activeTab].sites.map((site, i) => (
          <WebsiteCard key={site.url} name={site.name} url={site.url} index={i} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ClientWork, 'clientwork');
