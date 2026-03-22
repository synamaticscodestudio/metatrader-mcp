# FundCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Funds and ETF ](imtreportapi_config_fund.md "Funds and ETF")/ FundCreate | [](imtreportapi_config_fund.md "Funds and ETF") [](imtreportapi_fundaccountcreate.md "FundAccountCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::FundCreate
Create a fund configuration object.
IMTConFund* IMTReportAPI::FundCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConFund](imtconfund.md "IMTConFund") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConFund::Release](imtconfund_release.md "Release") method of this object.