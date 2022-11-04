const pitches = {
	"_embedded": {
		"items": [
			{
				"createdAt": "2022-11-04T15:46:12+07:00",
				"name": "Pitch đỏ",
				"status": "HOT",
				"importPrice": 10000,
				"unit": "cái",
				"image": require("assets/item_img/red_pitch.png"),
				"quantity": 10,
				"note": null,
				"itemCategory": "PITCH",
				"resourceId": 1,
				"_links": {
					"self": {
						"href": "http://localhost:8080/api/items/1"
					},
					"item": {
						"href": "http://localhost:8080/api/items/1"
					},
					"supplier": {
						"href": "http://localhost:8080/api/items/1/supplier"
					}
				}
			},
			{
				"createdAt": "2022-11-04T15:47:33+07:00",
				"name": "Pitch xanh lá",
				"status": "AVAILABLE",
				"importPrice": 10000,
				"unit": "cái",
				"image": require("assets/item_img/green_pitch.png"),
				"quantity": 10,
				"note": null,
				"itemCategory": "PITCH",
				"resourceId": 2,
				"_links": {
					"self": {
						"href": "http://localhost:8080/api/items/2"
					},
					"item": {
						"href": "http://localhost:8080/api/items/2"
					},
					"supplier": {
						"href": "http://localhost:8080/api/items/2/supplier"
					}
				}
			},
			{
				"createdAt": "2022-11-04T15:47:51+07:00",
				"name": "Pitch xanh dương",
				"status": "AVAILABLE",
				"importPrice": 12000,
				"unit": "cái",
				"image": require("assets/item_img/blue_pitch.png"),
				"quantity": 10,
				"note": null,
				"itemCategory": "PITCH",
				"resourceId": 3,
				"_links": {
					"self": {
						"href": "http://localhost:8080/api/items/3"
					},
					"item": {
						"href": "http://localhost:8080/api/items/3"
					},
					"supplier": {
						"href": "http://localhost:8080/api/items/3/supplier"
					}
				}
			},
			
		]
	},
	"_links": {
		"first": {
			"href": "http://localhost:8080/api/items?page=0&size=5"
		},
		"self": {
			"href": "http://localhost:8080/api/items"
		},
		"next": {
			"href": "http://localhost:8080/api/items?page=1&size=5"
		},
		"last": {
			"href": "http://localhost:8080/api/items?page=1&size=5"
		},
		"profile": {
			"href": "http://localhost:8080/api/profile/items"
		},
		"search": {
			"href": "http://localhost:8080/api/items/search"
		}
	},
	"page": {
		"size": 5,
		"totalElements": 7,
		"totalPages": 2,
		"number": 0
	}
}

export default pitches