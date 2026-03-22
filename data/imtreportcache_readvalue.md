# ReadValue (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ ReadValue | [](imtreportcache_readparamkeyset.md "ReadParamKeySet") [](imtreportcache_readvalues.md "ReadValues") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::ReadValue
Get the cache value with the specified key.
MTAPIRES IMTReportCache::ReadValue( const UINT64 key, // Key IMTReportCacheValue* value // Description of the value )  
---  
Parameters
key
[in] The key for which data will be retrieved.
value
[out] The [IMTReportCacheValue](imtreportcachevalue.md "IMTReportCacheValue") object to which the key value is placed. The object must be previously created using the [IMTReportReportCache::ValueCreate](imtreportcache_valuecreate.md "ValueCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.