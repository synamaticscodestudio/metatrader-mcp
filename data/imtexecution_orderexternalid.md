# OrderExternalID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ OrderExternalID | [](imtexecution_order.md "Order") [](imtexecution_ordertype.md "OrderType") |
| --- | --- | --- |
| --- | --- |

IMTExecution::OrderExternalID
Gets the number of an order in an external trading system.
C++
LPCWSTR IMTExecution::OrderExternalID() const  
---  
.NET (Gateway/Manager API)
string CIMTExecution.OrderExternalID()  
---  
Return Value
If successful, it returns a pointer to a string with the order number. Otherwise, it returns NULL.
Note
This is a required trade execution field.
IMTExecution::OrderExternalID
Sets the number of an order in an external trading system.
C++
MTAPIRES IMTExecution::OrderExternalID( LPCWSTR id // Order number )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.OrderExternalID( string id // Order number )  
---  
Parameters
id
[in] The number of an order in an external trading system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This is a required trade execution field.
The ID length is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.