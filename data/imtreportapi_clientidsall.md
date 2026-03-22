# ClientIdsAll (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Clients ](imtreportapi_client.md "Clients")/ ClientIdsAll | [](imtreportapi_clientgethistory.md "ClientGetHistory") [](imtreportapi_clientidsbygroup.md "ClientIdsByGroup") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ClientIdsAll
Get the list of identifiers of all clients in the server database.
MTAPIRES IMTReportAPI::ClientIdsAll( UINT64*& ids, // Array of identifiers UINT& ids_total // Number of identifier )  
---  
Parameters
ids
[out] An array with identifiers of all clients in the server database ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
ids_total
[out] The number of identifiers in the 'ids' array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method allocates and fills an array of identifiers. A pointer to the passed block is placed to the 'ids' parameter. After use, the array placed in the 'ids' variable must be released using the [IMTReportAPI::Free](imtreportapi_free.md "Free") Server API method.
The method takes into account whether the clients are available to the specific [manager account, from which the report is requested](reportapi_request.md "Request for Reports").