# LeverageGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Floating Margin ](imtadminapi_config_leverage.md "Floating Margin")/ LeverageGet | [](imtadminapi_leveragenext.md "LeverageNext") [](imtadminapi_config_manager.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::LeverageGet
Get a floating margin configuration by name.
C++
MTAPIRES IMTAdminAPI::LeverageGet( LPCWSTR name, // Configuration name IMTConLeverage*  config // Configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.LeverageGet( string name, // Configuration name CIMTConLeverage  config // Configuration object )  
---  
Python
AdminAPI.LeverageGet( str name # Configuration name )  
---  
Parameters
name
[in] Configuration name. The [IMTConLeverage::Name](imtconleverage_name.md "Name") value is used for the configuration name.
config
[out] Configuration object. The config object must be previously created using the [IMTAdminAPI::LeverageCreate](imtadminapi_leveragecreate.md "LeverageCreate") method.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.