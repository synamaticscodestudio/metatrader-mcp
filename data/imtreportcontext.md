# Report Plugin Interface (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API")/ Report Plugin Interface | [](mtreportcreate.md "MTReportCreate") [](imtreportcontext_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Report Plugin Interface IMTReportContext
Every report module written using the MetaTrader 5 Report API must implement the plugin interface IMTReportContext. This interface is used for managing the module from the server side.
The IMTReportContext interface contains the following methods:
| Method | Description |
| --- | --- |
| --- | --- |
| [Release](imtreportcontext_release.md "Release") | This method removes the created object. In general, the API objects do not count references (AddRef). Thus, when calling the IMTReportContext::Release method, the object is unconditionally removed, and not just the access counter is decreased. |
| [Generate](imtreportcontext_generate.md "Generate") | The IMTReportContext::Generate method is called by a server for a report generation. It passes to the plugin the IMTReportAPI* api — the interface that implements the Report API (the interface used for interaction with the server). |