var axios = require('axios')

var desktimeMessage = async () => {
    var host = "https://desktime.com/api/v2/json/employee/basic?apiKey=55b1ccf58bd0bafc7d4cc26ddc4be2c2&id=260409&date=2020-10-23";
    var resp = await axios.get(host)
	// console.log(resp.data)

	var data = {
		"text": ":clock1: DeskTime Update",
		"blocks": [
			{
				"type": "section",
				"block_id": "sectionTitle",
				"fields": [
					{
						"type": "mrkdwn",
						"text": "\n\n" + ":clock1: DeskTime Update"
					}
				]
			},
			{
				"type": "section",
				"block_id": "section789",
				"fields": [
					{
						"type": "mrkdwn",
						"text": `*Status*					 		: ${resp.data.isOnline ? ":heavy_check_mark:" : ":x:"}` + '\n' +
								`*At Work Time*				: ${parseInt((resp.data.atWorkTime / 60) / 60)}:${parseInt((resp.data.atWorkTime / 60) / 60)}:${parseInt((resp.data.atWorkTime % 60))}` + '\n' +
								`*Productive Time*			: ${parseInt((resp.data.productiveTime / 60) / 60)}:${parseInt((resp.data.productiveTime / 60) / 60)}:${parseInt((resp.data.productiveTime % 60))}`
					}
				]
			}
		]
	}

    return data;

	// var host = "https://hooks.slack.com/services/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"

	// axios.post(host, data).then(resp => console.log)

}

module.exports = desktimeMessage;