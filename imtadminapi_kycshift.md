# KYCShift (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ KYC ](imtadminapi_config_kyc.md "KYC")/ KYCShift | [](imtadminapi_kycdeletebatch.md "KYCDeleteBatch") [](imtadminapi_kyctotal.md "KYCTotal") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::KYCShift
Change the position of a KYC provider configuration in the list.
C++
MTAPIRES IMTAdminAPI::KYCShift( const UINT pos, // Configuration position const int shift // Shift )  
---  
.NET
MTRetCode CIMTAdminAPI.KYCShift( uint pos, // Configuration position int shift // Shift )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
shift
[in] The shift of the configuration relative to its current position. A negative value means shift towards the top of the list; a positive value shifts the item towards the end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The position of a configuration can only be changed from the applications running on the main server. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.