import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import ShowcaseCard from './ShowcaseCard';

const Projects = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Case Studies</p>
        <h2 className={styles.sectionHeadTextLight}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe sm:text-[18px] text-[16px] max-w-3xl sm:leading-[30px] leading-[26px]">
        Products I have designed and built end to end over the past two years —
        from a production system that runs a garment workshop to a story
        platform, a fintech tracker and a history game. All of them are live:
        open the site or read the source.
      </motion.p>

      <div className="mt-10 sm:mt-14 grid gap-6 lg:gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ShowcaseCard
            key={project.id}
            index={index}
            {...project}
            url={project.demo}
            linkLabel="Live site"
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
