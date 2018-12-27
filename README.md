# ReportsCollector

Your task is to create a Reports data server - which receives data from multiple clients 
and manipulate data, store it and a simple API to retrieve it to a clients requests.



##### The server should be able to do the following:
1. Create the following API for receiving data reports from clients:
    ```
    POST /collector/report
    ``` 
    example of request body:
    ```
    {
        data: {
            user_key: 'd8c0a258-e375-4986-bd33-7d46a11a7fd2',
            media_name: 'xepnn.png',
            duration: '4.07',
            displayed_at: 1545914232903
        }
    }
    ```
    * The server should return immediate OK response and continue its work.
    * The server should be able to handle high traffic.
    * create a simple Java / CLI client to generate calls
 2. The server should store the data it receives from the clients in order to retrieve it on later stages.
 3. Create an API that returns the data from the DB according to:
    - user_key
    * fromDate < displayed_at < toDate   



##### What we anticipate to see in the  app:

1. Write the server in Java and any SQL DB and you can use any framework you wish (Spring etc.). 
2. Unit tests
3. Use design patterns that allows flexible code structure, showing anticipation for evolution and new features 
4. Cut corners, but not to the point where the structure vanishes
5. Conventional coding style
6. Reasonable comments (where needed)

##### Questions:
1. How you can insure data consistency in case of server failures etc.? 
2. In case this server handles huge amount of events, how would you implement a feature that will need to preform complex aggregations?  

Answer the questions in the Answers.txt file

# Good luck!