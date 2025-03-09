class TimeBtn {
    constructor(hours, minutes) {
        this.activeTimeMark = null;
        this.nextTimeMark = null;
        this.primaryColors = null;
        this.secondaryColors = null;
        this.currentGradientPos = null;
        this.timeDiff = null;

        this.hours = hours;
        this.minutes = minutes;
        this.time = `${hours}:${minutes}`;

        this.r = document.querySelector(":root");
        this.updateTimeMark();
    }

    updateTime(hours, minutes) {
        this.hours = hours;
        this.minutes = minutes;
        this.time = `${hours}:${minutes}`;
    }

    lerp(colors, value) {
        return [
            colors[0][0] + (colors[1][0] - colors[0][0]) * value, // R
            colors[0][1] + (colors[1][1] - colors[0][1]) * value, // G
            colors[0][2] + (colors[1][2] - colors[0][2]) * value  // B
        ];
    }
    
    // Pure red = #FF0000 => [1.0, 0, 0] // [R, G, B]
    hexColorToFloatColor(hex) {
        if (hex.includes("#")) hex = hex.substring(1, hex.length);
        return [
          parseInt(hex.substring(0,2), 16) / 255,
          parseInt(hex.substring(2,4), 16) / 255,
          parseInt(hex.substring(4,6), 16) / 255
        ];
    }
    
    floatColorToHexColor(floatColor) {
        let hex = "#";
        for (const float of floatColor) {
            const decimal = Math.floor(float*255);
    
            const first = Math.floor(decimal / 16).toString(16);
            const second = (decimal % 16).toString(16);
            hex += first+second;
        }
        return hex;
    }
    
    getGradient(color1, color2, timeDiffMinutes) {
        const gradient = [];
        const coef = 1;
    
        const gradientWidth = coef * timeDiffMinutes;
        for (let i = 1; i <= gradientWidth; i++) {
            const colors = [this.hexColorToFloatColor(color1), this.hexColorToFloatColor(color2)];
            const value = (1 / gradientWidth) * i;
    
            const hexColor = this.floatColorToHexColor(this.lerp(colors, value));
            gradient.push(hexColor);
        }
        return gradient;
    }
    
    getGradientCSSColor(colorType = "primary") {
        const rs = getComputedStyle(this.r);
        return rs.getPropertyValue(`--gradient-${colorType}`);
    }
    
    setGradientCSSColor(colorType = "primary", color) {
        this.r.style.setProperty(`--gradient-${colorType}`, color)
    }
    
    convertTimeToMinutes(timeString) {
        let [hours, minutes] = timeString.split(':').map(Number);
        if (hours == 0) hours = 24;
        return hours * 60 + minutes;
    }
    
    findTimeMarkByTime(currentTime) {
        const currentTimeInMinutes = this.convertTimeToMinutes(currentTime);
    
        for (let i=0; i < timeMarks.length; i++) {
            const [startHours, startMinutes] = timeMarks[i].time.split(':').map(Number);
            let endHours, endMinutes;
            if (!timeMarks[i+1]) {
                [endHours, endMinutes] = timeMarks[0].time.split(':').map(Number);
                endHours = 24;
            } else [endHours, endMinutes] = timeMarks[i+1].time.split(':').map(Number);
            
            
            const startTimeInMinutes = startHours * 60 + startMinutes;
            const endTimeInMinutes = endHours * 60 + endMinutes;
            // console.log(currentTimeInMinutes, 24*60+30);
    
            if (i == 0 && currentTimeInMinutes < startTimeInMinutes || currentTimeInMinutes > 24*60) {
                return timeMarks[timeMarks.length-1];
            }
            if (currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes < endTimeInMinutes) {
                return timeMarks[i];
            }
        }
        return null;
    }
    
    findNextTimeMark(currentTimeMark) {
        const prevIndex = timeMarks.findIndex(tMark => tMark.time == currentTimeMark.time);
        const nextIndex = prevIndex+1;
    
        return nextIndex >= timeMarks.length ? timeMarks[0] : timeMarks[nextIndex];
    }
    
    getTimeMarksTimeDiff(timeMark1, timeMark2) {
        const timeMark1Raw = timeMark1.time.split(":");
        const timeMark2Raw = timeMark2.time.split(":");
    
        const timeMark1Hours = +timeMark1Raw[0]; const timeMark1Minutes = +timeMark1Raw[1];
        const timeMark2Hours = +timeMark2Raw[0]; const timeMark2Minutes = +timeMark2Raw[1];
    
        let diffHours = (timeMark2Hours - timeMark1Hours) * 60;
        let diffMinutes = timeMark2Minutes - timeMark1Minutes;
        // console.log(timeMark1Hours, timeMark2Hours);
        // console.log(diffHours, diffMinutes);
    
        if (diffHours < 0) { // over next day
            diffHours = ((timeMark1Hours + timeMark2Hours) - timeMark1Hours) * 60;
            diffMinutes = timeMark1Minutes + timeMark2Minutes;
        }

        return Math.abs(diffHours+diffMinutes);
    }
    
    updateTimeMark() {
        // console.log(this.time);
        this.activeTimeMark = this.findTimeMarkByTime(this.time);
        // console.log("?????????", this.activeTimeMark);
        this.nextTimeMark = this.findNextTimeMark(this.activeTimeMark);
        // console.log("huh", this.activeTimeMark, this.nextTimeMark);
    
        this.timeDiff = this.getTimeMarksTimeDiff(this.activeTimeMark, this.nextTimeMark);
        // console.log("tDiff", this.timeDiff);
    
        this.primaryColors = this.getGradient(this.activeTimeMark.primaryColor, this.nextTimeMark.primaryColor, this.timeDiff);
        this.secondaryColors = this.getGradient(this.activeTimeMark.secondaryColor, this.nextTimeMark.secondaryColor, this.timeDiff);
    
        this.currentGradientPos = this.getCurrentGradientPosByTime();
        // console.log("boi", this.currentGradientPos);
        this.setGradientCSSColor("primary", this.primaryColors[this.currentGradientPos]);
        this.setGradientCSSColor("secondary", this.secondaryColors[this.currentGradientPos]);
    }
    
    getCurrentGradientPosByTime() {
        const currentTime = this.time;
        const elapsedMinutes = this.getTimeMarksTimeDiff(this.activeTimeMark, {time: currentTime})
        return elapsedMinutes;
    }
    
    timeMarkHandler() {
        // console.log("tmHandler");
        this.setGradientCSSColor("primary", this.primaryColors[this.currentGradientPos]);
        this.setGradientCSSColor("secondary", this.secondaryColors[this.currentGradientPos]);
    
        this.currentGradientPos++;
        if (this.currentGradientPos == this.timeDiff) {
            this.activeTimeMark = this.nextTimeMark;
            this.nextTimeMark = this.findNextTimeMark(this.activeTimeMark);
            this.currentGradientPos = 0;
            
            this.timeDiff = this.getTimeMarksTimeDiff(this.activeTimeMark, this.nextTimeMark);
    
            this.primaryColors = this.getGradient(this.activeTimeMark.primaryColor, this.nextTimeMark.primaryColor, this.timeDiff);
            this.secondaryColors = this.getGradient(this.activeTimeMark.secondaryColor, this.nextTimeMark.secondaryColor, this.timeDiff);
        }
    }
}

