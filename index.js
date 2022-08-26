import { addMinutes, intervalToDuration, formatDuration } from "date-fns";

const MAX_RETRIES = 50;
const MAX_OFFSET = 120; // minutes

const START = new Date();

function backoff(retries) {
  return Math.min(MAX_OFFSET, 3 + 2 ** (retries / 2));
}

function minutesToDuration(minutes) {
  return intervalToDuration({
    start: START,
    end: addMinutes(START, minutes),
  });
}

const tableData = [];

for (let i = 0; i < MAX_RETRIES; i++) {
  const previousDate = tableData[i - 1]?.nextRetryDate || new Date();

  const backoffOffset = backoff(i);

  const nextRetryDate = addMinutes(previousDate, backoffOffset);

  tableData.push({
    retry: i + 1,
    backoff: formatDuration(minutesToDuration(backoff(i))),
    nextRetryDate,
    timeSinceStart: formatDuration(
      intervalToDuration({
        start: START,
        end: nextRetryDate,
      })
    ),
  });
}

console.table(tableData);
