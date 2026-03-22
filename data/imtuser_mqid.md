# MQID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ MQID | [](imtuser_id.md "ID") [](imtuser_clientid.md "ClientID") |
| --- | --- | --- |
| --- | --- |

IMTUser::MQID
Gets the client's MetaQuotes ID.
C++
LPCWSTR IMTUser::MQID( MTAPISTR& mqid // MetaQuotes ID )  
---  
.NET (Gateway/Manager API)
string CIMTUser.MQID()  
---  
Parameters
mqid
[out] A string with the client's MetaQutes ID.
Return Value
A pointer to the mqid string passed as a parameter.
Note
MetaQuotes ID is a unique identifier of the mobile client terminal (MetaTrader 4/5 for iPhone and Android), which is used to send push notifications directly to the client.