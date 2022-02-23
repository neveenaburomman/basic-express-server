'use strict';

const server = require('../src/server.js');

const supertest = require('supertest');

const request = supertest(server.app);



describe('testing validator middleware',()=>{

   
    it('500 if no name in the query string', async()=>{
        const response = await request.get('/person?name=');
        expect(response.status).toEqual(500);

    })

    it('200 if the name is in the query string', async()=>{
        const response = await request.get('/person?name=neveen');
        expect(response.status).toEqual(200);

    });
});
