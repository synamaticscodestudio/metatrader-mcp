# Entry Points (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API")/ Entry Points | [](fast_profit_deals_report.md "Fast Profit Deals") [](mtreportabout.md "MTReportAbout") |
| --- | --- | --- |
| --- | --- |

Entry Points
Any DLL of a server reports module must implement two entry points (exported functions):
| Entry point | Purpose |
| --- | --- |
| --- | --- |
| [MTReportAbout](mtreportabout.md "MTReportAbout") | The method that provides the initial information about the reports module. |
| [MTReportCreate](mtreportcreate.md "MTReportCreate") | The method called by the server to create an instance of an object of the reports module. |