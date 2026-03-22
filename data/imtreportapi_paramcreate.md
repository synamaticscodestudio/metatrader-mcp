# ParamCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Report Parameters ](imtreportapi_parameters.md "Report Parameters")/ ParamCreate | [](imtreportapi_parameters.md "Report Parameters") [](imtreportapi_paramtotal.md "ParamTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ParamCreate
Create an object of a report parameter.
IMTConParam* IMTReportAPI::ParamCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConParam](imtconparam.md "IMTConParam") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConParam::Release](imtconparam_release.md "Release") method of this object.