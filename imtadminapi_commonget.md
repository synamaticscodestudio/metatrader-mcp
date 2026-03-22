# CommonGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Common ](imtadminapi_config_common.md "Functions")/ CommonGet | [](imtadminapi_commonunsubscribe.md "CommonUnsubscribe") [](imtadminapi_commonset.md "CommonSet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::CommonGet
Gets the common platform configuration.
C++
MTAPIRES IMTAdminAPI::CommonGet( IMTConCommon* common // IMTConCommon object )  
---  
.NET
MTRetCode CIMTAdminAPI.CommonGet( CIMTConCommon common // CIMTConCommon object )  
---  
Python
AdminAPI.CommonGet()  
---  
Parameters
common
[out] An object of the common configuration. The object must first be created using the [IMTAdminAPI::CommonCreate](imtadminapi_commoncreate.md "CommonCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.