
const {
  REACT_APP_API  
  } = process.env;
export const RECIPE_URL=REACT_APP_API+"/recipes";

export const RECIPE_NAME=REACT_APP_API+'/recipes?name=';
export  const RECIPE_ID=REACT_APP_API+'recipes/';
export const DIET_URL=REACT_APP_API+'/types ';

export const GROUP_RECIPES=10;

export const FORMS=[

{label:'Title',name:'title'},
{label:'🍴Summary',name:'summary'},
{label:'⏰Ready in',name:'readyIn'},
{label:'❤️Likes',name:'likes'},
{label:'🚑Health',name:'health'},
{label:'💬Instructions',name:'instructions'},
];