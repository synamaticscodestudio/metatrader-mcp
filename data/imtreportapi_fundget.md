# FundGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Funds and ETF ](imtreportapi_config_fund.md "Funds and ETF")/ FundGet | [](imtreportapi_fundnext.md "FundNext") [](imtreportapi_client.md "Clients") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::FundGet
Get a fund configuration by name.
MTAPIRES IMTReportAPI::FundGet( LPCWSTR name, // Configuration name IMTConFund* config // Fund configuration object )  
---  
Parameters
name
[in] Configuration name. The [IMTConSubscription::Name](imtconsubscription_name.md "Name") value is used for the configuration name.
config
[out] Fund configuration object. The 'config' object must be previously created using the [IMTReportAPI::FundCreate](imtreportapi_fundcreate.md "FundCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.