import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, my name is Sean Kurtley J. Girado. I am 20 years old and I live in San Mateo Arayat, Pampanga. 
          For fun, I like to play basketball, cook different foods, and go swimming. My favorite song is "Jesus is Lord," and my favorite food is Bicol Express because I love its rich, spicy taste. 
          Looking ahead, I have big plans for the next five years. I want to become a top software engineer. I plan to work on important projects, get better at new technologies, and help teach other new developers. 
          My goal is to grow my skills so I can be a leader in the tech world.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}