import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { clientWebsites } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import ShowcaseCard from './ShowcaseCard';

const stats = [
  { value: '60+', label: 'client websites delivered' },
  { value: '30', label: 'DeFi, investment & fintech platforms' },
  { value: '32', label: 'meme token landing pages' },
];

const ClientWork = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Delta Labs JSC</p>
        <h2 className={styles.sectionHeadTextLight}>Client Work.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe sm:text-[18px] text-[16px] max-w-3xl sm:leading-[30px] leading-[26px]">
        At Delta Labs JSC I designed and built more than 60 websites for
        clients — DeFi and investment platforms, fintech apps and meme token
        landing pages. The company has since closed and most of those sites are
        no longer hosted; the two below are still online.
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
    </div>
  );
};

export default SectionWrapper(ClientWork, 'clientwork');
