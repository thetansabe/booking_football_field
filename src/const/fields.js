const fields = [
  {
    id: '1',
    name: 'TDTU - Sân 5',
    location: '19 Nguyễn Hữu Thọ, Quận 7, HCM',
    price: 300000,
    image: require('assets/field_img/field5_1.png'),
    details: `~100 000k/30p san 5`,
    type: 5,
    groupId: 1
  },

  {
    id: '2',
    name: 'TDTU - Sân 7',
    location: '19 Nguyễn Hữu Thọ, Quận 7, HCM',
    price: 200000,
    image: require('assets/field_img/field7_1.png'),
    details: `~120 000k/30p san 7`,
    type: 7,
    groupId: 1
  },

  {
    id: '3',
    name: 'TDTU - Sân 11',
    location: '19 Nguyễn Hữu Thọ, Quận 7, HCM',
    price: 222000,
    image: require('assets/field_img/field11_1.jpg'),
    details: `~120 000k/30p san 7`,
    type: 7,
    groupId: 1
  }
];

// {
// 	"_embedded": {
// 		"footballFields": [
// 			{
// 				"createdAt": "2022-11-03T17:29:45+07:00",
// 				"name": "Field TDTU 2",
// 				"type": "FIELD_5",
// 				"image": "https://ibb.co/Y0bm0R6",
// 				"price": 150000.0,
// 				"resourceId": 1,
// 				"_links": {
// 					"self": {
// 						"href": "http://localhost:8080/api/football_fields/1"
// 					},
// 					"footballField": {
// 						"href": "http://localhost:8080/api/football_fields/1"
// 					},
// 					"fieldGroup": {
// 						"href": "http://localhost:8080/api/football_fields/1/fieldGroup"
// 					}
// 				}
// 			},
// 			{
// 				"createdAt": "2022-11-03T17:40:19+07:00",
// 				"name": "Field TDTU 1",
// 				"type": "FIELD_7",
// 				"image": "https://ibb.co/Y0bm0R6",
// 				"price": 250000.0,
// 				"resourceId": 2,
// 				"_links": {
// 					"self": {
// 						"href": "http://localhost:8080/api/football_fields/2"
// 					},
// 					"footballField": {
// 						"href": "http://localhost:8080/api/football_fields/2"
// 					},
// 					"fieldGroup": {
// 						"href": "http://localhost:8080/api/football_fields/2/fieldGroup"
// 					}
// 				}
// 			}
// 		]
// 	},
// 	"_links": {
// 		"self": {
// 			"href": "http://localhost:8080/api/football_fields"
// 		},
// 		"profile": {
// 			"href": "http://localhost:8080/api/profile/football_fields"
// 		}
// 	},
// 	"page": {
// 		"size": 5,
// 		"totalElements": 2,
// 		"totalPages": 1,
// 		"number": 0
// 	}
// }
export default fields;