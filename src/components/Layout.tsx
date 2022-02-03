import Head from "next/head";
import styles from "../pages/styles/Layout.module.css"
import Image from "next/image"
import Link from "next/link"
import utilStyles from "../pages/styles/utils.module.css"

type Props = {
  children: React.ReactNode;
  title:string;
  description:string;
  home:boolean;
};

const name='victor'

const Layout: React.FC<Props> = ({ children, title, description, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
       </Head>

       <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/1.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/img/1.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <nav>
        <Link href="/">
          <a>Inicio |</a>
        </Link>
        <Link href="/blog">
          <a>Blog |</a>
        </Link>
        <Link href="/contact">
          <a>Contacto |</a>
        </Link>
        <Link href="/about">
          <a>About |</a>
        </Link>
      </nav>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer>footer</footer>
    </div>
  );
};

export default Layout;

Layout.defaultProps={
  title: "Next.js  |  mi sitio web",
  description:"Descripcion de mi sitio web",
}
