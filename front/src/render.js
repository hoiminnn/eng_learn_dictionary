import { renderToString } from 'react-dom/server';

import { Hello } from '.';

const reactString = renderToString(<Hello />);

const html = `
<html>
    <div id="root">${reactString}</div>
    <script src="render_client.js"></script>
</html>
`
console.log(html)