import HomeWelcomeSection from "../../homelayout/HomeWelcomeSection";
import SecurityAbout from "../../homelayout/AboutSection";
import SecurityBanner from "../../homelayout/Banner";
import SecurityCta from "../../homelayout/CTA";
import SecurityServices from "../../homelayout/ServiceSection";
import Gallery from "../../layout/gallery/Gallery";

export default function HomeSection(){
    return(
        <>
        <SecurityBanner/>
        <HomeWelcomeSection/>
        <SecurityAbout/>
        <SecurityServices/>
        <Gallery/>
        <SecurityCta/>
        </>
    )
}