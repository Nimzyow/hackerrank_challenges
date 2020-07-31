module.exports = (meetings) => {
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));

  // have an initial meeting end time
  // have the next meeting start time
  // is initial meeting end time greater
  // or = to next meeting startTime

  const meetingsSorted = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  let mergedMeetings = [meetingsSorted[0]];
  for (let i = 1; i < meetingsSorted.length; i++) {
    const currentMeeting = meetingsSorted[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(
        currentMeeting.endTime,
        lastMergedMeeting.endTime,
      );
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }
  return mergedMeetings;
};
