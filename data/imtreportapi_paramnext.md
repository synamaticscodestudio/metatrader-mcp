# ParamNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Report Parameters ](imtreportapi_parameters.md "Report Parameters")/ ParamNext | [](imtreportapi_paramget.md "ParamGet") [](imtreportapi_paramlogins.md "ParamLogins") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ParamNext
Get a report parameter set from a manager terminal by its position.
MTAPIRES IMTReportAPI::ParamNext( const UINT pos, // Position of the parameter IMTConParam *param // An object of a report parameter )  
---  
Parameters
pos
[in] Position of the parameter, starting with 0.
*param
An object of a report parameter. The object must first be created using the [IMTReportAPI::ParamCreate](imtreportapi_paramcreate.md "ParamCreate") object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the report parameter data with a specified index to the param object.