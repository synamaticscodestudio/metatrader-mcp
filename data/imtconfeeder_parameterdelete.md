# ParameterDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ ParameterDelete | [](imtconfeeder_parameterupdate.md "ParameterUpdate") [](imtconfeeder_parameterclear.md "ParameterClear") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::ParameterDelete
Delete a parameter of a data feed by its index.
C++
MTAPIRES IMTConFeeder::ParameterDelete( const UINT pos // Position of the parameter )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.ParameterDelete( uint pos // Position of the parameter )  
---  
Python (Manager API)
MTConFeeder.ParameterDelete( pos # Position of the parameter )  
---  
Parameters
pos
[in] Position of the parameter, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.