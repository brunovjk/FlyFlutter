import { Illustration } from "@/components/atoms";
import { contact } from "@/assets/copy";

const ContactIllustration: React.FC = () => {
  return (
    <Illustration
      altText={contact.illustrationAltText}
      svgPath="/illustration/technology.svg"
    />
  );
};

export default ContactIllustration;
