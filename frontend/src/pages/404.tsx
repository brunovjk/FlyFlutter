import CustomBackground from "@/components/atoms/CustomBackground";
import PageLayout from "@/components/atoms/PageLayout";

import { NotFound } from "@/sections";

const NotFoundPage: React.FC = () => {
  return (
    <CustomBackground>
      <PageLayout sections={[<NotFound key="NotFound" />]} />
    </CustomBackground>
  );
};

export default NotFoundPage;
