# ClientGetHistory (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Clients ](imtreportapi_client.md "Clients")/ ClientGetHistory | [](imtreportapi_clientget.md "ClientGet") [](imtreportapi_clientidsall.md "ClientIdsAll") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ClientGetHistory
Get the history of client changes.
MTAPIRES IMTReportAPI::ClientGetHistory( const UINT64 client_id, // ID const UINT64 author, // Author const INT64 from, // Period beginning const UINT64 to, // Period ending IMTClientArray* history // An object of client arrays )  
---  
Parameters
client_id
[in] Client identifier ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
author
[in] The login of the manager account by whom the client was changed. The login is equal to the [IMTConManager::Login](imtconmanager_login.md "Login") value. 
from
[in] The beginning of the period for which you wish to get the history of client changes. The date is specified in seconds since 01.01.1970.
to
[in] The end of the period for which you wish to get the history of client changes. The date is specified in seconds since 01.01.1970.
history
[out] An object of an array of clients. The 'history' object must be previously created using the [IMTReportAPI::ClientCreateArray](imtreportapi_clientcreatearray.md "ClientCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method returns an array of client descriptions: all the client states after changes by the specified author in the specified time period.
The method takes into account whether the clients are available to the specific [manager account, from which the report is requested](reportapi_request.md "Request for Reports").