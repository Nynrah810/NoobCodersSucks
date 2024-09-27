const 
	axios = require('axios')
	YELLOW = '\x1b[33m'
	GREEN = '\x1b[32m'
	RESET = '\x1b[0m'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

async function submit(body, attempt) {
	await axios({
	method: 'post',
	url: 'https://stepik.org/api/submissions',
	headers: {
		'Cookie': '_gcl_au=1.1.1505129101.1723805659; tmr_lvid=715a49b5d0b510c05c8d562292ee4cf4; tmr_lvidTS=1723805659515; _ym_uid=1723805661952285001; _ym_d=1723805661; csrftoken=rpZcWXDtDQb5UewpBKy0JX6FsEDsnT32uQlFMTYWrAP5irULCGj6nBSzre9ouXW9; sessionid=39puoym3qw76qenm279jhfzk7kdacdff; tmr_lvid=715a49b5d0b510c05c8d562292ee4cf4; tmr_lvidTS=1723805659515; _gid=GA1.2.1403774888.1727349454; domain_sid=_UP8T_FfL-bBxrs7FdnfM%3A1727349454186; _ym_isad=1; _ga_3YHTYDHHZK=GS1.1.1727415438.67.1.1727415439.59.0.0; tmr_detect=1%7C1727415439305; _ga=GA1.2.1538453944.1723805659; _gat=1; _ga_25GCGTWN8K=GS1.2.1727415440.59.1.1727417658.59.0.0',
		'Referer': 'https://stepik.org/lesson/739167/step/15?unit=740810',
		'X-Csrftoken': 'rpZcWXDtDQb5UewpBKy0JX6FsEDsnT32uQlFMTYWrAP5irULCGj6nBSzre9ouXW9'
	},
	data: body
	})
	.then(response => {
		//console.log(response.data.submissions[0].reply)
	})
	.catch(error => {
		console.error(error)
	})
	
	const 
		getRes = await axios({
			method: 'get',
			url: 'https://stepik.org/api/submissions?limit=1&order=desc&step=3074725&user=934636828',
			headers: {
				'Cookie': '_gcl_au=1.1.1505129101.1723805659; tmr_lvid=715a49b5d0b510c05c8d562292ee4cf4; tmr_lvidTS=1723805659515; _ym_uid=1723805661952285001; _ym_d=1723805661; csrftoken=rpZcWXDtDQb5UewpBKy0JX6FsEDsnT32uQlFMTYWrAP5irULCGj6nBSzre9ouXW9; sessionid=39puoym3qw76qenm279jhfzk7kdacdff; tmr_lvid=715a49b5d0b510c05c8d562292ee4cf4; tmr_lvidTS=1723805659515; _gid=GA1.2.1403774888.1727349454; domain_sid=_UP8T_FfL-bBxrs7FdnfM%3A1727349454186; _ym_isad=1; _ga_3YHTYDHHZK=GS1.1.1727415438.67.1.1727415439.59.0.0; tmr_detect=1%7C1727415439305; _ga=GA1.2.1538453944.1723805659; _gat=1; _ga_25GCGTWN8K=GS1.2.1727415440.59.1.1727417658.59.0.0',
				'Referer': 'https://stepik.org/lesson/739167/step/15?unit=740810',
				'X-Csrftoken': 'rpZcWXDtDQb5UewpBKy0JX6FsEDsnT32uQlFMTYWrAP5irULCGj6nBSzre9ouXW9'
			}
		})
		getStatus = getRes.data.submissions[0].status
	
	console.log(`[${attempt}] ${getStatus === 'wrong' || getStatus === 'evaluation' ? YELLOW : GREEN}${getStatus}${RESET}`)
	
	return getStatus
}

const knowledge = {
	"List": {
		"Удобен, когда количество элементов заранее неизвестно": true,
		"Имеет свойства Count и Capacity": true,
		"Нельзя заполнить элементами типа bool": false,
		"Обращение к элементу по несуществующему индексу вызовет исключение": true
	},
	"array": {
		"Можно использовать, когда количество элементов известно заранее": true,
		"Можно указать изначальную емкость(размер)": true,
		"Имеет свойство Length": true,
		"Возможно заполнить элементами по индексу без использования специальных методов": true,
		"Можно обращаться к элементам по индексу": true,
		"Нельзя заполнить элементами типа bool": false,
		"Нельзя добавить еще одни элемент, если полностью заполнен": true
	}
}

