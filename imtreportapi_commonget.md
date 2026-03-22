# CommonGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Common ](imtreportapi_config_common.md "Common")/ CommonGet | [](imtreportapi_commoncreateagreement.md "CommonCreateAgreement") [](imtreportapi_config_network.md "Network") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::CommonGet
Gets the common platform configuration.
MTAPIRES IMTReportAPI::CommonGet( IMTConCommon* common // A comment )  
---  
Parameters
common
[out] An object of the common configuration. The object must first be created using the [IMTReportAPI::CommonCreate](imtreportapi_commoncreate.md "CommonCreate") object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.