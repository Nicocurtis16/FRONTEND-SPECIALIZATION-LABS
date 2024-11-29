// Document element selections written in full
const timeDisplayElement = document.querySelector('.time-display');
const dateDisplayElement = document.querySelector('.date-display');
const formatButtonElement = document.getElementById('format-btn');
const themeSelectElement = document.getElementById('theme-select');
const timezoneSelectElement = document.getElementById('timezone-select');
const alarmInputElement = document.getElementById('alarm-input');
const alarmButtonElement = document.getElementById('alarm-btn');

// Clock settings object with full property names
const clockConfiguration = {
    isUsingTwentyFourHourFormat: true,
    selectedTimezone: 'UTC',
    configuredAlarmTime: null
};

// Function to retrieve current time in the selected timezone
function getCurrentTimeInTimezone() {
    const timezoneOptions = {
        timeZone: clockConfiguration.selectedTimezone
    };
    return new Date().toLocaleString('en-US', timezoneOptions);
}

// Function to format time in 24-hour format with full variable names
function formatTimeTwentyFourHour(dateObject) {
    const currentHours = dateObject.getHours();
    const currentMinutes = dateObject.getMinutes();
    const currentSeconds = dateObject.getSeconds();
    
    const formattedHours = currentHours.toString().padStart(2, '0');
    const formattedMinutes = currentMinutes.toString().padStart(2, '0');
    const formattedSeconds = currentSeconds.toString().padStart(2, '0');
    
    return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
}

// Function to format time in 12-hour format with full variable names
function formatTimeTwelveHour(dateObject) {
    let currentHours = dateObject.getHours();
    const currentMinutes = dateObject.getMinutes();
    const currentSeconds = dateObject.getSeconds();
    
    // Determine if it's AM or PM
    const periodIndicator = currentHours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    currentHours = currentHours % 12;
    // Handle midnight (0 hours)
    if (currentHours === 0) {
        currentHours = 12;
    }
    
    const formattedHours = currentHours.toString().padStart(2, '0');
    const formattedMinutes = currentMinutes.toString().padStart(2, '0');
    const formattedSeconds = currentSeconds.toString().padStart(2, '0');
    
    return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds + ' ' + periodIndicator;
}

// Function to format the date with full options
function formatDateLongForm(dateObject) {
    const dateFormatOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };
    return dateObject.toLocaleDateString('en-US', dateFormatOptions);
}

// Function to update the clock display with full syntax
function updateClockDisplay() {
    const currentDateTime = new Date(getCurrentTimeInTimezone());
    
    // Update time display based on format setting
    if (clockConfiguration.isUsingTwentyFourHourFormat) {
        timeDisplayElement.textContent = formatTimeTwentyFourHour(currentDateTime);
    } else {
        timeDisplayElement.textContent = formatTimeTwelveHour(currentDateTime);
    }
    
    // Update date display
    dateDisplayElement.textContent = formatDateLongForm(currentDateTime);
    
    // Check for alarm
    if (clockConfiguration.configuredAlarmTime !== null) {
        const currentHours = currentDateTime.getHours();
        const currentMinutes = currentDateTime.getMinutes();
        const currentSeconds = currentDateTime.getSeconds();
        
        const isAlarmHourMatch = currentHours === clockConfiguration.configuredAlarmTime.hours;
        const isAlarmMinuteMatch = currentMinutes === clockConfiguration.configuredAlarmTime.minutes;
        const isStartOfMinute = currentSeconds === 0;
        
        if (isAlarmHourMatch && isAlarmMinuteMatch && isStartOfMinute) {
            window.alert('Alarm!');
            clockConfiguration.configuredAlarmTime = null;
            alarmInputElement.value = '';
        }
    }
}

// Event Listeners with full function declarations

// Format button click handler
formatButtonElement.addEventListener('click', function handleFormatButtonClick() {
    clockConfiguration.isUsingTwentyFourHourFormat = !clockConfiguration.isUsingTwentyFourHourFormat;
    updateClockDisplay();
});

// Theme selection change handler
themeSelectElement.addEventListener('change', function handleThemeChange(eventObject) {
    const selectedTheme = eventObject.target.value;
    document.body.className = 'theme-' + selectedTheme;
});

// Timezone selection change handler
timezoneSelectElement.addEventListener('change', function handleTimezoneChange(eventObject) {
    clockConfiguration.selectedTimezone = eventObject.target.value;
    updateClockDisplay();
});

// Alarm button click handler
alarmButtonElement.addEventListener('click', function handleAlarmButtonClick() {
    const alarmInputValue = alarmInputElement.value;
    
    if (alarmInputValue) {
        const timeComponents = alarmInputValue.split(':');
        const alarmHours = parseInt(timeComponents[0], 10);
        const alarmMinutes = parseInt(timeComponents[1], 10);
        
        clockConfiguration.configuredAlarmTime = {
            hours: alarmHours,
            minutes: alarmMinutes
        };
        
        window.alert('Alarm set!');
    }
});

// Initialize clock
updateClockDisplay();

// Set up interval for updates with full function reference
const clockUpdateInterval = window.setInterval(function clockUpdateCallback() {
    updateClockDisplay();
}, 1000);