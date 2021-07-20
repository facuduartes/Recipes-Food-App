import { useSelector } from "react-redux";


export const GetRecipesOrder = (order, array) => {

	const recipes = [...array];

	
	


	switch (order) {
		case 'asc_name':
			return recipes.sort((a, b) => {
				if (a.title > b.title) {
					return 1;
				} else {
					return -1;
				}
			});
		case 'desc_name':
			return recipes.sort((a, b) => {
				if (a.title < b.title) {
					return 1;
				} else {
					return -1;
				}
			});
		case "worst":
			return recipes.sort((a, b) => {
				if (a.likes > b.likes) {
					return 1;
				} else {
					return -1;
				}
			
			});

			case "better":
				return recipes.sort((a, b) => {
					if (a.likes < b.likes) {
						return 1;
					} else {
						return -1;
					}
				
				});
				
		default:
			return recipes;
	}

}

export default GetRecipesOrder;