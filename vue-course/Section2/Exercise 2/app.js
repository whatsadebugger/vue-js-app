new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        changeValue: function (event) {
            this.value = event.target.value;
        },
        showAlert: function () {
            alert('alerted!');
        }
    },
});