class TimeMark {
    constructor(name, time, primaryColor, secondaryColor, cloudPrimary = "#fff", cloudSecondary = "#d0d2d3") {
        this.name = name;
        this.time = time;
        this.primaryColor = primaryColor;
        this.secondaryColor = secondaryColor;

        this.cloudPrimary = cloudPrimary;
        this.cloudSecondary = cloudSecondary;
    }
}

// Zatiaľ len takto fixne časy, možno spraviť podľa lokácie a dát z nejakej weather API
const timeMarks = [
    // new TimeMark("MIDNIGHT",    "00:30", "#000000", "#000000"),
    new TimeMark("A_MIDNIGHT",  "02:00", "#4E4376", "#2B5876"), // rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)
    new TimeMark("BLUE_HOUR",   "04:00", "#005BEA", "#00C6FB"), 
    new TimeMark("RED_HOUR",    "06:30", "#FF0844", "#FFB199"),
    new TimeMark("SUNRISE",     "07:30", "#FA709A", "#FEE140"),
    new TimeMark("MORNING",     "09:30", "#C2E9FB", "#4589F9"),
    new TimeMark("DAY",         "12:00", "#4FACFE", "#00F2FE"),
    new TimeMark("GOLDEN_HOUR", "19:00", "#F9DE89", "#FDA085"),
    new TimeMark("SUNSET",      "20:00", "#FEE140", "#FA709A"),
    new TimeMark("PINK_SUNSET", "21:30", "#F68084", "#A6C0FE"),
    new TimeMark("B_BLUE_HOUR", "22:00", "#A1C4FD", "#C2E9FB"),
    new TimeMark("BLUE_HOUR_R", "23:30", "#00C6FB", "#005BEA"),
    // new TimeMark("MIDNIGHT_2",  "23:55", "#000000", "#000000"),
];

export default TimeBtn;