import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Timeline from "./Timeline";
import researchForum from "../../assets/research-forum.jpg";

const CIRCLE_SIZE = 100;
const CIRCLE_COLOR = "rgb(57 9 9 / 57%)";
const SECTION_SIZE = 330;

const Resume = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isMedium = useMediaQuery("(max-width:1000px) and (min-width:601px)");

  console.log("isMedium", isMedium);

  return (
    <Stack>
      <Stack mb={6} alignSelf="center">
        <Box maxWidth={SECTION_SIZE} position="relative" p={2}>
          <Box
            style={{
              width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,
              borderRadius: "50%",
              backgroundColor: CIRCLE_COLOR,
              position: "absolute",
              zIndex: 0,
              top: -12,
              left: 138,
            }}
          />
          <Typography zIndex={1} position="relative" textAlign="center">
            In software, React is my world, and I am (finally) confidently
            pro-TypeScript.
          </Typography>
        </Box>
      </Stack>

      <Timeline
        timelineItems={[
          {
            dateRange: "2022 - 2024",
            summary: {
              line1: "Percipio Health",
              line2: ["Senior Software Engineer", "Software Engineer II"],
              line3: "React | React Native | TypeScript",
            },
            details: [
              "As a founding engineer at Percipio, I worked with an amazing team of familiar faces from my time at Olive in addition to just-as-awesome new teammates (some which I helped hire) to develop the front end for the patient mobile app, the clinician-facing portal, and the content portal that manages content shown in the patient app.",
              "In my early days at Percipio, I dabbled a bit in machine learning, supporting efforts to get our first MRCNN model working using TensorFlow.",
            ],
          },
          {
            dateRange: "2020 - 2022",
            summary: {
              line1: "Olive",
              line2: ["Software Engineer II", "Front-End Software Engineer"],
              line3: "React | TypeScript",
            },
            details: [
              "At Olive, I loved working on fun, detailed animation work on the Apertures team.",
              "After Apertures, I worked alongside more great teammates on various other projects, really starting to learn TypeScript around this time (many thanks to said great teammates).",
            ],
          },
          {
            dateRange: "2020",
            summary: {
              line1: "Zayo",
              line2: "Application Developer",
              line3: "React",
            },
            details: [
              "Greatest Contribution: Worked closely with senior designer to develop strategies around delivering designs using best UI/UX practices.",
            ],
          },
          {
            dateRange: "2019 - 2020",
            summary: {
              line1: "The Green Solution",
              line2: "Front-End Developer",
              line3: "jQuery | HTML | CSS",
            },
            details: [
              "Proudest Moment: Led 10+ cross-departmental project scoping meetings after introducing an agile, user-centric approach.",
            ],
          },
          {
            dateRange: "2018 - 2019",
            summary: {
              line1: "EVS",
              line2: "Jr. Software Developer",
              line3: "AngularJS | Xamarin | SQL",
            },
            details: [
              "Greatest Accomplishment: The Pack Station - A key feature of the web app. UI designed by me!",
            ],
          },
        ]}
      />

      <Stack mt={10}>
        <Stack spacing={6} alignSelf="center">
          <Stack
            mb={10}
            alignSelf={isMobile ? "flex-start" : "center"}
            position="relative"
            right={isMobile ? undefined : 100}
            pl={isMobile ? 7 : undefined}
          >
            <Box maxWidth={SECTION_SIZE}>
              <Box
                style={{
                  width: CIRCLE_SIZE * 0.8,
                  height: CIRCLE_SIZE * 0.8,
                  borderRadius: "50%",
                  backgroundColor: CIRCLE_COLOR,
                  position: "absolute",
                  zIndex: -1,
                  top: -25,
                  right: -37,
                }}
              />
              <Typography zIndex={1} textAlign="center">
                Before software, there was math.
              </Typography>
            </Box>
          </Stack>

          <Stack spacing={3} position="relative">
            <Typography
              textAlign={isMobile ? "left" : "center"}
              variant="h6"
              pl={isMobile ? 7 : undefined}
              pr={2}
            >
              University of Illinois at Chicago
            </Typography>

            <Timeline
              timelineItems={[
                {
                  dateRange: "2014 - 2015",
                  summary: {
                    line1: "Graduate Coursework / Teaching Assistant",
                    line2: "MS Student in Pure Mathematics",
                  },
                  details: [
                    "Awarded Honorable Mention for Outstanding Teaching",
                  ],
                },
                {
                  dateRange: "Graduated in 2014",
                  summary: {
                    line1: "Bachelor of Science in Mathematics",
                    line2: "Minor in Spanish",
                  },
                  details: ["GPA: 3.8"],
                },
                {
                  dateRange: "2012 - 2013",
                  summary: {
                    line1: "Undergraduate Researcher",
                    line2: "Number Theory",
                  },
                  details: [
                    "Ask me about the behavior of a given quadratic irrational's simple continued fraction expansion when multiplied by two.",
                  ],
                },
              ]}
            />

            <img
              src={researchForum}
              alt="At the UIC research forum, sharing my findings"
              style={{
                borderRadius: "10%",
                height: 150,
                width: 150,
                position: isMobile || isMedium ? "relative" : "absolute",
                left: isMobile ? "50%" : isMedium ? "60%" : "76%",
                bottom: isMobile || isMedium ? undefined : -60,
                top: isMobile ? -36 : undefined,
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Resume;
