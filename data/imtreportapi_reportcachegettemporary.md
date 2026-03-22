# ReportCacheGetTemporary (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Data cache ](imtreportapi_cache.md "Data cache")/ ReportCacheGetTemporary | [](imtreportapi_reportcacheget.md "ReportCacheGet") [](imtreportapi_keysetcreate.md "KeySetCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ReportCacheGetTemporary
Call the [temporary data cache](imtreportapi_cache.htm#temporary) by name and version.
MTAPIRES IMTReportAPI::ReportCacheGetTemporary( LPCWSTR name, // Name const UINT version, // Version const UINT64 key_time_to_live, // Time-to-live IMTReportCache* report_cache // Cache description )  
---  
Parameters
name
[in] The name of the data cache. Corresponds to [IMTReportCache::Name](imtreportcache_name.md "Name").
version
[in] The version of the data cache. Corresponds to [IMTReportCache::Version](imtreportcache_name.md "Name"). It is recommended to update the cache version whenever its data structure is changed.
key_time_to_live
[in] The TTL (time-to-live) of keys in the data cache in seconds. After that time (since the time of addition), the key is deleted from the cache. The zero value means that the TTL is not limited.
report_cache
[out] The [IMTReportCache](imtreportcache.md "IMTReportCache") object which describes the data cache.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Temporary cache is identified by name, version and TTL. Caches having the same name and version but different TTL are considered to be two different independent caches.
When the method is called, the existence of a cache with the specified name, version and TTL is checked. If there is no such cache, a new cache with these parameters is created and its description is added to report_cache.