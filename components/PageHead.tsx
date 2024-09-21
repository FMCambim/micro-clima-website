import Head from "next/head";

interface PageHeadProps {
  title: string;
  description: string;
}

const PageHead = (props: PageHeadProps) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
    </Head>
  );
};

export default PageHead;
