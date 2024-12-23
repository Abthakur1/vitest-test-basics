
import { afterEach, describe, expect, it } from 'vitest';
import  nock from 'nock';
import axios from 'axios';

describe('Mock API Test', ()=> {
    afterEach(()=>{
        nock.cleanAll();
    });
    it('Get mocked response', async ()=>{
        const mockBody = {
            "page": 1,
            "per_page": 6,
            "total": 1,
            "total_pages": 1,
            "data": [
              {
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7.jpg"
              }
            ]
          }
       nock('https://reqres.in').get('/api/users?page=2').reply(200, mockBody);
      const response = await axios.get('https://reqres.in/api/users?page=2');
      console.log(response.data);
      expect(response.status).to.equal(200);
      console.log(response.data.total)
      expect(response.data.total).to.equal(1);
    })
})
