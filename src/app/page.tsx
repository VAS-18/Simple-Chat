import Navbar from "@/components/base/Navbar"
import HeroSection from "@/components/base/Hero"
import UserReviews from "@/components/base/Review"
import Footer from "@/components/base/Footer"

export default async function LandingPage() {
  return(
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <UserReviews></UserReviews>
      <Footer></Footer>
    </div>
  )
}