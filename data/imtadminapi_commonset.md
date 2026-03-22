# CommonSet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Common ](imtadminapi_config_common.md "Functions")/ CommonSet | [](imtadminapi_commonget.md "CommonGet") [](imtadminapi_config_network.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::CommonSet
Sets the common platform configuration.
C++
MTAPIRES IMTAdminAPI::CommonSet( const IMTConCommon* common // IMTConCommon object )  
---  
.NET
MTRetCode CIMTAdminAPI.CommonSet( CIMTConCommon common // CIMTConCommon object )  
---  
Python
AdminAPI.CommonSet( common # IMTConCommon object )  
---  
Parameters
common
[in] An object of the common configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.