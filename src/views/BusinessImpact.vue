<template>
  <SplitLayout>
    <template slot="dark-side">
      <article>
        <section>
          <p>
            With
            <InlineDropdown :caption="salaryCaption">
              <div class="form-row">
                <label for="salary-currency-selection" class="sr-only">Salary currency</label>
                <select  id="salary-currency-selection" class="mx-1 form-control col" v-model="salaryCurrency">
                  <option v-for="(symbol, code) in Currencies" :key="code" :value="symbol">
                    {{ code }} - {{ symbol }}
                  </option>
                </select>
                <label for="salary-amount-selection" class="sr-only">Salary amount</label>
                <input id="salary-amount-selection" class="mx-1 form-control col" type="number" v-model="salaryAmount" min="0"/>
                <label for="salary-period-selection" class="sr-only">Salary period</label>
                <select id="salary-period-selection" class="mx-1 form-control col" v-model="salaryPeriod">
                  <option v-for="(period, index) in SalaryPeriods" :key="index" :value="period">{{ period }}</option>
                </select>
              </div>
            </InlineDropdown>
            Net salary
          </p>
          <p>
            A
            <InlineDropdown :caption="meetingFrequency">
              <label for="meeting-frequency-selection" class="sr-only">Meeting frequency</label>
              <select  id="meeting-frequency-selection" class="mx-1 form-control" v-model="meetingFrequency">
                <option v-for="(frequency, code) in MeetingFrequency" :key="code" :value="frequency">
                  {{ frequency }}
                </option>
              </select>
            </InlineDropdown>
            meeting of
            <InlineDropdown :caption="meetingLengthCaption">
              <div class="input-group">
                <input id="hours-adjustment" type="number" class="single-control form-control" v-model="meetingHours"
                       min="1" max="24"/>
                <div class="input-group-append">
                  <label for="hours-adjustment" class="input-group-text">hours</label>
                </div>
              </div>
            </InlineDropdown>
            with
            <InlineDropdown :caption="meetingParticipants">
              <label for="participants-number-selection" class="sr-only">Participants number</label>
              <input id="participants-number-selection" type="number" class="mx-1 form-control col" v-model="meetingParticipants" min="1" max="1000"/>
            </InlineDropdown>
            participants
          </p>

          <h3>
            Costs<sup class="asterisk">*</sup>
          </h3>
          <h1>
            {{ salaryCurrency }}{{ meetingCost }}/month
          </h1>
          <section class="cost-breakdown mt-5 pt-3">
            <p>
              <sup class="asterisk">*</sup> Cost assumption is made based on average of 8 working hours a day, 5 workdays a week, 4 weeks a month and 12 month a year.
            </p>
          </section>
        </section>
      </article>
    </template>
    <template slot="bright-side">
      <article>
        <header>
          <h3>What to do?</h3>
        </header>
        <section>
          <p>
            Create a culture where it's normal to question if meeting is needed
          </p>
          <p>
            Share guidelines for productive meetings (purpose, desired outcome, participants number etc.)
          </p>
        </section>
        <article>
          <header>
            <h4>Help employees to use alternatives</h4>
          </header>
          <section>
            <GTDTools/>
          </section>
        </article>
      </article>
    </template>
  </SplitLayout>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import SplitLayout from "../components/SplitLayout.vue";
import InlineDropdown from "@/components/InlineDropdown.vue";
import GTDTools from "@/components/GTDTools.vue";

enum SalaryPeriod {
  HOUR = "hour",
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
  YEAR = "year"
}

enum SupportedCurrency {
  EUR = "€",
  GBP = "£",
  USD = "$",
  NOK = "kr",
  CHF = "CHF",
  RUB = "₽",
  JPY = "¥",
  CNY = "¥ /元"
}

enum MeetingFrequency {
  ONE_TIME = "one-time",
  DAILY = "daily",
  WEEKLY = "weekly"
}

@Component({
  components: {InlineDropdown, SplitLayout, GTDTools}
})
export default class BusinessImpact extends Vue {
  private readonly Currencies = SupportedCurrency
  private readonly MeetingFrequency = MeetingFrequency
  private readonly SalaryPeriods = Object.values(SalaryPeriod)

  salaryCurrency: SupportedCurrency = SupportedCurrency.EUR

  salaryAmount = 50

  salaryPeriod: SalaryPeriod = SalaryPeriod.HOUR

  meetingFrequency: MeetingFrequency = MeetingFrequency.WEEKLY

  meetingHours = 1

  meetingParticipants = 6

  public get meetingCost() {
    // calculations assume 8 hours a day, 5 days a week, 4 weeks a month, 12 month a year
    let hourlyRate = this.salaryAmount
    if (this.salaryPeriod === SalaryPeriod.DAY) hourlyRate /= 8
    else if (this.salaryPeriod === SalaryPeriod.WEEK) hourlyRate /= 8 * 5
    else if (this.salaryPeriod === SalaryPeriod.MONTH) hourlyRate /= 8 * 5 * 4
    else if (this.salaryPeriod === SalaryPeriod.YEAR) hourlyRate /= 8 * 5 * 4 * 12

    let meetingsPerMonth = 1
    if (this.meetingFrequency === MeetingFrequency.WEEKLY) meetingsPerMonth = 4
    if (this.meetingFrequency === MeetingFrequency.DAILY) meetingsPerMonth = 5 * 4

    return Math.round(hourlyRate * this.meetingHours * this.meetingParticipants * meetingsPerMonth)
  }

  public get salaryCaption() {
    return `${this.salaryCurrency}${this.salaryAmount}/${this.salaryPeriod}`
  }

  public get meetingLengthCaption() {
    const hourLabel = this.meetingHours === 1 ? 'hour' : 'hours'
    return `${this.meetingHours} ${hourLabel}`
  }
}
</script>

<style lang="scss">

#hours-adjustment {
  width: 4em;
}

input[type="number"] {
  text-align: right;
}

.asterisk {
  font-size: 0.6em;
  color: lightgrey;
}

.cost-breakdown {
  font-size: 0.8rem;
  color: lightgrey;
}
</style>