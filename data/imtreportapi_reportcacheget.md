# ReportCacheGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Data cache ](imtreportapi_cache.md "Data cache")/ ReportCacheGet | [](imtreportapi_reportcachecreate.md "ReportCacheCreate") [](imtreportapi_reportcachegettemporary.md "ReportCacheGetTemporary") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ReportCacheGet
Call the [permanent data cache](imtreportapi_cache.htm#continuous) by name and version.
MTAPIRES IMTReportAPI::ReportCacheGet( LPCWSTR name, // Name const UINT version, // Version IMTReportCache* report_cache // Cache description )  
---  
Parameters
name
[in] The name of the data cache. Corresponds to [IMTReportCache::Name](imtreportcache_name.md "Name").
version
[in] The version of the data cache. Corresponds to [IMTReportCache::Version](imtreportcache_name.md "Name"). It is recommended to update the cache version whenever its data structure is changed.
report_cache
[out] The [IMTReportCache](imtreportcache.md "IMTReportCache") object which describes the data cache. The object must be previously created using the [IMTReportAPI::ReportCacheCreate](imtreportapi_reportcachecreate.md "ReportCacheCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Permanent cache is identified by name and version. Caches having the same name but different versions, are considered to be two different independent caches.
When the method is called, the existence of a cache with the specified name and version is checked. If there is no such cache, a new cache with these parameters is created and its description is added to report_cache.