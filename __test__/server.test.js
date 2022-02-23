'use strict';

const server = require('../src/server.js');

const supertest = require('supertest');

const request = supertest(server.app);

describe('testing',()=>{

    it('404 on a bad route',async()=>{

        const response = await request.get('/notvalid');
        expect(response.status).toEqual(404);

    })

    it('404 on a bad method', async()=>{
        const response = await request.post('/notvalid');
        expect(response.status).toEqual(404);

    })



})