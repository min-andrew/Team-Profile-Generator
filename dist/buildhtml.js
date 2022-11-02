function buildhtml(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
      <header id="header">
        <h1>My Team</h1>
      </header>
      <main id="team">
        <ul id="cards">
          <li id="card">
            <div id="card-header">
              <h2>${data.name}</h2>
              <h3>Position</h3>
            </div>
            <div id="card-body">
              <div id="id">${data.title}</div>
              <div id="email">${data.title}</div>
              <div id="different">Office</div>
            </div>
          </li>
        </ul>
      </main>
    </body>
  </html>
  `
};

module.exports = buildhtml;