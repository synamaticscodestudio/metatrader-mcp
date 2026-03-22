# ParameterNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ ParameterNext | [](imtconfeeder_parametertotal.md "ParameterTotal") [](imtconfeeder_parameterget.md "ParameterGet") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::ParameterNext
Get a data feed parameter by the index.
C++
MTAPIRES IMTConFeeder::ParameterNext( const UINT pos, // Position of the data feed IMTConParam* param // An object of a data feed parameter ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.ParameterNext( uint pos, // Position of the data feed CIMTConParam param // An object of a data feed parameter )  
---  
Python (Manager API)
MTConFeeder.ParameterNext( pos # Position of the data feed )  
---  
Parameters
pos
[in] Position of a data feed, starting with 0.
param
[out] An object of a data feed parameter. The 'param' object must first be created using the [IMTAdminAPI::FeederParamCreate](imtadminapi_feederparamcreate.md "FeederParamCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the parameters of a data feed with a specified index to the param object.