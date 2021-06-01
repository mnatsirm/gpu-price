import moment from "moment";

export const gpuPriceChartData = {
	type: "line",
	data: {
		labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
		datasets: [
			{
				label: "msi",
				data: [0, 0, 1, 2, 79, 82, 27, 14],
				backgroundColor: "rgba(54,73,93,.5)",
				borderColor: "#36495d",
				borderWidth: 3
			},
			{
				label: "gigabyte",
				data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
				backgroundColor: "rgba(71, 183,132,.5)",
				borderColor: "#47b784",
				borderWidth: 3
			}
		]
	},
	options: {
		responsive: true,
		lineTension: 1,
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						padding: 25
					}
				}
			]
		}
	}
};

/*
	TODO:
		1/ create function to get current date
		2/ create function to get price
		3/ create function to push to data every specific time
*/


function pushDate() {
	return moment().format('YYYY-MM-DD');
}

gpuPriceChartData.data.labels.push(pushDate())
gpuPriceChartData.data.datasets[0].data.push("420")
gpuPriceChartData.data.datasets[1].data.push("420")

export default gpuPriceChartData;