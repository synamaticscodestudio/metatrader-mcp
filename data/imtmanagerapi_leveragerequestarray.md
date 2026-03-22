# LeverageRequestArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Floating Margin ](imtmanagerapi_config_leverage.md "Floating Margin")/ LeverageRequestArray | [](imtmanagerapi_leveragerequest.md "LeverageRequest") [](imtmanagerapi_config_spread.md "Configuration of Spreads") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::LeverageRequestArray
Request an array of floating margin configurations from the server by groups.
C++
MTAPIRES IMTManagerAPI::LeverageRequestArray( LPCWSTR groups_mask, // Group mask IMTConLeverageArray  leverages // Configuration object )  
---  
.NET
MTRetCode CIMTManagerAPI.LeverageRequestArray( string groups_mask, // Group mask CIMTConLeverageArray leverages // Object configuration )  
---  
Python
ManagerAPI.LeverageRequestArray( groups_mask # Group mask )  
---  
Parameters
groups_mask
[in] Groups to which floating margin configurations are being applied. You can specify one group, several groups separated by commas, or a group mask. A mask is indicated using "*" (any value) and "!" (exception). For example: "demo*,!demoforex" includes all groups with the names beginning with 'demo', except for the 'demoforex' group. The value of 'nullptr' means "all groups".
leverages
[out] Object of the configurations array [IMTConLeverageArray](imtconleveragearray.md "IMTConLeverageArray"). The 'config' object must be created in advance using the [IMTManagerAPI::LeverageCreateArray](imtmanagerapi_leveragecreatearray.md "LeverageCreateArray") method.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).