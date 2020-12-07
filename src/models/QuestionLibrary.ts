import {Question} from "@/models/Question";
import {QuestionAction} from "@/models/QuestionAction";

export class QuestionLibrary {
	private questions: Record<string, Question> = {
		'100': new Question(
			"Do you have a clear understanding of the problem you want to solve?",
			QuestionAction.NEXT,
			QuestionAction.NO_MEETING,
			"Instead of a meeting, schedule time for strategic thinking and research to better understand the " +
			"problem, potential solutions, questions you need to clarify and actions to take - and then, " +
			"if you're still blocked, decide whether you need a meeting"
		),
		'200': new Question(
			"Do you need another opinion or more information to take action?",
			QuestionAction.NEXT,
			QuestionAction.NO_MEETING,
			"When there's no blocker for the progress, it's better to move forward until you face " +
			"a blocker or an obstacle that would require an outside expertise, and then decide if meeting is in order " +
			"or other means like documentation or similar knowledge base could help. "
		),
		'300': new Question(
			"Does meeting subject require a real-time communication?",
			QuestionAction.NEXT,
			QuestionAction.NO_MEETING,
			"If the problem requires some input, but it's not required to be swift two-way communication, email could be " +
			"a significantly better alternative as it's much more efficient by providing people with opportunity to " +
			"respond when they have time, add more relevant contacts and attach necessary information. This is especially " +
			"useful for the cases when you need a feedback on your written/published materials, or any other sort of offline content."
		),
		'400': new Question(
			"Could you use other means of communication e.g. (group) chat, shared doc or email?",
			QuestionAction.NO_MEETING,
			QuestionAction.NEXT,
			"If there's no need to see the participants or hold lengthy conversation with them, other means such as (group) chats " +
			"in instant messengers to have a quick idea exchange or ask for more details, online polls, forms or shared documents " +
			"to collect ideas or feedback, or email for a non-urgent or low-feedback cases."
		)

	}

	public listQuestionIds() {
		return Object.keys(this.questions)
	}

	public getNext(id: string) {
		const questionList = this.listQuestionIds()
		const questionPosition = questionList.findIndex((item) => item === id)

		if (questionPosition === -1 || questionPosition + 1 === questionList.length) {
			// the element is missing or last
			return undefined
		}

		return questionList[questionPosition + 1]
	}

	public getQuestion(id: string) {
		const next = this.getNext(id)
		const question = this.questions[id]
		if (!question) {
			throw new Error(`Question ${id} not found!`)
		}
		question.setNext(next)
		return question
	}
}