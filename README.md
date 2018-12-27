# ReportsCollector

Your task is to create a Reports data server - which receives data from multiple clients 
and manipulate data, store it and a simple API to retrieve it to a clients requests.



#####The server should be able to do the following:
1. Create the following API for receiving data reports from clients:
    ```
    /collector/reportMe
    ``` 
    *  See reportsClient README to generate client calls
    * The server should return imidiate OK response and continue its work. 
     
 2. The server should store the data it receives from the clients in order to retrieve it on later stages.
 3. Create an API that returns the data from the DB according to:
    - user_key
    * fromDate < displayed_at < toDate   


<br></br>
#####What we anticipate to see in the  app:

2. Use design patterns that allows flexible code structure, showing anticipation for evolution and new features 
2. Cut corners, but not to the point where the structure vanishes
2. Conventional coding style
3. Reasonable comments (where needed)

#####Questions:
1. How you insure data consistency in case of server failures etc.? 
2. In case this server handles huge amount of events, how would you implement a feature that will need to preform complex aggregations?  

Answer the questions in the Answers.txt file

# Good luck!