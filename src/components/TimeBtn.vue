<template>
    <div class="time-btn-wrapper">
        <div class="icon-wrapper">
            <!-- Icon -->
            <div class="time-btn" id="timeBtn" @click="moonIconClickHandler()">
                <svg id="timeMoonIcon" class="time-btn-img" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="var(--gradient-primary)" />
                            <stop offset="100%" stop-color="var(--gradient-secondary)"/>
                        </linearGradient>
                    </defs>
                    <path d="M17.4372 7.51482C17.6235 7.50498 17.8111 7.5 17.9999 7.5C23.7989 7.5 28.4999 12.201 28.4999 18C28.4999 23.799 23.7989 28.5 17.9999 28.5C16.0096 28.5 14.1486 27.9462 12.5627 26.9844C18.1 26.6919 22.4999 22.1094 22.4999 16.4992C22.4999 12.6905 20.4721 9.35546 17.4372 7.51482Z" 
                        fill="white"/>
                    <path d="M8.09999 15.3L8.1 15.3C8.25206 15.7562 8.32809 15.9843 8.40414 16.0838C8.70432 16.4765 9.29568 16.4765 9.59586 16.0838C9.67191 15.9843 9.74794 15.7562 9.9 15.3L9.90001 15.3C10.0227 14.932 10.084 14.748 10.1633 14.5815C10.4594 13.9601 10.9601 13.4594 11.5815 13.1633C11.748 13.084 11.932 13.0227 12.3 12.9L12.3 12.9C12.7562 12.7479 12.9843 12.6719 13.0838 12.5959C13.4765 12.2957 13.4765 11.7043 13.0838 11.4041C12.9843 11.3281 12.7562 11.2521 12.3 11.1L12.3 11.1C11.932 10.9773 11.748 10.916 11.5815 10.8367C10.9601 10.5406 10.4594 10.0399 10.1633 9.41852C10.084 9.25198 10.0227 9.06799 9.9 8.70001L9.9 8.7C9.74794 8.24382 9.67191 8.01574 9.59586 7.91625C9.29568 7.52353 8.70432 7.52353 8.40414 7.91625C8.32809 8.01574 8.25206 8.24382 8.1 8.7L8.1 8.70001C7.97734 9.06799 7.91601 9.25198 7.83667 9.41852C7.54064 10.0399 7.03993 10.5406 6.41852 10.8367C6.25198 10.916 6.06799 10.9773 5.70001 11.1L5.7 11.1C5.24382 11.2521 5.01574 11.3281 4.91625 11.4041C4.52353 11.7043 4.52353 12.2957 4.91625 12.5959C5.01574 12.6719 5.24382 12.7479 5.7 12.9L5.70001 12.9C6.06799 13.0227 6.25198 13.084 6.41852 13.1633C7.03993 13.4594 7.54064 13.9601 7.83667 14.5815C7.91601 14.748 7.97734 14.932 8.09999 15.3Z"
                        fill="white"/>
                </svg>
                
            </div>

            <!-- Time multipliers (speed) -->
            <div id="timeMultipliers">
                <div class="multiplier" @click="speedupTime(0.5)" data-multiplier-value="0.5"> <p>0.5</p> <span> X </span> </div>
                <div class="multiplier" @click="speedupTime(1)" data-multiplier-value="1"> <p>1</p> <span> X </span> </div>
                <div class="multiplier" @click="speedupTime(25)" data-multiplier-value="25"> <p>25</p> <span> X </span> </div>
                <div class="multiplier" @click="speedupTime(50)" data-multiplier-value="50"> <p>50</p> <span> X </span> </div>
                <div class="multiplier" @click="speedupTime(100)" data-multiplier-value="100"> <p>100</p> <span> X </span> </div>
                <div class="multiplier" @click="speedupTime(250)" data-multiplier-value="250"> <p>250</p> <span> X </span> </div>
                <div class="multiplier" @click="speedupTime(500)" data-multiplier-value="500"> <p>500</p> <span> X </span> </div>
            </div>
        </div>

        <!-- Inputs -->
        <div class="time-input" id="timeInput" @click="openTimePicker()">
            <input type="number" id="hours" min="0" max="12" class="hours-input" v-model="timeHours">
            <span class="time-divider"> : </span>
            <input type="number" id="minutes" min="0" max="59" class="minutes-input" v-model="timeMinutes">

        </div>

        <!-- Values for inputs -->
        <div id="timeValues" class="pos-relative">
            <div class="values-up d-flex">
                <ul class="left" @scroll="highlightVisibleTimeValues()">
                    <li class="time-value" v-for="val in timeValueOptions_upLeft" :key="val" @click="timeInputHandler(true, val)"> {{ val }} </li>
                </ul>
                <ul class="right" @scroll="highlightVisibleTimeValues()">
                    <li class="time-value" v-for="val in timeValueOptions_upRight" :key="val" @click="timeInputHandler(false, val)"> {{ val }} </li>
                </ul>

                <div class="arrow-controls d-flex flex-column">
                    <IconChevronUp class="control-icon up" @click="timeInputHandler(false, timeMinutes-1)" />
                    <IconChevronDown class="control-icon down" @click="timeInputHandler(false, timeMinutes+1)" />
                </div>
            </div>

            <div class="values-down d-flex">
                <ul class="left" @scroll="highlightVisibleTimeValues()">
                    <li class="time-value" v-for="val in timeValueOptions_downLeft" :key="val" @click="timeInputHandler(true, val)"> {{ val }} </li>
                </ul>
                <ul class="right" @scroll="highlightVisibleTimeValues()">
                    <li class="time-value" v-for="val in timeValueOptions_downRight" :key="val" @click="timeInputHandler(false, val)"> {{ val }} </li>
                </ul>

                <div class="arrow-controls d-flex flex-column">
                    <IconChevronUp class="control-icon up" @click="timeInputHandler(true, timeHours-1)" />
                    <IconChevronDown class="control-icon down" @click="timeInputHandler(true, timeHours+1)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { IconChevronUp, IconChevronDown } from '@iconify-prerendered/vue-mdi';

