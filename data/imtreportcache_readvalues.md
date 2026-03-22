# ReadValues (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ ReadValues | [](imtreportcache_readvalue.md "ReadValue") [](imtreportcache_readmissingkeys.md "ReadMissingKeys") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::ReadValues
Get multiple values from cache using a set of keys.
MTAPIRES IMTReportCache::ReadValues( const IMTReportCacheKeySet* keys, // Set of keys IMTReportCacheValue* value // Values )  
---  
Parameters
keys
[in] The [IMTReportCacheKeySet](imtreportcachekeyset.md "IMTReportCacheKeySet"), which described the set of keys for which you want to request data.
value
[out] Values as the [IMTReportCacheValue](imtreportcachevalue.md "IMTReportCacheValue") object. The object must be previously created using the [IMTReportReportCache::ValueCreate](imtreportcache_valuecreate.md "ValueCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.