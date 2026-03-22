# GroupCreate (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Groups ](php_group.md "Groups")/ GroupCreate | [](php_group.md "Groups") [](php_groupadd.md "GroupAdd") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::GroupCreate
Create an object of a client group.
MTUser MTWebAPI::GroupCreate()  
---  
Return Value
It returns a pointer to the created MTConGroup object used to describe the client group. The client group parameters are described in the ["Data Structure"](webapi_group_data_format.md "Data Structure") section.
Note
This method creates an MTConGroup object completely filled with default group parameters.