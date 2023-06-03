export default {
    view: async () => {
        return `
        <ul class="hiddenNavigation">
        </ul> 
   
`
    },
    after: () => {
        console.log("Component navigation mounted");
    }
};

