new Vue({
    el: '#app',
    data: {
        inputsFirstRow: [
            {key: '1'},
            {key: '2'},
            {key: '3'},
            {key: '+'}
        ],
        inputsSecondRow: [
            {key: '4'},
            {key: '5'},
            {key: '6'},
            {key: '-'}
        ],
        inputsThirdRow: [
            {key: '7'},
            {key: '8'},
            {key: '9'},
            {key: '*'}
        ],
        inputsFourthRow: [
            {key: '/'},
            {key: '0'},
            {key: '.'}
        ],
    },
    methods: {
        clearScreen() {
            document.getElementById("result").value = "";
        },
        inputHandler(value) {
            document.getElementById("result").value += value;
        },
        result() {
            result.value = eval(result.value);
        },
        switchTheme() {
            const darkMode = document.getElementById("dark-mode");
            const theme = document.getElementById("theme");
            if (theme.getAttribute("href") == "light.css") {
              theme.href = "dark.css";
              darkMode.innerHTML = "Light Mode ☀";
            } else {
              theme.href = "light.css";
              darkMode.innerHTML = "Dark Mode 🌙";
            }
        }
    }
})