import TimeBtn from '../assets/js/time';

export default {
    name: 'TimeBtn',

    inject: ['emitter'],
    emits: [],

    props: {

    },

    components: {
        IconChevronUp, IconChevronDown
    },

    data() {
        return {
            startDate: new Date(),
            addToStartDate: false,
            multiplier: 1,

            timeHours: null,
            timeMinutes: null,
            previousMinute: null,

            timeValueOptions_upLeft: [],
            timeValueOptions_upRight: [],
            timeValueOptions_downLeft: [],
            timeValueOptions_downRight: [],

            timeBtnObj: null
        }
    },

    methods: {
        ...mapActions(
            {

            }
        ),

        timeInputHandler(isHours, value) {
            this.$nextTick(() => {
                this.addToStartDate = true;
    
                let customHours = parseInt(this.timeHours);
                let customMinutes = parseInt(this.timeMinutes);
                if (value || value === 0) {
                    if (value < 0) {
                        if (isHours) value = 23;
                        else value = 59;
                    } else {
                        if (isHours && value > 23) value = 0;
                        else if (!isHours && value > 59) value = 0;
                    }
                    if (isHours) customHours = this.timeHours = this.checkTime(parseInt(value));
                    else customMinutes = this.timeMinutes = this.checkTime(parseInt(value));
                }
                console.log("?", isHours, value, customHours, customMinutes);
                
                this.startDate.setHours(customHours, customMinutes);
                this.generateTimeValuesOptions();
                this.$nextTick(() => this.highlightVisibleTimeValues());

                this.timeBtnObj.updateTime(customHours, customMinutes);
                this.timeBtnObj.updateTimeMark();
            });
        },

        moonIconClickHandler() {
            if (timeInput.classList.contains("shown")) {
                this.hideTime();
                this.viewMultipliers();
            } else this.viewTime();
        },

        viewMultipliers() {
            timeMultipliers.classList.add("shown");
            this.highlightSelectedMultiplier();
        },

        hideMultipliers(event) {
            const timeBtnWrapper = document.querySelector(".time-btn-wrapper");

            if (!event || event && !timeBtnWrapper.contains(event.target) && !timeInput.classList.contains("shown")) {
                if (event) timeInput.classList.remove("shown");
                timeMultipliers.classList.remove("shown");
            }
        },

        viewTime() { timeInput.classList.toggle("shown"); },
        hideTime(event) {
            const timeBtnWrapper = document.querySelector(".time-btn-wrapper");

            if (!event || !timeBtnWrapper.contains(event.target) && !timeValues.contains(event.target) && 
                !event.target.classList.contains("time-value")) 
            {
                if (event) timeInput.classList.remove("shown");
                const timeInputs = timeInput.querySelectorAll("input");
                timeInputs.forEach(ti => ti.classList.remove("highlighted"));
                timeValues.classList.remove("shown");
            }
        },

        checkTime(i) {
            if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
            return i;
        },

        minutesIncreased() {
            const currentMinute = this.startDate.getMinutes();

            if (currentMinute != this.previousMinute) {
                this.generateTimeValuesOptions();
                this.previousMinute = currentMinute;
                return true;
            }
        },

        startTime() {
            const secondsToAdd = this.multiplier <= 100 ? 1 : Math.round(1 * (this.multiplier/75));
            this.previousMinute = this.startDate.getMinutes();

            if (this.addToStartDate) {
                this.startDate.setSeconds(this.startDate.getSeconds()+secondsToAdd);
                const seconds = this.startDate.getSeconds();

                if (seconds == 0 || this.minutesIncreased()) {
                    this.timeMinutes++;
                    if (this.timeBtnObj) this.timeBtnObj.timeMarkHandler();
                }

                this.startDate.setHours(this.timeHours);
                this.startDate.setMinutes(this.timeMinutes);

            } else {
                this.startDate.setSeconds(this.startDate.getSeconds()+secondsToAdd);
                const seconds = this.startDate.getSeconds();

                if ((seconds == 0 || this.minutesIncreased()) && this.timeBtnObj) this.timeBtnObj.timeMarkHandler();
            }

            let h = this.startDate.getHours();
            let m = this.startDate.getMinutes();
            h = this.checkTime(h);
            m = this.checkTime(m);

            this.timeHours = h;
            this.timeMinutes = m;
            if (this.timeBtnObj) this.timeBtnObj.updateTime(h, m);

            setTimeout(this.startTime, Math.round(1000/this.multiplier));
        },

        speedupTime(x) {
            this.multiplier = x;
            this.highlightSelectedMultiplier();
        },

        openTimePicker() {
            this.hideMultipliers();
            const timeInputs = timeInput.querySelectorAll("input");
            timeInputs.forEach(ti => ti.classList.add("highlighted"));

            timeValues.classList.add("shown");
            this.generateTimeValuesOptions();
            this.$nextTick(() => this.highlightVisibleTimeValues()); 
        },

        generateTimeValuesOptions() {
            this.timeValueOptions_downLeft = [];
            this.timeValueOptions_downRight = [];
            this.timeValueOptions_upLeft = [];
            this.timeValueOptions_upRight = [];

            for (let i = 0; i < this.timeHours; i++) { this.timeValueOptions_upLeft.push(this.checkTime(i)) }
            for (let i = 0; i < this.timeMinutes; i++) { this.timeValueOptions_upRight.push(this.checkTime(i)) }
            for (let i = (+this.timeHours)+1; i <= 23; i++) { this.timeValueOptions_downLeft.push(this.checkTime(i)) }
            for (let i = (+this.timeMinutes)+1; i <= 59; i++) { this.timeValueOptions_downRight.push(this.checkTime(i)) }
        },

        isElementVisible(element, container) {
            const containerRect = container.getBoundingClientRect();
            const elementRect = element.getBoundingClientRect();

            return (
                elementRect.bottom > containerRect.top &&
                elementRect.top < containerRect.bottom &&
                elementRect.left < containerRect.right &&
                elementRect.right > containerRect.left
            );
        },

        updateVisibleClasses(container) {
            if (!container) return;
            const items = container.querySelectorAll('.time-value');
            const visibleItems = []; 
            let lastVisiblePos = 0;

            for (let i = 0; i < items.length; i++) {
                if (this.isElementVisible(items[i], container.parentNode)) {
                    visibleItems.push(items[i]);
                    lastVisiblePos = i;
                }
            }
            if (visibleItems.length > 3) {
                if (lastVisiblePos == items.length-1) visibleItems.shift();
                if (lastVisiblePos == 0) visibleItems.pop();
            }

            items.forEach(item => {
                item.classList.remove('time-value-1st', 'time-value-2nd', 'time-value-3rd');
            });

            if (visibleItems.length > 0) visibleItems[0].classList.add('time-value-1st'); // First from bottom
            if (visibleItems.length > 1) visibleItems[1].classList.add('time-value-2nd'); // Second from bottom
            if (visibleItems.length > 2) visibleItems[2].classList.add('time-value-3rd'); // Third from bottom
        },

        highlightVisibleTimeValues() {
            const valuesUp = document.querySelector('.values-up');
            const valuesDown = document.querySelector('.values-down');
            const upLeft = valuesUp.querySelector(".left");
            const upRight = valuesUp.querySelector(".right");
            const downLeft = valuesDown.querySelector(".left");
            const downRight = valuesDown.querySelector(".right");

            this.updateVisibleClasses(upLeft);
            this.updateVisibleClasses(upRight);
            this.updateVisibleClasses(downLeft);
            this.updateVisibleClasses(downRight);
        },

        setupMultiplier() {
            let multiplier = localStorage.getItem("timeMultiplier");
            if (!multiplier) this.multiplier = 1;
            else this.multiplier = +multiplier;
        },

        highlightSelectedMultiplier() {
            const multipliers = document.querySelectorAll(".multiplier");
            multipliers.forEach(mp => mp.classList.remove("selected"));

            localStorage.setItem("timeMultiplier", this.multiplier);
            const multiplierEl = document.querySelector(`[data-multiplier-value='${this.multiplier}']`);
            console.log("huh", this.multiplier, multiplierEl, document.querySelectorAll(".multiplier"));
            if (multiplierEl) {
                multiplierEl.classList.add("selected");
            }
        }
    },
    
    computed: {
        ...mapGetters(
            {

            }
        ),
    },

    created() {
        this.setupMultiplier();

        this.timeHours = this.checkTime(this.startDate.getHours());
        this.timeMinutes = this.checkTime(this.startDate.getMinutes());
        this.timeBtnObj = new TimeBtn(this.timeHours, this.timeMinutes);
        this.startTime();

        document.addEventListener("click", (event) => {
            this.hideTime(event);
            this.hideMultipliers(event);
        });
    },

    mounted() {

    }
}
</script>

