module.exports = (meetings) => {
    const meetingsCopy = JSON.parse(JSON.stringify(meetings));
    let mergedMeetings = [meetingsCopy[0]]
    for (let i = 1; i < meetings.length; i++) {
        const lastMeetingMerged = mergedMeetings[mergedMeetings.length - 1];
        const currentMeeting = meetingsCopy[i]
        if (lastMeetingMerged.endTime >= currentMeeting.startTime) {
            mergedMeetings[mergedMeetings.length - 1].endTime = Math.max(lastMeetingMerged.endTime, currentMeeting.endTime)
        } else {
            mergedMeetings.push(currentMeeting)
        }

    }
    return mergedMeetings
}