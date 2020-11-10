module.exports = {
    HTML : function(title, list, description, control) {
      return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>WEBn - ${title}</title>
          <meta charset="utf-8" />
          <!-- <link rel="stylesheet" href="../HTML&CSS&JS/style.css" /> -->
          <!-- <script src="../HTML&CSS&JS/colors.js"></script> -->
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        </head>
      
        <body>
          <h1><a href="/">WEB</a></h1>
      
          <input type="button" value="Night" onclick="NightDayHandler(this);" />
      
          <div id="grid">
            ${list}
            ${control}
            <div id="contents">
              <h2>
                <a href="https://namu.wiki/w/${title}" target="_blank">${title}</a
                >
              </h2>
              <p>
                ${description}
              </p>
            </div>
          </div>
        </body>
      </html>  
      `;
    },
    List : function(files) {
      var list = "<ul>";
      files.forEach((value, index, array) => {
        list += `<li><a href="/?id=${value}">${value}</a></li>`;
      });
      list += "</ul>";
    
      return list;
    }
  }