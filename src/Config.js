export var burgerStyle = {
    bmBurgerButton: {
      position: "absolute",
      width: "36px",
      height: "30px",
      left: "10px",
      top: "17px",
    },
    bmBurgerBars: {
      background: "white",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "35px",
      width: "35px",
    },
    bmCross: {
      background: "white",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      top: "0px",
      left: "0px"
    },
    bmMenu: {
      background: "#eba134",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "white",
      padding: "0.8em",
    },
    bmItem: { 
      display: "flex",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.0)",
    },
  };

 export function removeDuplicates(arr) {
              
    // Create an array of objects
   
      
    // Display the list of array objects
    console.log(arr);
      
    // Declare a new array
    let newArray = [];
      
    // Declare an empty object
    let uniqueObject = {};

    for (let i in arr) {
      
        // Extract the title
       let objTitle = arr[i]['id'];
      
        // Use the title as the index
        uniqueObject[objTitle] = arr[i];
    }
      
    // Loop to push unique object into array
    for (let i in uniqueObject) {
        newArray.push(uniqueObject[i]);
    }
      
    // Display the unique objects
    return newArray;
}

export const DATA_API="AIzaSyClVNYU52l43I_iQnR8pTUWpP5qDf89cto"