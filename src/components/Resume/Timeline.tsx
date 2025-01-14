import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  Timeline as MuiTimeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

type TimelineSummarySection = {
  line1: string;
  line2?: string | string[];
  line3?: string;
};
const TimelineSection = ({ line1, line2, line3 }: TimelineSummarySection) => {
  return (
    <Stack>
      <Typography>{line1}</Typography>
      {line2 ? (
        Array.isArray(line2) ? (
          line2.map((l) => <Typography variant="subtitle2">{l}</Typography>)
        ) : (
          <Typography variant="subtitle2">{line2}</Typography>
        )
      ) : null}
      {line3 && (
        <Typography variant="caption" letterSpacing={0.8}>
          {line3}
        </Typography>
      )}
    </Stack>
  );
};

type TimelineItem = {
  summary: TimelineSummarySection;
  details: string[];
  dateRange: string;
};

const Timeline = ({ timelineItems }: { timelineItems: TimelineItem[] }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  // left align timeline when isMobile (also removing opposite content when isMobile)
  const timelineSx = isMobile
    ? {
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }
    : undefined;

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
    <MuiTimeline sx={timelineSx}>
      {timelineItems.map((item, index) => {
        return (
          <TimelineItem>
            {!isMobile && (
              <TimelineOppositeContent color="text.secondary">
                {item.dateRange}
              </TimelineOppositeContent>
            )}

            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector
                style={{ opacity: index === timelineItems.length - 1 ? 0 : 1 }}
              />
            </TimelineSeparator>

            <TimelineContent>
              <Accordion elevation={0} disableGutters sx={accordionSx}>
                <AccordionSummary>
                  <TimelineSection
                    line1={item.summary.line1}
                    line2={item.summary.line2}
                    line3={item.summary.line3}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Stack spacing={1}>
                    {item.details.map((detail) => {
                      return (
                        <Typography variant="subtitle2" color="text.secondary">
                          {detail}
                        </Typography>
                      );
                    })}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </MuiTimeline>
  );
};

export default Timeline;
