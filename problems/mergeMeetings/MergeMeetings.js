module.exports = (meetings) => {
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));
  let mergedMeetings = [meetingsCopy[0]];
  // have an initial meeting end time
  // have the next meeting start time
  // is initial meeting end time greater
  // or = to next meeting startTime

  for (let i = 1; i < meetingsCopy.length; i++) {
    const currentMeeting = meetingsCopy[i];
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
