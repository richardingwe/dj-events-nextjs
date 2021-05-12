import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import events from './api/events';

const Home = ({ events }) => {
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
};
export default Home;

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}