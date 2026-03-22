# Multithreading (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API")/ Multithreading | [](reportapi_memory_management.md "Memory Management") [](reportapi_examples.md "Ready-made Examples") |
| --- | --- | --- |
| --- | --- |

Multithreading
When writing a multithreaded application, a programmer must take into account some specific features of MetaTrader 5 Report API:
  * Calling Report API methods (IMTReportAPI interface methods, e.g., [IMTReportAPI::Chart*](imtreportapi_chart_management.md "Charts"), [IMTReport::HTML*](imtreportapi_html_management.md "HTML") etc.) are not thread safe. When accessing the same object from two threads, the programmer must ensure synchronization of access.
  * Calling the common interface methods (e.g., configuration bases interface: [IMTConGroup](imtcongroup.md "IMTConGroup"), [IMTConSymbol](imtconsymbol.md "IMTConSymbol"), [IMTConGroup](imtcongroup.md "IMTConGroup") etc.) are also not thread safe. When accessing the same object from two threads, the programmer must ensure synchronization of access.

All report module components must be thread safe.  
---