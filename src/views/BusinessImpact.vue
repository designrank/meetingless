<template>
  <SplitLayout>
    <template slot="dark-side">
      <article>
        <section>
          <p>
            With
            <InlineDropdown :caption="salaryCaption">
              <div class="form-row">
                <select class="mx-1 form-control col" v-model="salaryCurrency">
                  <option v-for="(symbol, code) in Currencies" :key="code" :value="symbol">
                    {{ code }} - {{ symbol }}
                  </option>
                </select>
                <input class="mx-1 form-control col" type="number" v-model="salaryAmount"/>
                <select class="mx-1 form-control col" v-model="salaryPeriod">
                  <option v-for="(period, index) in SalaryPeriods" :key="index" :value="period">{{ period }}</option>
                </select>
              </div>
            </InlineDropdown>
            salary
          </p>
          <p>
            A
            <InlineDropdown :caption="meetingFrequency">
                <select class="mx-1 form-control" v-model="meetingFrequency">
                  <option v-for="(frequency, code) in MeetingFrequency" :key="code" :value="frequency">
                    {{ frequency }}
                  </option>
                </select>
            </InlineDropdown>
            meeting of
            <InlineDropdown :caption="meetingLengthCaption">
              <div class="form-row">
                <input id="hours-adjustment" type="number" class="mx-1 form-control col" v-model="meetingHours"/>
                <label for="hours-adjustment"> hours</label>
              </div>
            </InlineDropdown>
            with
            <InlineDropdown :caption="meetingParticipants">
                <input type="number" class="mx-1 form-control col" v-model="meetingParticipants"/>
            </InlineDropdown>
            participants
          </p>
          <p>
            Costs
          </p>
          <h3>
            {{ salaryCurrency }}{{ meetingCost }}/month
          </h3>
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

  salaryPeriod: SalaryPeriod = SalaryPeriod.MONTH

  meetingFrequency: MeetingFrequency = MeetingFrequency.WEEKLY

  meetingHours = 1

  meetingParticipants = 6

  public get meetingCost() {
    return this.salaryAmount * this.meetingParticipants
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