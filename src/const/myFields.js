const myFields = 
{
	"_embedded": {
		"footballFields": [
			{
				"createdAt": "2022-11-03T17:29:45+07:00",
				"name": "TDTU Sân 1",
				"type": "FIELD_5",
				"image": require('assets/field_img/field5_1.png'),
				"price": 150000.0,
				"resourceId": 1,
				"_links": {
					"self": {
						"href": "http://localhost:8080/api/football_fields/1"
					},
					"footballField": {
						"href": "http://localhost:8080/api/football_fields/1"
					},
					"fieldGroup": {
						"href": "http://localhost:8080/api/football_fields/1/fieldGroup"
					}
				}
			},
			{
				"createdAt": "2022-11-03T17:40:19+07:00",
				"name": "TDTU Sân 2",
				"type": "FIELD_7",
				"image": require('assets/field_img/field7_1.png'),
				"price": 200000.0,
				"resourceId": 2,
				"_links": {
					"self": {
						"href": "http://localhost:8080/api/football_fields/2"
					},
					"footballField": {
						"href": "http://localhost:8080/api/football_fields/2"
					},
					"fieldGroup": {
						"href": "http://localhost:8080/api/football_fields/2/fieldGroup"
					}
				}
			},
            {
				"createdAt": "2022-11-03T17:40:19+07:00",
				"name": "TDTU Sân 3",
				"type": "FIELD_11",
				"image": require('assets/field_img/field11_1.jpg'),
				"price": 270000.0,
				"resourceId": 3,
				"_links": {
					"self": {
						"href": "http://localhost:8080/api/football_fields/2"
					},
					"footballField": {
						"href": "http://localhost:8080/api/football_fields/2"
					},
					"fieldGroup": {
						"href": "http://localhost:8080/api/football_fields/2/fieldGroup"
					}
				}
			}
		]
	},
	"_links": {
		"self": {
			"href": "http://localhost:8080/api/football_fields"
		},
		"profile": {
			"href": "http://localhost:8080/api/profile/football_fields"
		}
	},
	"page": {
		"size": 5,
		"totalElements": 2,
		"totalPages": 1,
		"number": 0
	}
}

export default myFields