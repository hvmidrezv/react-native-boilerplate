module.exports = {
    // Placeholder used to rename and replace in files
    // package.json, index.json, android/, ios/
    placeholderName: "ProjectName",

    // Placeholder title that will be replaced in values.xml and Info.plist with title provided by the user.
    // We default this value to 'Hello App Display Name', which is default placeholder in react-native template.
    titlePlaceholder: 'ProjectTitle',

    // Directory with template
    templateDir: "./template",

    // Path to script, which will be executed after init
    postInitScript: "./script.js"

};
