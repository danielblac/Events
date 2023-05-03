import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function MainLayout({children}) {
  return (
    <>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </>
  )
}
