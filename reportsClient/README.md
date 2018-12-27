# Reports Client

Install the client
```sh
npm i
```
Read the server code and understand its function

Start the client
```sh
node reportsClient.js
```

<br/><br/>
The Clients call the api server: 
```
http://localhost:4000/collector/reportMe
```
with the following data format:

```json
{
    data: {
        user_key: [uuid],
        media_name: [filename].png,
        duration: [decimalNum].toFixed(2),
        displayed_at: [date]
    }
}
```
