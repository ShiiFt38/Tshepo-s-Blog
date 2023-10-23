//importing luxon filter for custom dates
//should be imported prior the 'module exports'
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    
//Pass through from src folder to public folder
eleventyConfig.addPassthroughCopy('./src/style.css');
eleventyConfig.addPassthroughCopy('./src/assets');



eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
});

    return{
        dir: {
            input: "src",
            output: "public"
        }
    }
}