# ReportCacheCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Data cache ](imtreportapi_cache.md "Data cache")/ ReportCacheCreate | [](imtreportapi_cache.md "Data cache") [](imtreportapi_reportcacheget.md "ReportCacheGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ReportCacheCreate
Create a data cache object.
IMTReportCache* IMTReportAPI::UserCreate()  
---  
Return Value
Returns a pointer to the created object which implements the [IMTReportCache](imtreportcache.md "IMTReportCache") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTReportCache::Release](imtreportcache_release.md "Release") method of this object.