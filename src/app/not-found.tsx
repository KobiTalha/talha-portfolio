import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section not-found">
      <p className="not-found-code">404</p>
      <h1 className="not-found-title">This page took a wrong turn in Dhaka traffic.</h1>
      <p className="body-text">
        The page you&rsquo;re looking for doesn&rsquo;t exist — but the portfolio does.
      </p>
      <Link className="tlink" href="/">
        Back to the portfolio <span>→</span>
      </Link>
    </section>
  );
}
