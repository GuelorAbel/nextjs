import Head from "next/head";

// interface qui gère les métas données de l'entête de l'application
interface Props {
      title: string;
}


export default function Seo({title}: Props) {
      // rendu navigateur
      return (
            <Head>
                  <title>{title}</title>
                  <meta name="description" content="" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <link rel="icon" href="favicon.ico" type="image/x-icon" />
            </Head>
      )
}
