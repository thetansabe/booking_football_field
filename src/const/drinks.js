const drinks = {
	"_embedded": {
		"items": [
			{
				"createdAt": "2022-11-04T15:46:12+07:00",
				"name": "Coca cola",
				"status": "HOT",
				"importPrice": 10000,
				"unit": "chai",
				"image": require("assets/item_img/coke.png"),
				"quantity": 10,
				"note": null,
				"itemCategory": "DRINK",
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
				"name": "Pepsi",
				"status": "AVAILABLE",
				"importPrice": 10000,
				"unit": "lon",
				"image": require("assets/item_img/pepsi.png"),
				"quantity": 10,
				"note": null,
				"itemCategory": "DRINK",
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
				"name": "Red bull",
				"status": "AVAILABLE",
				"importPrice": 12000,
				"unit": "lon",
				"image": require("assets/item_img/red_bull.png"),
				"quantity": 10,
				"note": null,
				"itemCategory": "DRINK",
				"resourceId": 4,
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
			{
				"createdAt": "2022-11-04T15:48:03+07:00",
				"name": "Revive",
				"status": "HOT",
				"importPrice": 15000,
				"unit": "chai",
				"image": require("assets/item_img/revive.png"),
				"quantity": 10,
				"note": null,
				"itemCategory": "DRINK",
				"resourceId": 3,
				"_links": {
					"self": {
						"href": "http://localhost:8080/api/items/4"
					},
					"item": {
						"href": "http://localhost:8080/api/items/4"
					},
					"supplier": {
						"href": "http://localhost:8080/api/items/4/supplier"
					}
				}
			}
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

export default drinks