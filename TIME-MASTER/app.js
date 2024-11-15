const timeDisplay = document.querySelector('.time-display');
        const dateDisplay = document.querySelector('.date-display');
        const formatButton = document.getElementById('format-btn');
        const themeSelect = document.getElementById('theme-select');
        const timezoneSelect = document.getElementById('timezone-select');
        const alarmInput = document.getElementById('alarm-input');
        const alarmButton = document.getElementById('alarm-btn');

        // Store our clock settings
        let clockSettings = {
            is24Hour: true,
            timezone: 'UTC',
            alarmTime: null
        };

        // Function to get current time in the selected timezone
        function getCurrentTime() {
            const options = { timeZone: clockSettings.timezone };
            return new Date().toLocaleString('en-US', options);
        }

        // Function to format time in 24-hour format
        function get24HourTime(date) {
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const seconds = date.getSeconds().toString().padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        }

        // Function to format time in 12-hour format
        function get12HourTime(date) {
            let hours = date.getHours();
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const seconds = date.getSeconds().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            
            // Convert 24-hour to 12-hour format
            hours = hours % 12;
            hours = hours ? hours : 12; // Convert 0 to 12
            
            return `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
        }

        // Function to format the date
        function getFormattedDate(date) {
            const options = { weekday: 'long', month: 'long', day: 'numeric' };
            return date.toLocaleDateString('en-US', options);
        }

        // Function to update the clock display
        function updateClock() {
            const now = new Date(getCurrentTime());
            
            // Update time display based on format setting
            timeDisplay.textContent = clockSettings.is24Hour ? 
                get24HourTime(now) : get12HourTime(now);
            
            // Update date display
            dateDisplay.textContent = getFormattedDate(now);
            
            // Check alarm
            if (clockSettings.alarmTime) {
                const currentHours = now.getHours();
                const currentMinutes = now.getMinutes();
                
                if (currentHours === clockSettings.alarmTime.hours && 
                    currentMinutes === clockSettings.alarmTime.minutes && 
                    now.getSeconds() === 0) {
                    alert('Alarm!');
                    clockSettings.alarmTime = null;
                    alarmInput.value = '';
                }
            }
        }

        // Event Listeners
        
        // Toggle between 12/24 hour format
        formatButton.addEventListener('click', function() {
            clockSettings.is24Hour = !clockSettings.is24Hour;
            updateClock();
        });

        // Change theme
        themeSelect.addEventListener('change', function(event) {
            document.body.className = `theme-${event.target.value}`;
        });

        // Change timezone
        timezoneSelect.addEventListener('change', function(event) {
            clockSettings.timezone = event.target.value;
            updateClock();
        });

        // Set alarm
        alarmButton.addEventListener('click', function() {
            if (alarmInput.value) {
                const [hours, minutes] = alarmInput.value.split(':');
                clockSettings.alarmTime = {
                    hours: parseInt(hours),
                    minutes: parseInt(minutes)
                };
                alert('Alarm set!');
            }
        });

        // Start the clock
        updateClock(); // Initial update
        setInterval(updateClock, 1000); // Update every second