# LeverageGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Floating Margin ](imtmanagerapi_config_leverage.md "Floating Margin")/ LeverageGet | [](imtmanagerapi_leveragenext.md "LeverageNext") [](imtmanagerapi_leveragerequest.md "LeverageRequest") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::LeverageGet
Get a floating margin configuration by name.
C++
MTAPIRES IMTManagerAPI::LeverageGet( LPCWSTR name, // Configuration name IMTConLeverage*  config // Configuration object )  
---  
.NET
MTRetCode CIMTManagerAPI.LeverageGet( string name, // Configuration name CIMTConLeverage  config // Configuration object )  
---  
Python
ManagerAPI.LeverageGet( str name # Configuration name )  
---  
Parameters
name
[in] Configuration name. The [IMTConLeverage::Name](imtconleverage_name.md "Name") value is used for the configuration name.
config
[out] Configuration object. The 'config' object must be created in advance using the [IMTManagerAPI::LeverageCreate](imtmanagerapi_leveragecreate.md "LeverageCreate") method.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.