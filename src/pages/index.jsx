import styles from '@/styles/pages/index.module.css';
import HomePageHero from '@/components/HomePageHero/HomePageHero';
import Students from '@/components/Students/Students';
import Services from '@/components/Services/Services';
import { getHomePageStudents } from '@/lib/api';

const HomePage = ({ students }) => {
  console.log("ANTES DE QUE SE CARGUE EL JS", students)

  return (
    <>
      <div className={styles.homePage}>
        <HomePageHero />
        <Students students={students} />
        <Services />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const students = await getHomePageStudents()
  return {
    props: { students }
  }
}

export default HomePage;
