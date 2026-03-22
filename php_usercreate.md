# UserCreate (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Clients ](php_user.md "Clients")/ UserCreate | [](php_user.md "Clients") [](php_useradd.md "UserAdd") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::UserCreate
Create an object of a client record.
MTUser MTWebAPI::UserCreate()  
---  
Return Value
It returns a pointer to the created MTUser object used to describe the client account. The client account parameters are described in the ["Data Structure"](webapi_user_data_structure.md "Data Structure") section.
Note
This method creates an MTUser object completely filled with default user parameters.