# Clear (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Common Functions ](imtreportapi_common.md "Common Functions")/ Clear | [](imtreportapi_isstopped.md "IsStopeed") [](imtreportapi_licensecheck.md "LicenseCheck") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::Clear
Clear all the results added to the report.
MTAPIRES IMTReportAPI::Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects. E.g., fully clears the report HTML contents or a table data.