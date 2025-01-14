import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

const CIRCLE_SIZE = 100;
const SECTION_SIZE = 330;

const TimelineSection = ({
  line1,
  line2,
  line3,
}: {
  line1: string;
  line2?: string;
  line3?: string;
}) => {
  return (
    <Stack>
      <Typography variant="body1">{line1}</Typography>
      {line2 && <Typography variant="subtitle2">{line2}</Typography>}
      {line3 && (
        <Typography variant="caption" letterSpacing={0.8}>
          {line3}
        </Typography>
      )}
    </Stack>
  );
};

const Resume = () => {
  const accordionSx = {
    backgroundColor: "transparent",
    "&:before": {
      display: "none",
    },
    ".MuiAccordionSummary-content": {
      margin: 0,
      marginBottom: 1,
    },
  };

  return (
    <Stack>
      <Stack mb={10} alignSelf="center">
        <Box maxWidth={SECTION_SIZE} position="relative" p={2}>
          <Box
            style={{
              width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,
              borderRadius: "50%",
              backgroundColor: "rgb(57 9 9 / 57%)",
              position: "absolute",
              zIndex: 0,
              top: -24,
              left: 112,
            }}
          />
          <Typography zIndex={1} position="relative">
            In software, React is my world, and I am (finally) confidently
            pro-TypeScript.
          </Typography>
        </Box>
      </Stack>

      <Timeline>
        {/* Percipio */}
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2022 - 2024
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <Accordion elevation={0} disableGutters sx={accordionSx}>
              <AccordionSummary>
                <TimelineSection
                  line1="Percipio Health"
                  line2="Software Engineer II &rarr; Senior Software Engineer"
                  line3="React | React Native | TypeScript"
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle2" color="text.secondary">
                  At Percipio, I worked with an amazing team of familiar faces
                  from my time at Olive, as well as new ones (some which I
                  helped hire), to help develop the front end for Percipio's
                  patient mobile app, clinician-facing portal, as well as the
                  content portal that manages content shown in the patient app.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </TimelineContent>
        </TimelineItem>

        {/* Olive */}
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2020 - 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <Accordion elevation={0} disableGutters sx={accordionSx}>
              <AccordionSummary>
                <TimelineSection
                  line1="Olive"
                  line2="Front-End Software Engineer &rarr; Software
                      Engineer II"
                  line3="React | TypeScript"
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle2" color="text.secondary">
                  I loved working on fun, detailed animation work on the
                  Apertures team.
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  After Apertures, I worked alongside more great teammates on
                  various other projects, really starting to learn TypeScript
                  around this time.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </TimelineContent>
        </TimelineItem>

        {/* Zayo */}
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2020
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <Accordion elevation={0} disableGutters sx={accordionSx}>
              <AccordionSummary>
                <TimelineSection
                  line1="Zayo"
                  line2="Application Developer"
                  line3="React"
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle2" color="text.secondary">
                  Greatest Contribution: Worked closely with senior designer to
                  develop strategies around delivering designs using best UI/UX
                  practices.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </TimelineContent>
        </TimelineItem>

        {/* The Green Solution */}
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2019 - 2020
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <Accordion elevation={0} disableGutters sx={accordionSx}>
              <AccordionSummary>
                <TimelineSection
                  line1="The Green Solution"
                  line2="Front-End Developer"
                  line3="jQuery | HTML | CSS"
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle2" color="text.secondary">
                  Proudest Moment: Led 10+ cross-departmental project scoping
                  meetings after introducing an agile, user-centric approach.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </TimelineContent>
        </TimelineItem>

        {/* EVS */}
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2018 - 2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector sx={{ opacity: 0 }} />
          </TimelineSeparator>

          <TimelineContent>
            <Accordion elevation={0} disableGutters sx={accordionSx}>
              <AccordionSummary>
                <TimelineSection
                  line1="EVS"
                  line2="Jr. Software Developer"
                  line3="AngularJS | Xamarin | SQL"
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle2" color="text.secondary">
                  Greatest Accomplishment: The Pack Station - A key feature of
                  the web app. UI designed by me!
                </Typography>
              </AccordionDetails>
            </Accordion>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <Stack mt={10}>
        <Stack spacing={6} alignSelf="center">
          <Stack mb={10} alignSelf="center">
            <Box maxWidth={SECTION_SIZE} position="relative">
              <Box
                style={{
                  width: CIRCLE_SIZE * 0.8,
                  height: CIRCLE_SIZE * 0.8,
                  borderRadius: "50%",
                  backgroundColor: "rgb(57 9 9 / 57%)",
                  position: "absolute",
                  zIndex: 0,
                  top: -18,
                  right: 8,
                }}
              />
              <Typography zIndex={1} position="relative" textAlign="center">
                Before software, there was math.
              </Typography>
            </Box>
          </Stack>

          <Stack spacing={3}>
            <Typography textAlign="center" variant="h6">
              University of Illinois at Chicago
            </Typography>

            <Timeline>
              {/* Graduate Coursework */}
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2014 - 2015
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                  <Accordion elevation={0} disableGutters sx={accordionSx}>
                    <AccordionSummary>
                      <TimelineSection
                        line1="Graduate Coursework / Teaching Assistant"
                        line2="MS Student in Pure Mathematics"
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="subtitle2" color="text.secondary">
                        Awarded Honorable Mention for Outstanding Teaching
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </TimelineContent>
              </TimelineItem>

              {/* BS in Math */}
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  Graduated in 2014
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                  <Accordion elevation={0} disableGutters sx={accordionSx}>
                    <AccordionSummary>
                      <TimelineSection
                        line1="Bachelor of Science in Mathematics"
                        line2="Minor in Spanish"
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="subtitle2" color="text.secondary">
                        GPA: 3.8
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </TimelineContent>
              </TimelineItem>

              {/* Undergrad Research */}
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2012 - 2013
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>

                <TimelineContent>
                  <Accordion elevation={0} disableGutters sx={accordionSx}>
                    <AccordionSummary>
                      <TimelineSection
                        line1="Undergraduate Researcher"
                        line2="Number Theory"
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="subtitle2" color="text.secondary">
                        Ask me about the behavior of a given quadratic
                        irrational's simple continued fraction expansion when
                        multiplied by two.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Resume;
