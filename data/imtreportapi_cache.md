# Data cache (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface")/ Data cache | [](imtreportapi_datasetrequestcreate.md "DatasetRequestCreate") [](imtreportapi_reportcachecreate.md "ReportCacheCreate") |
| --- | --- | --- |
| --- | --- |

Data cache
Data cache is used to store data requested from the trading platform database, between report generation times. Use of data cache saves resources when creating reports: there is no need to re-retrieve data from databases and perform related calculations, while the ready data is available in the cache.
Caches are stored on the trade server:
  * In memory, for quick access to frequently used data. The cache is automatically unloaded from the memory if it is not accessed within 2 days.
  * On a hard disk, for long-term access. The cache is automatically deleted from the disk if it is not accessed within 30 days.

Cache types
There are two types of caches:
  * Permanent: data can only be added but cannot be deleted. It is permanently stored on the server and it is impossible to set time-to-live (TTL) for the data.
  * Temporary: temporary data can be added to this cache, with the explicit specification of the TTL for key-value pairs. After that time data is deleted from the cache.

Cached data types
The cache allows storing data of three types: key-value pairs, dictionaries and parameters.
Key-value pairs are the main data in the cache. Methods [IMTReportCache::ReadValue*](imtreportcache_readvalue.md "ReadValue") and [IMTReportCache::WriteValue*](imtreportcache_writevalue.md "WriteValue") are used for working with them.
Dictionaries enable efficient operation with various listings, such as countries, cities, etc. Data in dictionaries is stored as an array of strings. Use methods [IMTReportCache::ReadDictionary*](imtreportcache_readdictionarypos.md "ReadDictionaryPos") and [IMTReportCache::WriteDictionaryString](imtreportcache_writedictionarystring.md "WriteDictionaryString") to work with the dictionary.
In addition, the cache has five optional parameters which the programmer can use for different purposes, for example, to describe the cache contents.
  * From — the beginning of data in the cache. To work with this parameter, use methods [IMTReportCache::ReadParamFrom](imtreportcache_readparamfrom.md "ReadParamFrom") and [IMTReportCache::WriteParamFrom](imtreportcache_writeparamfrom.md "WriteParamFrom").
  * To — describes the end of data in the cache. To work with this parameter, use methods [IMTReportCache::ReadParamTo](imtreportcache_readparamto.md "ReadParamTo") and [IMTReportCache::WriteParamTo](imtreportcache_writeparamto.md "WriteParamTo").
  * String — parameter for storing string data. To work with the parameter use methods [IMTReportCache::ReadParamString](imtreportcache_readparamstring.md "ReadParamString") and [IMTReportCache::WriteParamString](imtreportcache_writeparamstring.md "WriteParamString").
  * Data — parameter for storing binary data. To work with the parameter use methods [IMTReportCache::ReadParamData](imtreportcache_readparamdata.md "ReadParamData") and [IMTReportCache::WriteParamData](imtreportcache_writeparamdata.md "WriteParamData").
  * KeySet — parameter for storing a [set of keys](imtreportcachekeyset.md "IMTReportCacheKeySet"). To work with the parameter, use methods [IMTReportCache::ReadParamKeySet](imtreportcache_readparamkeyset.md "ReadParamKeySet") and [IMTReportCache::WriteParamKeySet](imtreportcache_writeparamkeyset.md "WriteParamKeySet").

The general scheme for operations with the cache
  * Create a cache object using the [ReportCacheCreate](imtreportapi_reportcachecreate.md "ReportCacheCreate") method
  * Receive cache to it using the [ReportCacheGet](imtreportapi_reportcacheget.md "ReportCacheGet") or [ReportCacheGetTemporary](imtreportapi_reportcachegettemporary.md "ReportCacheGetTemporary") method
  * Call [IMTReportCache::ReadBegin](imtreportcache_readbegin.md "ReadBegin") to start reading data. Then use [IMTReportCache::Read*](imtreportcache_readparamfrom.md "ReadParamFrom") methods. After finishing data reading call [IMTReportCache::ReadEnd](imtreportcache_readend.md "ReadEnd").
  * Call [IMTReportCache::WriteBegin](imtreportcache_writebegin.md "WriteBegin") to start writing data. Then use [IMTReportCache::Write*](imtreportcache_writeparamfrom.md "WriteParamFrom") methods. After finishing data writing call [IMTReportCache::WriteEnd](imtreportcache_writeend.md "WriteEnd"). Note that only one report instance can be writing data to cache at a time.

Examples of operations with the data cache are provided in the source code of the Capital report, which is available in "[Report API installation directory]\Report\Examples\Capital.Standard.Reports".
List Functions
The following functions are available for working with the data cache:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [ReportCacheCreate](imtreportapi_reportcachecreate.md "ReportCacheCreate") | Create a data cache object. |
| [ReportCacheGet](imtreportapi_reportcacheget.md "ReportCacheGet") | Call the permanent data cache by name and version. |
| [ReportCacheGetTemporary](imtreportapi_reportcachegettemporary.md "ReportCacheGetTemporary") | Call the temporary data cache by name and version. |
| [KeySetCreate](imtreportapi_keysetcreate.md "KeySetCreate") | Create a key set object for working with the cached data. |
| [KeySetParamLogins](imtreportapi_keysetparamlogins.md "KeySetParamLogins") | Fill the key set with the logins of trading accounts for which the report is generated. |