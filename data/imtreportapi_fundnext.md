# FundNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Funds and ETF ](imtreportapi_config_fund.md "Funds and ETF")/ FundNext | [](imtreportapi_fundtotal.md "FundTotal") [](imtreportapi_fundget.md "FundGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::FundNext
Get a fund configuration by index.
MTAPIRES IMTReportAPI::FundNext( const UINT pos, // Configuration position IMTConFund* config // Fund configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
config
[out] Fund configuration object. The 'config' object must be previously created using the [IMTReportAPI::FundCreate](imtreportapi_fundcreate.md "FundCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the fund configuration with a specified index to the 'config' object.