import {Question} from "@/models/Question";
import {QuestionAction} from "@/models/QuestionAction";

export class QuestionLibrary {
	private questions: Record<string, Question> = {
		'100': new Question(
			"Have I thought through this situation?",
			QuestionAction.NEXT,
			QuestionAction.NO_MEETING,
			"Instead of a meeting, schedule time for strategic thinking and research - and then, " +
			"depending on the outcome, decide whether you still need a meeting"
		),
		'200': new Question(
			"Do I need an outside input to make progress?",
			QuestionAction.NEXT,
			QuestionAction.NO_MEETING,
			"When there's no blocker for the progress, it's better to move on to the point when you face " +
			"a blocker or an obstacle that would require an outside expertise, and then decide if meeting is in order."
		),

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