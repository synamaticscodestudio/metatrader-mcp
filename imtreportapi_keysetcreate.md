# KeySetCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Data cache ](imtreportapi_cache.md "Data cache")/ KeySetCreate | [](imtreportapi_reportcachegettemporary.md "ReportCacheGetTemporary") [](imtreportapi_keysetparamlogins.md "KeySetParamLogins") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::KeySetCreate
Create a key set object for working with the cached data.
IMTReportCacheKeySet* IMTReportAPI::KeySetCreate()  
---  
Return Value
Returns a pointer to the created object which implements the [IMTReportCacheKeySet](imtreportcachekeyset.md "IMTReportCacheKeySet") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTReportCacheKeySet::Release](imtreportcachekeyset_release.md "Release") method of this object.