const libFs = require('fs');
const libPath = require('path');
const ICON_BASE64 = `data:image/png;base64,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`;

function isMarkdown(url) {
    return /\.(md|markdown)($|\?)/.test(url);
}

module.exports = {
  configSchema: {
    auto: {
      type: 'boolean',
      default: true,
      description: 'auto jump to the markdown you are editing'
    },
  },

    assets: {
        test: isMarkdown,
        script: ['./assets/index.js'],
        style: ['./assets/index.css']
    },
    services: {
        // io.call('markdown.test).then(content=> content)
        async ['markdown.test'](param) {
            return 'markdown test';
        }
    },
    hooks: {
        async onRoute(ctx, next, { config }) {
            if (isMarkdown(ctx.path)) {
                ctx.set('Content-Type', 'text/html');
                ctx.status = 200;
                ctx.body = `
                    <html>
                        <head>
                            <title>${ctx.path.slice(1)} - Markdown Viewer</title>
                            <link rel="icon" type="image/png"  href="${ICON_BASE64}">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
                        </head>
                        <body><div class="markdown-body"></div></body>
                    </html>`;
            }
            await next();
        },
        async onCreate({ io, config, events }) {
            const root = config.get('$.root');
            events.on('file:change', (payload, ctrl)=>{
                if( isMarkdown( payload.path ) ){
                    ctrl.stop();
                    // only transfer path to avoid 
                    io.emit('markdown:change', { 
                        path: libPath.relative(root, payload.path)
                    })
                }
            })

            io.registService('markdown.content', async (payload) => {
                return new Promise((resolve, reject) => {
                    libFs.readFile(libPath.resolve(root, decodeURIComponent(payload)), 'utf8', (err, content) => {
                        if (err) return reject(err);
                        else resolve(content);
                    });
                });
            });
        }
    }
};
