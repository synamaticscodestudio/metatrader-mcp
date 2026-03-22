# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ Clear | [](imtclient_assign.md "Assign") [](imtclient_recordid.md "RecordID") |
| --- | --- | --- |
| --- | --- |

IMTClient::Clear
Clear an object.
C++
MTAPIRES IMTClient::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method clears all fields ​​and removes nested objects.