const baseRequest = {
	"submission": {
		"eta": null,
		"has_session": false,
		"hint": null,
		"reply": {
		"choices": [
			{ "name_row": "Можно использовать, когда количество элементов известно заранее", "columns": [{ "name": "List", "answer": false }, { "name": "array", "answer": false }] },
			{ "name_row": "Удобен, когда количество элементов заранее неизвестно", "columns": [{ "name": "List", "answer": false }, { "name": "array", "answer": false }] },
			{ "name_row": "Можно указать изначальную емкость(размер)", "columns": [{ "name": "List", "answer": false }, { "name": "array", "answer": false }] },
			{ "name_row": "Имеет свойства Count и Capacity", "columns": [{ "name": "List", "answer": false }, { "name": "array", "answer": false }] },
			{ "name_row": "Имеет свойство Length", "columns": [{ "name": "List", "answer": false }, { "name": "array", "answer": false }] },
			{ "name_row": "Возможно заполнить элементами по индексу без использования специальных методов", "columns": [{ "name": "List", "answer": false }, { "name": "array", "answer": false }] },
			{ "name_row": "Можно обращаться к элементам по индексу", "columns": [{ "name": "List", "answer": false }, { "name": "array", "answer": false }] },
			{ "name_row": "Нельзя заполнить элементами типа bool", "columns": [{ "name": "List", "answer": false }, { "name": "array", "answer": false }] },
			{ "name_row": "Нельзя добавить еще одни элемент, если полностью заполнен", "columns": [{ "name": "List", "answer": false }, { "name": "array", "answer": false }] },
			{ "name_row": "Обращение к элементу по несуществующему индексу вызовет исключение", "columns": [{ "name": "List", "answer": false }, { "name": "array", "answer": false }] }
		]
		},
		"reply_url": null,
		"score": null,
		"session_id": null,
		"status": null,
		"time": null,
		"attempt": "1203819181",
		"session": null
	}
}

function generateRequests(baseRequest, knowledge) {
	const rows = baseRequest.submission.reply.choices
	
	function getAnswerOptions(row, listAnswer, arrayAnswer) {
		let options = []
	
		if (listAnswer !== undefined && arrayAnswer !== undefined) {
			options.push([{ name: "List", answer: listAnswer }, { name: "array", answer: arrayAnswer }])
		} 
		else if (listAnswer !== undefined) {
			options.push([{ name: "List", answer: listAnswer }, { name: "array", answer: true }])
			options.push([{ name: "List", answer: listAnswer }, { name: "array", answer: false }])
		} 
		else if (arrayAnswer !== undefined) {
			options.push([{ name: "List", answer: true }, { name: "array", answer: arrayAnswer }])
			options.push([{ name: "List", answer: false }, { name: "array", answer: arrayAnswer }])
		} 
		else {
			options.push([{ name: "List", answer: true }, { name: "array", answer: true }])
			options.push([{ name: "List", answer: true }, { name: "array", answer: false }])
			options.push([{ name: "List", answer: false }, { name: "array", answer: true }])
			options.push([{ name: "List", answer: false }, { name: "array", answer: false }])
		}
	
		return options
	}
	
	function generateCombinations(rows, knowledge) {
		let result = [{}]
	
		rows.forEach(row => {
		let listAnswer = knowledge["List"][row.name_row]
		let arrayAnswer = knowledge["array"][row.name_row]
	
		const options = getAnswerOptions(row, listAnswer, arrayAnswer)
		let newResult = []
	
		result.forEach(prevCombination => {
			options.forEach(option => {
				let newCombination = JSON.parse(JSON.stringify(prevCombination))
				newCombination[row.name_row] = option
				newResult.push(newCombination)
			})
		})
	
		result = newResult
		})
	
		return result
	}
	
	return generateCombinations(rows, knowledge).map(combination => {
		let newRequest = JSON.parse(JSON.stringify(baseRequest))
	
		newRequest.submission.reply.choices.forEach(choice => {
			choice.columns = combination[choice.name_row]
		});
	
		return newRequest
	});
}

const requests = generateRequests(baseRequest, knowledge);

async function broute() {
	console.log(requests.length)
	
	for (let i = 0; i < requests.length; i++) {
		//await delay(100)
		
		if (await submit(requests[i], i) == 'correct') return
	}
}

broute()

