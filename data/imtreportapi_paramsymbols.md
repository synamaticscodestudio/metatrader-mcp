# ParamSymbols (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Report Parameters ](imtreportapi_parameters.md "Report Parameters")/ ParamSymbols | [](imtreportapi_paramgroups.md "ParamGroups") [](imtreportapi_paramieversion.md "ParamIEVersion") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ParamSymbols
Get the "Symbols" parameter value line set in a manager terminal.
LPCWSTR IMTReportAPI::ParamSymbols()  
---  
Return Value
If successful, it returns a pointer to the string with the "Symbols" parameter value. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConParam](imtconparam.md "IMTConParam") object.
To use the string after the object removal (call of the [IMTConParam::Release](imtconparam_release.md "Release") method of this object), a copy of it should be created.