# ReadParamKeySet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ ReadParamKeySet | [](imtreportcache_readparamdata.md "ReadParamData") [](imtreportcache_readvalue.md "ReadValue") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::ReadParamKeySet
Get the value of the ["KeySet" parameter](imtreportapi_cache.htm#data).
MTAPIRES IMTReportCache::ReadParamKeySet( IMTReportCacheKeySet* keys // Set of keys )  
---  
Parameters
keys
[out] The [IMTReportCacheKeySet](imtreportcachekeyset.md "IMTReportCacheKeySet") object which describes the value of the "KeySet" parameter. The object must be previously created using the [IMTReportAPI::KeySetCreate](imtreportapi_keysetcreate.md "KeySetCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.