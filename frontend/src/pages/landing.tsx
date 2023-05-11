import CustomBackground from "@/components/atoms/CustomBackground";
import PageLayout from "@/components/atoms/PageLayout";

import { Hero, About, Contact, Projects } from "../sections";

const LandingPage: React.FC = () => {
  return (
    <CustomBackground>
      <PageLayout
        sections={[
          <Hero key="Hero" />,
          <About key="about" />,
          <Projects key="projects" />,
          <Contact key="contact" />,
        ]}
      />
    </CustomBackground>
  );
};

export default LandingPage;
