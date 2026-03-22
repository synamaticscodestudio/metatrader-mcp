# GroupTotal (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Groups ](imtmanagerapi_config_group.md "Groups")/ GroupTotal | [](imtmanagerapi_groupupdatebatch.md "GroupUpdateBatch") [](imtmanagerapi_groupnext.md "GroupNext") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::GroupTotal
The total number of group configurations available in the platform.
C++
UINT IMTManagerAPI::GroupTotal()  
---  
.NET
uint CIMTManagerAPI.GroupTotal()  
---  
Python
ManagerAPI.GroupTotal()  
---  
Return Value
The number of group configurations in the trading platform.
Note
The method is valid only if the [IMTManagerAPI::PUMP_MODE_GROUPS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.