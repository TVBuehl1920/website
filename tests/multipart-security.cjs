const assert = require('node:assert/strict');
const http = require('node:http');
const { createRequire } = require('node:module');
const datoRequire = createRequire(require.resolve('gatsby-source-datocms/package.json'));
const clientRequire = createRequire(datoRequire.resolve('datocms-client/package.json'));
const request = clientRequire('request');
(async () => {
  const bodies = [];
  const server = http.createServer((incoming, response) => {
    const parts = [];
    incoming.on('data', data => parts.push(data));
    incoming.on('end', () => {
      const body = Buffer.concat(parts).toString();
      bodies.push(body);
      assert.match(incoming.headers['content-type'], /^multipart\/form-data; boundary=/);
      assert.equal(Number(incoming.headers['content-length']), Buffer.byteLength(body));
      response.end('ok');
    });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const url = `http://127.0.0.1:${server.address().port}`;
  const send = formData => new Promise((resolve, reject) => request.post({ url, formData }, (error, response, body) => error ? reject(error) : resolve(body)));
  try {
    assert.equal(await send({ title: 'Turnverein Bühl', document: { value: Buffer.from('test document'), options: { filename: 'training.txt', contentType: 'text/plain' } } }), 'ok');
    assert.match(bodies[0], /name="title"/);
    assert.match(bodies[0], /Turnverein Bühl/);
    assert.match(bodies[0], /filename="training.txt"/);
    assert.match(bodies[0], /test document/);
    console.log('PASS request multipart text/file upload, Content-Length and response');
    await send({ ['field"\r\nX-Injected: yes\r\nx="']: 'value' });
    assert.doesNotMatch(bodies[1], /\r\nX-Injected: yes\r\n/, 'multipart field names must not inject headers');
    console.log('PASS malicious multipart field name cannot inject a CRLF header');
    await send({ document: { value: Buffer.from('test document'), options: { filename: 'training"\r\nX-Injected: filename\r\nx=".txt', contentType: 'text/plain' } } });
    assert.doesNotMatch(bodies[2], /\r\nX-Injected: filename\r\n/, 'multipart filenames must not inject headers');
    console.log('PASS malicious multipart filename cannot inject a CRLF header');
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
