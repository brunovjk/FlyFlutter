import { Stack } from "@mui/material";
import { SectionLayout } from "@/components/atoms";
import {
  ContactCopy,
  ContactIllustration,
  IconStack,
} from "@/components/molecules";
import { ContactMessage } from "@/components/organisms";
import { useIsUpScreen } from "@/hooks";

const Contact: React.FC = () => {
  const isMediumScreen = useIsUpScreen("md");

  return (
    <SectionLayout
      content1={
        <Stack spacing="20px">
          <ContactCopy />
          <IconStack />
          <ContactMessage />
        </Stack>
      }
      content2={isMediumScreen ? <ContactIllustration /> : null}
    />
  );
};

export default Contact;
