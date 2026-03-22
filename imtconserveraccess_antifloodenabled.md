# AntifloodEnabled (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ AntifloodEnabled | [](imtconserveraccess_newsmax.md "NewsMax") [](imtconserveraccess_antifloodconnects.md "AntifloodConnects") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::AntifloodEnabled
Get the state of antiflood control.
C++
UINT IMTConServerAccess::AntifloodEnabled() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServerAccess.AntifloodEnabled()  
---  
Python (Manager API)
MTConServerAccess.AntifloodEnabled  
---  
Return Value
0 - antiflood control disabled, 1 - enabled.
IMTConServerAccess::AntifloodEnabled
Set the state of antiflood control.
C++
MTAPIRES IMTConServerAccess::AntifloodEnabled( const UINT enabled // State of the antiflood control )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.AntifloodEnabled( uint enabled // State of the antiflood control )  
---  
Python (Manager API)
MTConServerAccess.AntifloodEnabled  
---  
Parameters
enabled
[in] State of the antiflood control. 0 - disabled, 1 - enabled.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.