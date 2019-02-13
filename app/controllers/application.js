/*eslint-disable*/
import Controller from '@ember/controller';

export default Controller.extend({
    init() {
        this._super(...arguments)
    },

    chartData: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [ {
            label: "Preis-Vorhersage",
            backgroundColor: "rgba(54,162,235,0.2)",
            borderColor: "rgba(54,162,235,0.8)",
            data: [28, 48, 40, 19, 86, 27, 90, 32, 26, 49, 41, 5]
        }]
    }
});
