const { Ajv } = require("ajv");
const { test, expect } = require("@playwright/test");

test.describe("reqresin API Test", () => {
})
const ajv = new Ajv ();
test('GET Request', async ({request}) => {
const response = await request.get ("https://reqres.in/api/users?page=2")
expect(response.status()).toEqual(200);
expect(response.ok).toBeTruthy();

const responseJson = await response.json();

expect(responseJson.per_page).toEqual(6);
    
const valid = ajv.validate(
    require("./json-schema/list-user.schema.json"),
    responseJson
    );
    
if (!valid) {
     console.error("AJV Validation Errors", Ajv.errorsText());
        }
    
expect(valid).toBe(true);
    });

test.describe("reqresin API Test", () => {

    const ajv = new Ajv();
})

test('POST Request', async ({request}) => {

    const reqHeaders = {
        Accept: 'application/json'
    }

    const body = {
        "name": "morpheus",
        "job": "leader"
    }

    const response = await request.post ("https://reqres.in/api/users", {
        headers: reqHeaders,
        data: body,
    })

    expect(response.status()).toEqual(201)
    expect(response.ok()).toBeTruthy()

    const resBody = await response.json()
    expect(resBody.name).toEqual('morpheus')
    expect(resBody.job).toEqual('leader')

    const valid = ajv.validate(require('./json-schema/create.schema.json'), resBody);

    if (!valid) {
        console.error("AJV Validation Errors", ajv.errorsText());
    }

    expect(valid).toBe(true);
});

test.describe("reqresin API Test", () => {
    const ajv = new Ajv();
})
    
test.describe("reqresin API Test", () => {
    const ajv = new Ajv();
})
test('DELETE Request', async ({request}) => {
    const response = await request.delete ("https://reqres.in/api/users/2")
        });

test.describe("reqresin API Test", () => {
    const ajv = new Ajv();
})

test('PUT Request', async ({request}) => {

    const reqHeaders = {
        Accept: 'application/json'
    }

    const body = {
            "name": "morpheus",
            "job": "zion resident"  
    }

    const response = await request.put ("https://reqres.in/api/users/2", {
        headers: reqHeaders, 
        data: body,
    })

    expect(response.status()).toEqual(200)
    expect(response.ok()).toBeTruthy()

    const resBody = await response.json()
    expect(resBody.name).toEqual('morpheus')
    expect(resBody.job).toEqual('zion resident')

    const valid = ajv.validate(require('./json-schema/update.schema.json'), resBody);

    if (!valid) {
        console.error("AJV Validation Errors", ajv.errorsText());
    }

    expect(valid).toBe(true); 
});
