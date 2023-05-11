import Container from "@mui/material/Container";

import { Stack } from "@mui/material";
import Header from "@/sections/Header";

interface PageProps {
  sections: React.ReactNode[];
}

const PageLayout: React.FC<PageProps> = ({ sections }) => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          paddingTop: { xs: "96px", md: "160px" },
          paddingBottom: { xs: "80px", md: "96px", lg: "192px", xl: "288px" },
          paddingLeft: { xs: "16px", sm: "32px", lg: "64px", xl: "auto" },
          paddingRight: { xs: "16px", sm: "32px", lg: "64px", xl: "auto" },
        }}
      >
        <Header />
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={{ xs: "80px", md: "96px", lg: "192px", xl: "288px" }}
        >
          {sections}
        </Stack>
      </Container>
    </>
  );
};

export default PageLayout;
