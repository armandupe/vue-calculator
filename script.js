new Vue({
    el: '#app',
    data: {
        inputs: [
            {value: '1'},
            {value: '2'},
            {value: '3'},
            {value: '+'},
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