<style scoped>
.time-btn-wrapper {
    position: fixed;
    flex-direction: row-reverse !important;
    bottom: 32px;
    right: 32px;
    min-width: 48px;
    min-height: 48px;
    opacity: 0.15;
    z-index: 10;
    transition: all 0.2s ease-in-out;
}
.time-btn-wrapper:hover {
    opacity: 0.66;
    cursor: pointer;
}
.time-btn-wrapper:has(.time-input.shown) {
    opacity: 1;
    transform: translate(-40px, -40px);
}
.time-btn-wrapper:has(.time-input.shown) .time-btn-img path {
    fill: url(#gradient);
}

.time-btn {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    background: transparent;
    border: 1px solid white;
    font-size: 36px;
    z-index: 2;
}

.time-input {
    display: none;
    height: 48px;
    width: 136px;
    padding: 0 16px;
    /* padding-right: 64px; */
    border-radius: 24px;
    border: 1px solid white;
    background: var(--black);
    color: white;
    line-height: normal;
    align-items: center;
}
.time-input.shown {
    display: flex;
}
.time-input input {
    background: transparent;
    color: white;
    max-width: 28px;
    height: 48px;
    outline: none;
    border: none;
    text-align: center;
    font-size: 20px;
    padding: 0;
    transition: all 0.2s ease-in;
}

.time-input > * {
    z-index: 4;
}

.time-divider, .time-input input {
    font-weight: 700;
    font-style: italic;
}

.time-input .minutes-input {
    text-align: left;
}

.time-input input.highlighted {
    background: var(--gradient-angle);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    font-weight: 800;
}

/* Chrome, Safari, Edge, Opera */
.time-input input::-webkit-outer-spin-button,
.time-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
/* Firefox */
.time-input input[type=number] {
    appearance: textfield;
    -moz-appearance: textfield;
    pointer-events: none;
}

#timeValues {
    display: none;
    flex-direction: column;
    position: absolute;
    top: -64px;
    left: 0;
    width: 104px;
    height: 172px;
    z-index: 3;
    gap: 36px;
    justify-content: space-between;
    overflow: hidden;
    user-select: none;
}
#timeValues.shown {
    display: flex;
}

