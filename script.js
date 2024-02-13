const responseData = {
	"services": [
		{
			"id": 1,
			"head": null,
			"name": "Проф.осмотр",
			"node": 0,
			"price": 100.0,
			"sorthead": 20
		},
		{
			"id": 2,
			"head": null,
			"name": "Хирургия",
			"node": 1,
			"price": 0.0,
			"sorthead": 10
		},
		{
			"id": 3,
			"head": 2,
			"name": "Удаление зубов",
			"node": 1,
			"price": 0.0,
			"sorthead": 10
		},
		{
			"id": 4,
			"head": 3,
			"name": "Удаление зуба",
			"node": 0,
			"price": 800.0,
			"sorthead": 10
		},
		{
			"id": 5,
			"head": 3,
			"name": "Удаление 8ого зуба",
			"node": 0,
			"price": 1000.0,
			"sorthead": 30
		},
		{
			"id": 6,
			"head": 3,
			"name": "Удаление осколка зуба",
			"node": 0,
			"price": 2000.0,
			"sorthead": 20
		},
		{
			"id": 7,
			"head": 2,
			"name": "Хирургические вмешательство",
			"node": 0,
			"price": 200.0,
			"sorthead": 10
		},
		{
			"id": 8,
			"head": 2,
			"name": "Имплантация зубов",
			"node": 1,
			"price": 0.0,
			"sorthead": 20
		},
		{
			"id": 9,
			"head": 8,
			"name": "Коронка",
			"node": 0,
			"price": 3000.0,
			"sorthead": 10
		},
		{
			"id": 10,
			"head": 8,
			"name": "Слепок челюсти",
			"node": 0,
			"price": 500.0,
			"sorthead": 20
		}
	]
};

function buildTree(data) {
	const treeBody = document.getElementById('price-list-body');
	treeBody.innerHTML = '';

	data.services.sort((a, b) => a.sorthead - b.sorthead);

	data.services.forEach(service => {
		const row = document.createElement('tr');
		row.innerHTML = `
                <td>${service.id}</td>
                <td class="${service.head ? 'indent' : ''}">${service.name}</td>
                <td>${service.price}</td>
            `;
		treeBody.appendChild(row);
	});
}

buildTree(responseData);