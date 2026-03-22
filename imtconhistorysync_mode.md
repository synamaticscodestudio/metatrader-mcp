# Mode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ History Synchronization ](config_historysync.md "History Synchronization") / [ IMTConHistorySync ](imtconhistorysync.md "IMTConHistorySync")/ Mode | [](imtconhistorysync_password.md "Password") [](imtconhistorysync_modesync.md "ModeSync") |
| --- | --- | --- |
| --- | --- |

IMTConHistorySync::Mode
Get the state of the configuration of data synchronization.
C++
UINT IMTConHistorySync::Mode() const  
---  
.NET (Gateway/Manager API)
EnHistoryMode CIMTConHistorySync.Mode()  
---  
Python (Manager API)
MTConHistorySync.Mode  
---  
Return Value
A value from the [IMTConHistorySync::EnHistoryMode](imtconhistorysync_enum.htm#enhistorymode) enumeration.
IMTConHistorySync::Mode
Set the state of the configuration of data synchronization.
C++
MTAPIRES IMTConHistorySync::Mode( const UINT mode // State of configuration )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHistorySync.Mode( EnHistoryMode mode // State of configuration )  
---  
Python (Manager API)
MTConHistorySync.Mode  
---  
Parameters
mode
[in] The state of data synchronization configuration is passed using the [IMTConHistorySync::EnHistoryMode](imtconhistorysync_enum.htm#enhistorymode) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.