#timeValues .values-up, #timeValues .values-down {
    max-height: 70px;
    /* overflow-y: auto;
    overflow-x: visible;
    scrollbar-width: none;
    -ms-overflow-style: none; */
}
#timeValues .values-up {
    margin-left: 20px;
}
#timeValues .values-down {
    margin-right: 20px;
}

#timeValues .values-up::-webkit-scrollbar, #timeValues .values-down::-webkit-scrollbar {
    display: none;
}

.time-value {
    padding: 4px;
    text-align: center;
    line-height: 100%;
    font-weight: bold;
    transition: color 0.2s ease-in;
    background: var(--black);
    font-size: 12px;
}
.time-value:hover {
    color: rgba(255, 255, 255, 0.5);
}

.time-value-1st { font-size: 12px; }
.time-value-2nd { font-size: 14px; }
.time-value-3rd { font-size: 16px; }

.values-down .time-value-1st { font-size: 16px; }
.values-down .time-value-2nd { font-size: 14px; }
.values-down .time-value-3rd { font-size: 12px; }

.left, .right {
    background: var(--black);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: visible;
    scrollbar-width: none;
    -ms-overflow-style: none;
    min-width: 28px;
}
.values-up .left {
    border-top-left-radius: 8px;
}
.values-down .right {
    border-bottom-right-radius: 8px;
}

