# ExternalID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ ExternalID | [](imtexecution_id.md "ID") [](imtexecution_externalaccount.md "ExternalAccount") |
| --- | --- | --- |
| --- | --- |

IMTExecution::ExternalID
Gets the ID of a trade execution in an external trading system.
C++
LPCWSTR IMTExecution::ExternalID() const  
---  
.NET (Gateway/Manager API)
string CIMTExecution.ExternalID()  
---  
Return Value
If successful, it returns a pointer to the string with the trade execution identifier. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of [IMTExecution](imtexecution.md "IMTExecution") object.
To use the line after the object removal (call of [IMTExecution::Release](imtexecution_release.md "Release") method of this object), a copy of it should be created.
IMTExecution::ExternalID
Sets the ID of a trade execution in an external trading system.
C++
MTAPIRES IMTExecution::ExternalID( LPCWSTR id // Trade execution ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.ExternalID( string id // Trade execution ID )  
---  
Parameters
id
[in] The ID of a trade execution in an external trading system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The ID length is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.