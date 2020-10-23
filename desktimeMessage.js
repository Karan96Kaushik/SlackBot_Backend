var axios = require('axios')

var desktimeMessage = async () => {
	var host = process.env.desktime_api + (new Date()).toLocaleDateString().replace("/", "-");
	var resp = await axios.get(host)

	return {
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
								`*At Work Time*				: ${parseInt((resp.data.atWorkTime / 3600))}:${parseInt((resp.data.atWorkTime % 3600) / 60)}:${parseInt((resp.data.atWorkTime % 60))}` + '\n' +
								`*Productive Time*			: ${parseInt((resp.data.productiveTime / 3600))}:${parseInt((resp.data.productiveTime % 3600) / 60)}:${parseInt((resp.data.productiveTime % 60))}`
					}
				]
			}
		]
	}
}

module.exports = desktimeMessage;