.values-up .control-icon.up {
    border-top-right-radius: 8px;
}
.values-up .control-icon.down {
    border-bottom-right-radius: 8px;
}

/* .values-up .arrow-controls {
    top: 0;
    right: 20px;
}
.values-down .arrow-controls {
    left: 0;
    bottom: 0;
}

.arrow-controls {
    position: absolute;
} */
.values-down .arrow-controls {
    order: -1;
    align-self: flex-end
}

.arrow-controls .control-icon {
    background: var(--black);
    color: var(--gradient-secondary);
    font-size: 20px;
    transition: all 0.2s ease-in;
}
.arrow-controls .control-icon:hover {
    /* transform: scale(1.2);
    font-size: 24px; */
    color: var(--white);
}

#timeMultipliers {
    display: none;
    position: absolute;
    width: 112px;
    height: 112px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--black);
    z-index: 3;
}
#timeMultipliers.shown {
    display: flex;
}

.icon-wrapper {
    height: 48px;
    width: 48px;
    position: absolute;
}

.icon-wrapper:has(#timeMultipliers.shown) .time-btn {
    z-index: 4;
}

.multiplier {
    width: 28px;
    height: 28px;
    border: 1px solid var(--white);
    color: var(--white);
    opacity: 0.33;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transition: all 0.2s ease-in;
    background: var(--black);
    user-select: none;
}
.multiplier:hover {
    opacity: 0.75;
}

.multiplier span {
    display: none;
    font-size: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 500;
    line-height: 100%;
    opacity: 0.15; /* 0.15 */
}

.multiplier p {
    font-weight: bold;
    z-index: 1;
}

.multiplier.selected {
    opacity: 1;
}

.multiplier.selected p {
    background: var(--gradient-angle);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    font-weight: 900;
}
.multiplier.selected span {
    display: flex;
}

#timeMultipliers > *:nth-child(1) {
    left: 8px;
    top: 8px;
    font-size: 12px;
}
#timeMultipliers > *:nth-child(2) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}
#timeMultipliers > *:nth-child(3) {
    top: 8px;
    right: 8px;
}
#timeMultipliers > *:nth-child(4) {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}
#timeMultipliers > *:nth-child(5) {
    bottom: 8px;
    right: 8px;
    font-size: 12px;
}
#timeMultipliers > *:nth-child(6) {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
}
#timeMultipliers > *:nth-child(7) {
    bottom: 8px;
    left: 8px;
    font-size: 12px;
}
</style>