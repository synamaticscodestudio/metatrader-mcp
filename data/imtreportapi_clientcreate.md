# ClientCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Clients ](imtreportapi_client.md "Clients")/ ClientCreate | [](imtreportapi_client.md "Clients") [](imtreportapi_clientcreatearray.md "ClientCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ClientCreate
Create a client object.
IMTClient* IMTReportAPI::ClientCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTClient](imtclient.md "IMTClient") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTClient::Release](imtclient_release.md "Release") method of this object.