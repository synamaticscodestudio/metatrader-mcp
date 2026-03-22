# ParamGroups (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Report Parameters ](imtreportapi_parameters.md "Report Parameters")/ ParamGroups | [](imtreportapi_paramto.md "ParamTo") [](imtreportapi_paramsymbols.md "ParamSymbols") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ParamGroups
Get the "Groups" parameter value line set in a manager terminal.
LPCWSTR IMTReportAPI::ParamGroups()  
---  
Return Value
If successful, it returns a pointer to the string with the "Groups" parameter value. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConParam](imtconparam.md "IMTConParam") object.
To use the string after the object removal (call of the [IMTConParam::Release](imtconparam_release.md "Release") method of this object), a copy of it should be created.