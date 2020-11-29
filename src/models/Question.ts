import {QuestionAction} from "@/models/QuestionAction";

export class Question {
	description: string
	yesAction: QuestionAction
	noAction: QuestionAction
	noMeetingOutcome?: string
	meetingOutcome = "Schedule and prepare for the meeting. " +
		"When you schedule, make sure it has clear explanation of why you're scheduling it, what do you want to achieve " +
		"or what subjects to address, so the participants would come prepared and with aligned expectations. " +
		"Invite only participants who really need to be present."
	private next: string | undefined

	constructor(description: string,
	            yesAction: QuestionAction,
	            noAction: QuestionAction,
	            noMeetingOutcome?: string,
	            meetingOutcome?: string
	) {
		this.description = description;
		this.yesAction = yesAction;
		this.noAction = noAction;
		this.next = undefined
		if (noMeetingOutcome) {
			this.noMeetingOutcome = noMeetingOutcome
		}
		if (meetingOutcome) {
			this.meetingOutcome = meetingOutcome
		}
	}

	public setNext(next) {
		this.next = next
	}

	public get nextAction() {
		return this.next
	}
}