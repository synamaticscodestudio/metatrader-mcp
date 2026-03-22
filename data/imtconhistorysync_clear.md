# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ History Synchronization ](config_historysync.md "History Synchronization") / [ IMTConHistorySync ](imtconhistorysync.md "IMTConHistorySync")/ Clear | [](imtconhistorysync_assign.md "Assign") [](imtconhistorysync_server.md "Server") |
| --- | --- | --- |
| --- | --- |

IMTConHistorySync::Clear
Clear an object.
C++
MTAPIRES IMTConHistorySync::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHistorySync.Clear()  
---  
Python (Manager API)
bool MTConHistorySync.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.