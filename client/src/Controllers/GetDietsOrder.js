export const GetDietsOrder = (diet, array) => {


    if (diet !== 'all') {

        let recip = array.filter((c) => {

            if (c.DietTypes) {
                for (let i = 0; i < c.DietTypes.length; i++) {
                    if (c.DietTypes[i].name===diet) {
                        return true;
                    } 
                }


            }
        });
        return recip
    }
    return array;


};

export default GetDietsOrder;