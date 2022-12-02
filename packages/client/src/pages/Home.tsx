import { useEffect } from 'react';
import Banner from 'src/components/Banner';
import Explore from 'src/components/Landing/Explore';
import Feedback from 'src/components/Landing/Feedback';
import Layout from 'src/layouts';
import {
  selectScrollSection,
  setScrollSection,
} from 'src/redux/common/common.slice';
import { useAppSelector, useAppDispatch } from 'src/redux/hooks';

const Home = () => {
  const scrollSection = useAppSelector(selectScrollSection);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (scrollSection) {
      const element = document.getElementById(String(scrollSection));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    return function cleanup() {
      dispatch(setScrollSection(''));
    };
  }, [dispatch, scrollSection]);

  return (
    <Layout>
      <Banner />
      <Explore />
      <Feedback />
    </Layout>
  );
};

export default Home;
