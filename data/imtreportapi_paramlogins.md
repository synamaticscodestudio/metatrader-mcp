# ParamLogins (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Report Parameters ](imtreportapi_parameters.md "Report Parameters")/ ParamLogins | [](imtreportapi_paramnext.md "ParamNext") [](imtreportapi_paramfrom.md "ParamFrom") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ParamLogins
Get an array of the logins, for which a report from a manager terminal is requested.
MTAPIRES IMTReportAPI::ParamLogins( UINT64*& logins, // An array of client logins UINT& total // The number of logins  )  
---  
Parameters
logins
[out] An array of client logins.
total
[out] The number of logins in the logins array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Logins array is generated based on the "Groups" parameter that was set during a report request through a manager terminal. Both individual users and groups can be indicated in the "Groups" parameter. Indicated groups are arranged as lists of logins included in them. Therefore, the [MTReportParam::TYPE_GROUPS](mtreportparam.md "MTReportParam") mode must be turned on for this method operation in a report.
After using, the array placed in the logins variable must be released using the [IMTReportAPI::Free](imtreportapi_free.md "Free") method.