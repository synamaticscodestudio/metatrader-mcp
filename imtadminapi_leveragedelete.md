# LeverageDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Floating Margin ](imtadminapi_config_leverage.md "Floating Margin")/ LeverageDelete | [](imtadminapi_leverageupdatebatch.md "LeverageUpdateBatch") [](imtadminapi_leveragedeletebatch.md "LeverageDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::LeverageDelete
Delete a floating margin configuration by name.
C++
MTAPIRES IMTAdminAPI::LeverageDelete( LPCWSTR name // Configuration name )  
---  
.NET
MTRetCode CIMTAdminAPI.LeverageDelete( string name // Configuration name )  
---  
Python
AdminAPI.LeverageDelete( str name # Configuration name )  
---  
Parameters
name
[in] The name of the configuration to delete. The [IMTConLeverage::Name](imtconleverage_name.md "Name") value is used for the configuration name.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.
Note
A configuration can only be deleted from the applications running on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
IMTAdminAPI::LeverageDelete
Delete a floating margin configuration by index.
C++
MTAPIRES IMTAdminAPI::LeverageDelete( const UINT pos // Configuration position )  
---  
.NET
MTRetCode CIMTAdminAPI.LeverageDelete( uint pos // Configuration position )  
---  
Python
AdminAPI.LeverageDelete( int pos # Configuration position )  
---  
Parameters
pos
[in] Configuration position starting from 0.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.
Note
A configuration can only be deleted from the applications running on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.