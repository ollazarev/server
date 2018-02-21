// Test automatically retrieved. Do not edit manually
const { render, json } = require('server/reply');
const { get, post } = require('server/router');
const { modern } = require('server').utils;
const test = require('server/test');
const fs = require('mz/fs');
const path = require('path');

describe('Automatic test from content 4', () => {
  it('works', async () => {
    // START
    const options = {
      public: './'
    };
    
    /* test */
    const same = ctx => ({ public: ctx.options.public });
    const res = await test(options, same).get('/');
    expect(res.body.public).toBe(process.cwd() + path.sep);
    // END
  });
});
      