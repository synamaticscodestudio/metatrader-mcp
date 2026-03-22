# KeySetParamLogins (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Data cache ](imtreportapi_cache.md "Data cache")/ KeySetParamLogins | [](imtreportapi_keysetcreate.md "KeySetCreate") [](imtreportapi_subscription.md "Subscriptions") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::KeySetParamLogins
Fill the key set with the logins of trading accounts for which the report is generated.
MTAPIRES IMTReportAPI::KeySetParamLogins( IMTReportCacheKeySet* keyset // Set of keys )  
---  
Parameters
keyset
[in] The [IMTReportCacheKeySet](imtreportcachekeyset.md "IMTReportCacheKeySet") object which describes the set of keys.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Trading account logins are specified when requesting a report from the MetaTrader 5 Manager.
Use a ready set of keys to quickly request data on related accounts from the cache.