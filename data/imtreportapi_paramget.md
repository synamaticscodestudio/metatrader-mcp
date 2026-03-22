# ParamGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Report Parameters ](imtreportapi_parameters.md "Report Parameters")/ ParamGet | [](imtreportapi_paramtotal.md "ParamTotal") [](imtreportapi_paramnext.md "ParamNext") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ParamGet
Get a report parameter set in a manager terminal by its name.
MTAPIRES IMTReportAPI::ParamGet( LPCWSTR name, // Parameter name IMTConParam *param // An object of a report parameter )  
---  
Parameters
name
[in] Parameter Name.
*param
[out] An object of a report parameter. The object must first be created using the [IMTReportAPI::ParamCreate](imtreportapi_paramcreate.md "ParamCreate") object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the report parameter data with a specified name to the param object.