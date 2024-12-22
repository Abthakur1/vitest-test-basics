import { describe, expect, it } from "vitest";

describe('Basic API GET Requests using fetch', () => {
    it('Get call', async () => {
        const res = await fetch('https://reqres.in/api/users?page=2');
        const json = await res.json();
        console.log(json);
        console.log(res.status); // 200
        console.log(res.statusText); // OK
        expect(res.status).to.equal(200);
        expect(res.statusText).to.equal('OK');
        expect(json.page).equal(2);
        console.log(json.data);
        const resData: any[] = json.data;
        console.log(resData[0]);
        console.log(resData[0].first_name);
        expect(resData[0].first_name).to.equal('Michael');
    })
    it('Get call with query param', async () => {
        const baseUrl: string = 'https://reqres.in/api/users';
        const queryParams = {
            page: 2,
        };

        const response = await fetch(baseUrl + queryParams);
        console.log(response.status);
        expect(response.status).to.equal(200);
    });
    it('Get call with headers', async () => {
        const baseUrl: string = 'https://reqres.in/api/users';
        const apiKey = 'token';
        await fetch(baseUrl, { headers: { Authorization: `Bearer ${apiKey}` } }).then(response => {
            expect(response.status).to.equal(200); ``
        })
    })
    it('Post call', async () => {
        const baseUrl: string = 'https://reqres.in/';
        const pathParam: string = 'api/users';
        const payload = {
            "name": "morpheus",
            "job": "leader"
        }
        await fetch(baseUrl+pathParam, {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).then(async response =>{
            expect(response.status).to.equal(201);
            const resJson = await response.json();
            console.log(resJson); // { id: '728', createdAt: '2024-12-22T15:11:43.681Z' }
            expect(resJson.id).not.to.be.null;

        })

    })
});