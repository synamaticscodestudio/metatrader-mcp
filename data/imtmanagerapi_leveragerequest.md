# LeverageRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Floating Margin ](imtmanagerapi_config_leverage.md "Floating Margin")/ LeverageRequest | [](imtmanagerapi_leverageget.md "LeverageGet") [](imtmanagerapi_leveragerequestarray.md "LeverageRequestArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::LeverageRequest
Request a floating margin configuration from the server by name.
C++
MTAPIRES IMTManagerAPI::LeverageRequest( LPCWSTR name, // Configuration name IMTConLeverage*  config // Configuration object )  
---  
.NET
MTRetCode CIMTManagerAPI.LeverageRequest( string name, // Configuration name CIMTConLeverage  config // Configuration object )  
---  
Python
ManagerAPI.LeverageRequest( name # Configuration name )  
---  
Parameters
name
[in] Configuration name. The [IMTConLeverage::Name](imtconleverage_name.md "Name") value is used for the configuration name.
config
[out] Configuration object. The 'config' object must be created in advance using the [IMTManagerAPI::LeverageCreate](imtmanagerapi_leveragecreate.md "LeverageCreate") method.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).