import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function Layout({ children }) {
  return (
    <>
      <div className="site">
      <Navigation />
        <main className="site-content">{children}</main>
      <Footer />
      </div>
    </>
  )
}
